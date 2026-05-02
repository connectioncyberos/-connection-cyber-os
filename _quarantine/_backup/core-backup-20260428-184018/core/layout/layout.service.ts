import { LayoutConfig } from "./layout.types";

export class LayoutService {
  static applyLayout(config: LayoutConfig) {
    return {
      theme: config.theme,
      colors: {
        primary: config.primaryColor,
        secondary: config.secondaryColor ?? "#CCCCCC"
      },
      font: config.fontFamily ?? "Inter, sans-serif",
      borderRadius: config.borderRadius ?? "6px"
    };
  }
}
