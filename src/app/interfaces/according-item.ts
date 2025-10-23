import { InputItem } from "./input-item";

export interface AccordingItem {
  title: string;
  value: string;
  inputs: InputItem[];
  total_price?: number;
  age?: number | undefined;
}
