import { IText } from "types/layout";
export interface Data {
  nav: IText[];
  heading: string;
  category: ICategory[];
}
export interface ICategory {
  title: string;
}
export const data: Data = {
  nav: [
    {
      title: "STORE",
      url: "/store",
    },
    {
      title: "BLOG",
      url: "/blog",
    },
    {
      title: "CONTACT",
      url: "/contact",
    },
  ],
  heading: "LINGERIE/LIFESTYLE/ACCESSORIES DRESS/OIL/PERFURM",
  category: [
    {
      title: "Dress",
    },
    {
      title: "Lingerie",
    },
    {
      title: "Bikini",
    },
    {
      title: "Accessories",
    },
  ],
};
