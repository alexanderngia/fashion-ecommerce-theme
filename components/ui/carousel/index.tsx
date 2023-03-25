import classnames from "classnames";
import { CardProduct } from "components/ui/card";
import Img from "components/ui/img";
import { NextPage } from "next";
import React from "react";
import Slider from "react-slick";
import { CarouselData, CarouselProductData } from "types/carousel";
import styles from "./index.module.scss";
interface CarouselProps {
  data: CarouselData[];
}
interface CarouselProductProps {
  data: CarouselProductData[];
  customClass?: string;
  customCont?: string;
  customCardProduct?: string;
}

export const CarouselImg: NextPage<CarouselProps> = ({ data }) => {
  return (
    <ul className={styles["root"]}>
      {data &&
        data.map(({ img }) => {
          return (
            <li key={img}>
              <Img src={img} alt={img} />
            </li>
          );
        })}
    </ul>
  );
};
export const CarouselProduct: NextPage<CarouselProductProps> = ({
  data,
  customClass,
  customCont,
  customCardProduct,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className={styles["root-product"]}>
      <div className={classnames(styles["container"], customCont)}>
        <Slider {...settings}>
          {data &&
            data?.map(
              ({ nameItem, urlItem, imgItem, priceItem }, index: number) => {
                return (
                  <CardProduct
                    customClass={customClass}
                    className={classnames(
                      styles["carouselCard"],
                      customCardProduct
                    )}
                    key={imgItem + nameItem + index}
                    href={`/store/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    price={priceItem}
                  />
                );
              }
            )}
        </Slider>
        <div className={styles["decord-arrow"]}>
          <p>Vuốt sang trái</p>
          <div className={styles["right-arrow-white"]}></div>
        </div>
      </div>
    </div>
  );
};
