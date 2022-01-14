import React from "react";

import PaginatedThemeSelector from "../PaginatedThemeSelector";

import { presetThemes } from "../../../../lib/themes";

export const PresetThemeSelector = ({
  setTheme,
  presetThemesPage,
  setPresetThemesPage
}) => {
  const sortedPresetThemes = presetThemes.map(item => [
    item.idx,
    { theme: item }
  ]);

  console.log("setTheme", setTheme);

  return (
    <PaginatedThemeSelector
      title="Preset themes"
      themes={sortedPresetThemes}
      className="preset-theme-selector"
      previewClassName="preset-theme-preview"
      onClick={theme => {
        console.log("theme is ", theme);
        setTheme({ theme });
      }}
      perPage={9}
      currentPage={presetThemesPage}
      setCurrentPage={setPresetThemesPage}
    />
  );
};

export default PresetThemeSelector;
