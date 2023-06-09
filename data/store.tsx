import { IText } from "types/layout";
export interface Data {
  nav: IText[];
  title: string;
}
export const data: Data = {
  nav: [
    {
      title: "DRESS",
      url: "dress",
    },
    {
      title: "Lingerie",
      url: "lingerie",
    },
    {
      title: "Bikini",
      url: "bikini",
    },
    {
      title: "Accessories",
      url: "accessories",
    },
  ],
  title: "STORE",
};
