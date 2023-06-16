import { IText } from "types/layout";
export interface Data {
  nav: IText[];
  logo: string;
  navStore: IText[];
}
export const header: Data = {
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
  logo: "/images/transBlack.png",
  navStore: [
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
};
