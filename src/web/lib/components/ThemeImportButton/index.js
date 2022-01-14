import React from "react";
import headerButton from "../HeaderButton";
import iconExport from "../AppHeader/icon_export.svg";
import { performThemeImport } from "../../import";

export const ThemeImportButton = ({ setTheme }) => {
  const inputFile = React.useRef(null);
  const onImportButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const onFileUpload = e => {
    console.log("onFileChange ", e.target.files[0]);
    const file = e.target.files[0];
    const uploadedTheme = performThemeImport(file);
    setTheme({ theme: uploadedTheme });
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onFileUpload}
      />
      {headerButton(onImportButtonClick, iconExport, "Import")}
    </div>
  );
};
