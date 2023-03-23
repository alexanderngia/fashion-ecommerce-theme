import { NextApiRequest, NextApiResponse } from "next";
const store = {
  nav: [
    {
      title: "DRESS",
      url: "/dress",
    },
    {
      title: "Lingeria",
      url: "/lingeria",
    },
    {
      title: "Bikini",
      url: "/bikini",
    },
    {
      title: "Accessories",
      url: "/accessories",
    },
  ],
  title: "LINGERIE",
  breadcrumb: "/STORE/LINGERIA",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(store);
}
