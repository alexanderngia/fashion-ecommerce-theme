import { IText } from "types/layout";
export interface Data {
  nav: IText[];
  title: string;
}
export const data: Data = {
  nav: [
    {
      title: "DRESS",
      url: "/store/dress",
    },
    {
      title: "Lingerie",
      url: "/store/lingerie",
    },
    {
      title: "Bikini",
      url: "/store/bikini",
    },
    {
      title: "Accessories",
      url: "/store/accessories",
    },
  ],
  title: "STORE",
};
