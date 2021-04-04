export type ColorName = "pink" | "green" | "orange" | "blue" | "yellow" | "red";
export type RGB =
  | "cb6bff"
  | "cffa41"
  | "ffb36b"
  | "41faf4"
  | "fffa6b"
  | "ff8269";

export interface ColorList {
  name: ColorName;
  hex: number[];
  rgb: RGB;
}

export const GetRGBList: RGB[] = [
  "cb6bff",
  "cffa41",
  "ffb36b",
  "41faf4",
  "fffa6b",
  "ff8269",
];

export const ColorLists: ColorList[] = [
  { name: "pink", hex: [221, 69, 255], rgb: GetRGBList[0] },
  { name: "green", hex: [207, 250, 65], rgb: GetRGBList[1] },
  { name: "orange", hex: [255, 179, 107], rgb: GetRGBList[2] },
  { name: "blue", hex: [65, 250, 244], rgb: GetRGBList[3] },
  { name: "yellow", hex: [255, 250, 107], rgb: GetRGBList[4] },
  { name: "red", hex: [255, 130, 105], rgb: GetRGBList[5] },
];
