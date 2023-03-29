import { IText } from "types/layout";
export interface Data {
  nav: IText[];
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
};
