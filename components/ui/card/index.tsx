import Link from "next/link";
import React, { StyleHTMLAttributes } from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";
import Image from "next/image";
import classnames from "classnames";
import Img from "../img";
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
