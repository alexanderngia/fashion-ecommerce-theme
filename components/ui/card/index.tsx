import Link from "next/link";
import React, { MouseEventHandler } from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";
import classnames from "classnames";
import Img from "components/ui/img";
import { Trash } from "components/ui/icons";
import InputNumber from "components/ui/input/number";
import { decreaseQuantityItem, increaseQuantityItem } from "redux/action/cart";
import { useAppDispatch } from "redux/hook";

interface CardProps {
  title: string;
  image: string;
  author?: string;
  className?: string;
  href: string;
  customClass?: string;
  classThumb?: string;
  onClick?: MouseEventHandler;
  customPost?: string;
}

interface Product extends CardProps {
  price?: number;
  colorItem?: string[];
  sizeItem?: string[];
  qualityItem?: number;
  idItem?: string;
}
interface ProductCart extends CardProps {
  price: number;
  colorItem: string;
  sizeItem: string;
  qualityItem: number;
  idItem: string;
}

interface ProductCartQuantity extends ProductCart {
  total: number;
}
interface ProductCartSub extends Product {
  total: number;
}

export const CardPost: NextPage<CardProps> = ({
  title,
  image,
  author,
  customPost,
  href,
}) => {
  return (
    <Link className={classnames(styles["cardPost"], customPost)} href={href}>
      <div>
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
  return (
    <Link href={href}>
      <div className={classnames(styles["cardProduct"], className)} {...props}>
        <div className={classnames(styles["thumb"], classThumb)}>
          <Img alt={title} src={image} />
        </div>

        <div className={classnames(styles["info"], customClass)}>
          <span className={styles["title"]}>{title}</span>

          <p className={styles["price"]}>
            {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} vnd
          </p>
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
  return (
    <Link href={href}>
      <div
        className={classnames(styles["cardProductItem"], className)}
        {...props}
      >
        <div className={classnames(styles["thumb"], classThumb)}>
          <Img alt={title} src={image} />
        </div>

        <div className={classnames(styles["info"], customClass)}>
          <p className={styles["title"]}>{title}</p>

          {colorItem && (
            <span
              className={styles["color"]}
              style={{ backgroundColor: `${colorItem}` }}
            ></span>
          )}
          {sizeItem && <p className={styles["size"]}>{sizeItem}</p>}

          <p className={styles["price"]}>
            {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
          </p>
        </div>
      </div>
    </Link>
  );
};

export const CardProductCart: NextPage<Product> = ({
  title,
  image,
  author,
  className,
  price,
  href,
  sizeItem,
  colorItem,
  qualityItem,
  customClass,
  classThumb,
  onClick,
  ...props
}) => {
  return (
    <div
      className={classnames(styles["cardProductItem"], className)}
      {...props}
    >
      <div className={classnames(styles["thumb"], classThumb)}>
        <Img alt={title} src={image} />
      </div>

      <div className={classnames(styles["info"], customClass)}>
        <Link href={href}>
          <p className={styles["title"]}>{title}</p>
        </Link>

        <span
          className={styles["color"]}
          style={{ backgroundColor: `${colorItem}` }}
        ></span>
        <p className={styles["size"]}>{sizeItem}</p>
        {qualityItem && <p className={styles["quality"]}>x {qualityItem}</p>}
        <div className={styles["container"]}>
          <p className={styles["price"]}>
            {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
          </p>
          <Trash customClass={styles["trash"]} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export const CardProductCartSub: NextPage<ProductCartSub> = ({
  title,
  image,
  author,
  className,
  price,
  href,
  sizeItem,
  colorItem,
  qualityItem,
  customClass,
  classThumb,
  total,
  onClick,
  ...props
}) => {
  return (
    <div
      className={classnames(
        styles["cardProductItem"],
        styles["cardProductCartSub"],
        className
      )}
      {...props}
    >
      <div className={classnames(styles["thumb"], classThumb)}>
        <Img alt={title} src={image} />
      </div>

      <div className={classnames(styles["info"], customClass)}>
        <Link href={href}>
          <p className={styles["title"]}>{title}</p>
        </Link>
        <div className={styles["container"]}>
          <p className={styles["price"]}>
            {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
          </p>
        </div>
        <span
          className={styles["color"]}
          style={{ backgroundColor: `${colorItem}` }}
        ></span>
        <p className={styles["size"]}>{sizeItem}</p>
        {qualityItem && <p className={styles["quality"]}>x {qualityItem}</p>}
      </div>
    </div>
  );
};
export const CardProductCartQuantity: NextPage<ProductCartQuantity> = ({
  title,
  image,
  author,
  className,
  price,
  href,
  sizeItem,
  colorItem,
  qualityItem,
  customClass,
  classThumb,
  idItem,
  total,
  onClick,
  ...props
}) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={classnames(
        styles["cardProductItem"],
        styles["cardProductCartQuantity"],
        className
      )}
      {...props}
    >
      <div className={styles["col"]}>
        <div className={classnames(styles["thumb"], classThumb)}>
          <Img alt={title} src={image} />
        </div>

        <div className={classnames(styles["info"], customClass)}>
          <Link href={href}>
            <p className={styles["title"]}>{title}</p>
          </Link>

          <span
            className={styles["color"]}
            style={{ backgroundColor: `${colorItem}` }}
          ></span>
          <p className={styles["size"]}>{sizeItem}</p>
          <Trash customClass={styles["trash"]} onClick={onClick} />
        </div>
      </div>
      <div className={styles["col"]}>
        {qualityItem !== undefined &&
          sizeItem !== undefined &&
          colorItem !== undefined && (
            <InputNumber
              decrement={() =>
                dispatch(decreaseQuantityItem({ idItem, sizeItem, colorItem }))
              }
              increment={() =>
                dispatch(increaseQuantityItem({ idItem, sizeItem, colorItem }))
              }
              valueDefault={qualityItem}
            />
          )}
      </div>
      <div className={styles["col"]}>
        <div className={styles["container"]}>
          <p className={styles["price"]}>
            {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
          </p>
        </div>
      </div>
    </div>
  );
};
