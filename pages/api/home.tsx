import { NextApiRequest, NextApiResponse } from "next";

const home = {
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

  slider: [
    {
      id: 0,
      img: "/images/bgHome.jpg",
    },
    {
      id: 1,
      img: "/images/bgHome1.jpg",
    },
    {
      id: 2,
      img: "/images/bgHome2.jpg",
    },
    {
      id: 3,
      img: "/images/bgHome3.jpg",
    },
    {
      id: 4,
      img: "/images/bgHome4.jpg",
    },
    {
      id: 5,
      img: "/images/bgHome5.jpg",
    },
    {
      id: 6,
      img: "/images/bgHome6.jpg",
    },
    {
      id: 7,
      img: "/images/bgHome7.jpg",
    },
  ],

  cat: {
    title: "Lingerie & Accessories",
    descript:
      "primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet l",
    card: [
      {
        img: "/images/product1.jpg",
        title: "Lingerie",
        link: "#",
      },
      {
        img: "/images/goods3.jpg",
        title: "Accessories",
        link: "#",
      },
      {
        img: "/images/goods2.jpg",
        title: "",
        link: "#",
      },
      {
        img: "/images/goods4.jpg",
        title: "Dress",
        link: "#",
      },
    ],
  },
  blog: {
    backgroundImg: "/images/bg-blog-home.png",
    backgroundSubImg: "/images/text-blog.svg",
    title: `NƠI KHAO KHÁT<br />CẦN ĐƯỢC CHIA SẺ`,
    subTitle: "Khám phá những câu chuyện",
    link: "/blog",
  },
  quote: {
    title: "Exclusive Lingerie",
    descript:
      "Một chiếc váy ôm sẽ giúp các nàng khoe trọn đường cong gợi cảm. Một vài món phụ kiện sẽ làm tăng thêm sự tinh tế và lộng lẫy.  Một bộ nội y ren lụa mềm sẽ làm cho nàng thêm sự cuồng nhiệt.  Tất cả tạo nên một phong cách sống cháy hết mình và đam mê không khuôn khổ, không gò bó.",
    subDescript: `Follow Instagram của chúng tôi để xem những món đồ “bắt mắt” nhé ! <br /><span>@trine.closet</span>`,
  },
  carousel: [
    {
      img: "/images/slider-home-4.png",
    },
    {
      img: "/images/slider-home-2.png",
    },
    {
      img: "/images/slider-home-5.png",
    },
    {
      img: "/images/slider-home-1.png",
    },
    {
      img: "/images/slider-home-6.png",
    },
    {
      img: "/images/slider-home-3.png",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(home);
}
