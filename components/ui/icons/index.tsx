import React, { MouseEventHandler, useEffect } from "react";
import Image, { ImageProps } from "next/legacy/image";
import styles from "./index.module.scss";
import searchIcon from "icons/search.svg";
import classnames from "classnames";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { selectCartList, updateCart } from "redux/action/cart";

interface IconsProps {
  onClick?: MouseEventHandler;
  customClass?: string;
}

export const Search: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <path
          d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM5 11a6 6 0 116 6 6 6 0 01-6-6z"
          data-name="search"
        ></path>
      </g>
    </svg>
  );
};
export const Cart: React.FC<IconsProps> = ({ onClick, customClass }) => {
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getFromLocalStorage = (key: string) => {
      if (!key || typeof window === "undefined") {
        return "";
      }
      return localStorage.getItem(key);
    };
    dispatch(
      updateCart(
        getFromLocalStorage("CART")
          ? JSON.parse(getFromLocalStorage("CART") || "{}")
          : []
      )
    );
  }, [dispatch]);
  return (
    <div className={styles["container-cart"]}>
      {cart?.length >= 1 && (
        <div className={styles["number-cart"]}>{cart?.length}</div>
      )}

      <svg
        className={classnames(styles["root"], customClass)}
        onClick={onClick}
        viewBox="0 0 16 16"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
      </svg>
    </div>
  );
};
export const CustomerService: React.FC<IconsProps> = ({
  onClick,
  customClass,
}) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M22 17.002a6.002 6.002 0 01-4.713 5.86l-.638-1.914A4.003 4.003 0 0019.465 19H17a2 2 0 01-2-2v-4a2 2 0 012-2h2.938a8.001 8.001 0 00-15.876 0H7a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z"></path>
    </svg>
  );
};
export const Close: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.59236 0.450195L0 4.04255L1.8344 5.87695L6.36943 10.4884L1.8344 15.0234L0 16.7814L3.59236 20.4502L5.42675 18.6158L10.0382 14.0043L14.5732 18.6158L16.3312 20.4502L20 16.7814L18.1656 15.0234L13.5541 10.4884L18.1656 5.87695L20 4.04255L16.3312 0.450195L14.5732 2.28459L10.0382 6.81962L5.42675 2.28459L3.59236 0.450195Z"
        fill="black"
      />
    </svg>
  );
};
export const Minus: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 7 4"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V1.75H7V0H0Z" />
    </svg>
  );
};
export const Plus: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 7 7"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.55092 0V2.55092H0V4.25153H2.55092V6.80244H4.25153V4.25153H6.80244V2.55092H4.25153V0H2.55092Z" />
    </svg>
  );
};
export const Trash: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 19 20"
      fill="currentColor"
    >
      <path d="M8.33936 0C6.96436 0 5.83936 1.125 5.83936 2.5H3.33936C1.96436 2.5 0.839355 3.625 0.839355 5H18.3394C18.3394 3.625 17.2144 2.5 15.8394 2.5H13.3394C13.3394 1.125 12.2144 0 10.8394 0H8.33936ZM3.33936 7.5V19.525C3.33936 19.8 3.53936 20 3.81436 20H15.3894C15.6644 20 15.8644 19.8 15.8644 19.525V7.5H13.3644V16.25C13.3644 16.95 12.8144 17.5 12.1144 17.5C11.4144 17.5 10.8644 16.95 10.8644 16.25V7.5H8.36436V16.25C8.36436 16.95 7.81436 17.5 7.11436 17.5C6.41436 17.5 5.86436 16.95 5.86436 16.25V7.5H3.36436H3.33936Z" />
    </svg>
  );
};
export const Dollar: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      onClick={onClick}
      className={classnames(styles["root"], customClass)}
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.76405 0V1.87266H2.35955C1.08614 1.87266 0.0187266 2.94007 0.0187266 4.21348V5.14981C0.0187266 6.42322 0.842697 7.47191 2.05993 7.79026L6.85393 9.02622C7.11611 9.10112 7.49064 9.56929 7.49064 9.85019V10.7865C7.49064 11.0487 7.28464 11.2547 7.02247 11.2547H2.34082C2.1161 11.2547 1.94757 11.1798 1.87266 11.1423V9.38202H0V11.2547C0 11.8914 0.374532 12.4345 0.82397 12.7154C1.25468 13.015 1.79775 13.1273 2.34082 13.1273H3.74532V15H5.61798V13.1273H7.02247C8.31461 13.1273 9.3633 12.0787 9.3633 10.7865V9.85019C9.3633 8.57678 8.53933 7.52809 7.3221 7.20974L2.52809 5.97378C2.26592 5.89888 1.89139 5.43071 1.89139 5.14981V4.21348C1.89139 3.95131 2.09738 3.74532 2.35955 3.74532H7.0412C7.24719 3.74532 7.43446 3.82022 7.50936 3.85768V5.61798H9.38202V3.74532C9.38202 3.10861 9.00749 2.56554 8.55805 2.28464C8.12734 1.98502 7.58427 1.87266 7.0412 1.87266H5.6367V0L3.76405 0Z"
        fill="black"
      />
    </svg>
  );
};
export const Right: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      onClick={onClick}
      className={classnames(styles["root"], customClass)}
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.375 0V3.75H0V7.5H9.375V11.25L15 5.56875L9.375 0Z"
        fill="black"
      />
    </svg>
  );
};
export const Tablet: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      onClick={onClick}
      className={classnames(styles["root"], customClass)}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.638298 0C0.300375 0 0 0.300375 0 0.638298V14.3617C0 14.6996 0.300375 15 0.638298 15H12.4844C12.8223 15 13.1227 14.6996 13.1227 14.3617V0.638298C13.1227 0.300375 12.8223 0 12.4844 0L0.638298 0ZM1.87735 1.87735H11.2641V11.2641H1.87735V1.87735ZM6.57071 12.2028C7.28411 12.2028 7.75344 12.9912 7.39675 13.6108C7.04005 14.2303 6.12015 14.2303 5.74468 13.6108C5.38799 12.9912 5.83855 12.2028 6.57071 12.2028Z"
        fill="black"
      />
    </svg>
  );
};
export const CreditCard: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      onClick={onClick}
      className={classnames(styles["root"], customClass)}
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.46875 0C0.20625 0 0 0.20625 0 0.46875V1.875H15V0.46875C15 0.20625 14.7937 0 14.5312 0H0.46875ZM0 3.75V10.7812C0 11.0437 0.20625 11.25 0.46875 11.25H14.5312C14.7937 11.25 15 11.0437 15 10.7812V3.75H0ZM1.875 7.5H3.75V9.375H1.875V7.5ZM5.625 7.5H7.5V9.375H5.625V7.5Z"
        fill="black"
      />
    </svg>
  );
};
