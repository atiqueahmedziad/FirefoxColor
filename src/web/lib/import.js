import JSZip from "jszip";

export const performThemeImport = zipFile => {
  const jsZip = new JSZip();

  const manifestPromise = jsZip
    .loadAsync(zipFile)
    .then(zip => zip.file("manifest.json").async("string"))
    .then(data => JSON.parse(data));

  manifestPromise.then(manifest => {
    console.log("manifest", manifest);
    console.log(formatManifestData(manifest));

    return formatManifestData(manifest);
  });
};

const formatManifestData = manifestData => {
  const { name, theme } = manifestData;

  const colors = {};

  Object.keys(theme.colors).map(colorHeading => {
    colors[colorHeading] = formatRGBAObj(theme.colors[colorHeading]);
  });

  if (Object.keys(theme.images).length !== 0) {
    console.log("images available ", theme.images);
  }

  const formattedThemeObj = {
    title: name,
    colors
  };

  return formattedThemeObj;
};

const formatRGBAObj = rgba => {
  const rgbaArr = rgba.replace(/[^\d,.%]/g, "").split(",");
  const rgbaObj = {
    r: rgbaArr[0],
    g: rgbaArr[1],
    b: rgbaArr[2]
  };

  if (rgbaArr[3]) {
    rgbaObj.a = rgbaArr[3];
  }

  return rgbaObj;
};
