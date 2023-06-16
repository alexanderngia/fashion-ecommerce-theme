import { IText } from "types/layout";

export interface Data {
  nav: IText[];
  logo: string;
  social: {
    fb: string;
    insta: string;
  };
}
export const footer: Data = {
  nav: [
    {
      title: "About",
      url: "/store",
    },
    {
      title: "Store",
      url: "/store",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      url: "/terms-conditions",
    },
  ],
  logo: "/images/transBlack.png",
  social: {
    fb: "",
    insta: "",
  },
};
