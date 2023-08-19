const deepFreeze = (obj: object) => {
  Object.values(obj).forEach((v) => {
    if (v && typeof v === "object") {
      deepFreeze(v);
    }
  });

  return Object.freeze(obj);
};

const STBlueColors = {
  "STBlue-900": "#33315F",
  "STBlue-800": "#3F3D7D",
  "STBlue-700": "#534FAB",
  "STBlue-600": "#574CD0",
  "STBlue-500": "#5C55F7",
  "STBlue-400": "#9494FF",
  "STBlue-300": "#C1C1FF",
  "STBlue-200": "#DCDCFF",
  "STBlue-100": "#EAEAFF",
  "STBlue-50": "#F5F5FF",
  "STBlue-25": "#FAFAFE",
};

const WarmGrayColors = {
  "WarmGray-900": "#333333",
  "WarmGray-800": "#444444",
  "WarmGray-700": "#555555",
  "WarmGray-600": "#666666",
  "WarmGray-500": "#888888",
  "WarmGray-400": "#ADADAD",
  "WarmGray-300": "#CCCCCC",
  "WarmGray-200": "#DDDDDD",
  "WarmGray-100": "#EEEEEE",
  "WarmGray-50": "#F7F7F7",
};

const BlueGrayColors = {
  "BlueGray-900": "#1B2334",
  "BlueGray-800": "#2E3647",
  "BlueGray-700": "#404A5F",
  "BlueGray-600": "#596378",
  "BlueGray-500": "#6F798E",
  "BlueGray-400": "#A2ACBD",
  "BlueGray-300": "#C7CDD7",
  "BlueGray-200": "#DCE0E9",
  "BlueGray-100": "#EBEEF4",
  "BlueGray-50": "#F4F6F9",
};

deepFreeze(STBlueColors);
deepFreeze(WarmGrayColors);
deepFreeze(BlueGrayColors);

export { STBlueColors, WarmGrayColors, BlueGrayColors };
