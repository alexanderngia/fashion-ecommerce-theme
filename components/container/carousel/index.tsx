import classnames from "classnames";
import { CardProduct } from "components/ui/card";
import Img from "components/ui/img";
import { NextPage } from "next";
import React from "react";
import Slider from "react-slick";
import { CarouselData } from "types/carousel";
import styles from "./index.module.scss";
import { Products } from "types/product";
interface CarouselProps {
  data: CarouselData[];
}
interface CarouselProductProps {
  data: Products[];
  customClass?: string;
  customCont?: string;
  customCardProduct?: string;
  customArrow?: string;
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
  customArrow,
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
              (
                { nameItem, urlItem, imgItem, priceItem, categoryItem },
                index: number
              ) => {
                return (
                  <CardProduct
                    customClass={customClass}
                    className={classnames(
                      styles["carouselCard"],
                      customCardProduct
                    )}
                    key={imgItem + nameItem + index}
                    href={`/store/${categoryItem}/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    price={priceItem}
                  />
                );
              }
            )}
        </Slider>
        <div className={(classnames(styles["decord-arrow"]), customArrow)}>
          <p>Vuốt sang trái</p>
          <div className={styles["right-arrow-white"]}></div>
        </div>
      </div>
    </div>
  );
};
