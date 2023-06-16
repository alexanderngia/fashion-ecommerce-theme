import { CarouselData } from "types/carousel";
import { CategoryData } from "types/category";
import { IText } from "types/layout";
import { QuoteData } from "types/quote";
import { SliderData } from "types/slider";
export interface Data {
  slider: SliderData[];
  cat: CategoryData;
  blog: {
    title: string;
    backgroundImg: string;
    backgroundSubImg: string;
    subTitle: string;
    link: string;
  };
  quote: QuoteData;
  carousel: CarouselData[];
}
export const data: Data = {

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
    title: "Gợi Cảm & Tinh Tế",
    descript: `Chào mừng bạn đến với Trine, nơi giúp bạn trở nên gợi cảm và quyến rũ hơn bao giờ hết. Trine tự hào mang đến những sản phẩm độc đáo và tinh tế, được thiết kế đặc biệt để nâng cao sự tự tin và khẳng định vẻ quyến rũ của riêng bạn.`,
    card: [
      {
        img: "/images/product1.jpg",
        title: "Lingerie",
        link: "/store/lingerie",
      },
      {
        img: "/images/goods3.jpg",
        title: "Accessories",
        link: "/store/accessories",
      },
      {
        img: "/images/goods2.jpg",
        title: "",
        link: "#",
      },
      {
        img: "/images/goods4.jpg",
        title: "Dress",
        link: "/store/dress",
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
