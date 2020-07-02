const colors = {
  black: "#867f6e", 
  lightBlack: "#867f6e",
  white: "#eaf4de", 
  lightWhite: "#eaf4de",
  blue: "#227b4d", 
  lightBlue: "#227b4d",
  cyan: "#e18f62", 
  lightCyan: "#e18f62",
  green: "#669c50", 
  lightGreen: "#669c50",
  magenta: "#a5abda", 
  lightMagenta: "#a5abda",
  red: "#eb6f6f", 
  lightRed: "#eb6f6f",
  yellow: "#f2d696", 
  lightYellow: "#f2d696"
};
exports.decorateConfig = config =>
  Object.assign({}, config, {
    padding: "12px 30px 30px 30px",
    backgroundColor: "#241f17",
    foregroundColor: "#eaf4de",
    cursorColor: "#eaf4de",
    selectionColor: "rgba(134, 129, 110, 0.3)",
    borderColor: "#0000",
    colors
  });
