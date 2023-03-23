import { NextApiRequest, NextApiResponse } from "next";

const product = [
  {
    idItem: "12412321nbj21b312j31231j23",
    imgItem: "/images/product2.jpg",
    urlItem: "sexy-lingeria",
    nameItem: "IPhone X",
    bodyItem: "text nè",
    bodyHtmlItem: `<p>test nè</p>`,
    qualityItem: 10,
    colorItem: "Black",
    sizeItem: "XL",
    priceItem: 20000000,
    categoryItem: "Black IP X",
  },
  {
    idItem: "12412321nbj21b312j3123151523",
    imgItem: "/images/product3.jpg",
    urlItem: "lingeria-X",
    nameItem: "lingeria sexy",
    bodyItem: "text nè",
    bodyHtmlItem: `<p>test nè</p>`,
    qualityItem: 10,
    colorItem: "Black",
    sizeItem: "XL",
    priceItem: 20000000,
    categoryItem: "Black IP X",
  },
  {
    idItem: "12412321nbj21b312j312372df",
    imgItem: "/images/product4.jpg",
    urlItem: "bikini-sexy",
    nameItem: "Bikini sexy",
    bodyItem: "text nè",
    bodyHtmlItem: `<p>test nè</p>`,
    qualityItem: 10,
    colorItem: "Black",
    sizeItem: "XL",
    priceItem: 20000000,
    categoryItem: "Black IP X",
  },
  {
    idItem: "12412321nbj21b38334fdh3",
    imgItem:
      "https://firebasestorage.googleapis.com/v0/b/upload-image-trine.appspot.com/o/images%2FAmrich%20dorm%202.jpegdf3fbd3b-5384-46cb-9248-87ecc4453bfd?alt=media&token=23eabc08-9812-488e-91e7-00fb7ce8a5c7",
    urlItem: "IPhone-X",
    nameItem: "IPhone X",
    bodyItem: "text nè",
    bodyHtmlItem: `<p>test nè</p>`,
    qualityItem: 10,
    colorItem: "Black",
    sizeItem: "XL",
    priceItem: 20000000,
    categoryItem: "Black IP X",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(product);
}
