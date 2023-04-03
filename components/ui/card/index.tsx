import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";
import classnames from "classnames";
import Img from "components/ui/img";
interface CardProps {
  title: string;
  image: string;
  author?: string;
  className?: string;
  href: string;
  customClass?: string;
  classThumb?: string;
}

interface Product extends CardProps {
  price?: number;
  colorItem?: string;
  sizeItem?: string;
}
export const CardPost: NextPage<CardProps> = ({
  title,
  image,
  author,
  className,
  href,
}) => {
  return (
    <Link href={href}>
      <div className={`${styles["root"]} ${className}`}>
        <div className={styles["img"]}>
          <Img alt={title} src={image} />
        </div>

        <article>
          <p className={styles["title"]}>{title}</p>
          <span>{author}</span>
        </article>
      </div>
    </Link>
  );
};

export const CardProduct: NextPage<Product> = ({
  title,
  image,
  author,
  className,
  price,
  href,
  customClass,
  classThumb,
  ...props
}) => {
  // var str = price.toString().split(".");
  // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Link href={href}>
      <div className={`${styles["cardProduct"]} ${className}`} {...props}>
        <div className={`${styles["thumb"]} ${classThumb}`}>
          <Img alt={title} src={image} />
        </div>

        <div className={classnames(styles["info"], customClass)}>
          <span>
            <p className={styles["title"]}>{title}</p>
            {/* <p className={styles["cta"]}>DETAIL</p> */}
          </span>
          <p className={styles["price"]}>{price?.toLocaleString()} vnd</p>
        </div>
      </div>
    </Link>
  );
};

export const CardProductItem: NextPage<Product> = ({
  title,
  image,
  author,
  className,
  price,
  href,
  sizeItem,
  colorItem,
  customClass,
  classThumb,
  ...props
}) => {
  // var str = price.toString().split(".");
  // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Link href={href}>
      <div className={`${styles["cardProductItem"]} ${className}`} {...props}>
        <div className={`${styles["thumb"]} ${classThumb}`}>
          <Img alt={title} src={image} />
        </div>

        <div className={classnames(styles["info"], customClass)}>
          <p className={styles["title"]}>{title}</p>

          <span
            className={styles["color"]}
            style={{ backgroundColor: `${colorItem}` }}
          ></span>
          <p className={styles["size"]}>{sizeItem}</p>
          <p className={styles["price"]}>{price?.toLocaleString()} VND</p>
        </div>
      </div>
    </Link>
  );
};
