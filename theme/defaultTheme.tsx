/* eslint-disable no-shadow */
// theme.ts
import { DefaultTheme } from "styled-components";
import { Primary } from "./colors";

const defaultTheme: DefaultTheme = {
  name: "Default",
  textColor: "#000000",
  borderRadius: "16px",
  fontWeight: {
    "text-normal": "450",
    "text-medium": "500",
    "text-bold": "700",
  },
  spacing: {
    S04: "4px",
    S08: "8px",
    S10: "10px",
    S12: "12px",
    S16: "16px",
    S20: "20px",
    S24: "24px",
    S32: "32px",
    S40: "40px",
    S46: "46px",
    S48: "48px",
    S56: "56px",
    S68: "68px",
    S72: "72px",
    S80: "80px",
  },
  bodyColor: "#F5F5F5",
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: Primary,
    secondary: Primary,
  },
};

export default defaultTheme;
