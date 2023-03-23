import Link from "next/link";
import React, { StyleHTMLAttributes } from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";
import Image from "next/image";
import classnames from "classnames";
interface CardProps {
  title?: string;
  image: string;
  author?: string;
  className?: string;
  href: string;
  customClass?: string;
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
          <Image alt={title} src={image} layout="fill" />
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
  ...props
}) => {
  // var str = price.toString().split(".");
  // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Link href={href}>
      <div className={`${styles["cardProduct"]} ${className}`} {...props}>
        <div className={styles["thumb"]}>
          <Image
            alt={title}
            src={image}
            layout="responsive"
            width={300}
            height={365}
          />
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
