import { NextApiRequest, NextApiResponse } from "next";
const layoutDefault = {
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(layoutDefault);
}