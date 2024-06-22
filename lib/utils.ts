import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberToMonth(num: number): string {
  // Use a switch statement to match the input number to the corresponding month
  switch (num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "January";
  }
}

export function darkHexColor(hex: string, percent: number): string {
  // Remove the '#' character if present
  hex = hex.replace("#", "");

  // Parse the hexadecimal color value
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Darken the color
  r = Math.floor(r * (1 - percent / 100));
  g = Math.floor(g * (1 - percent / 100));
  b = Math.floor(b * (1 - percent / 100));

  // Ensure the values are within the valid range [0, 255]
  r = Math.min(Math.max(0, r), 255);
  g = Math.min(Math.max(0, g), 255);
  b = Math.min(Math.max(0, b), 255);

  // Convert the decimal values to hexadecimal
  const darkHex =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return darkHex;
}
