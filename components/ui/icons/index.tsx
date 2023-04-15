import React, { MouseEventHandler } from "react";
import Image, { ImageProps } from "next/legacy/image";
import styles from "./index.module.scss";
import searchIcon from "icons/search.svg";
import classnames from "classnames";

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
  return (
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
      className={(styles["root"], customClass)}
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
      className={(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 7 7"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.55092 0V2.55092H0V4.25153H2.55092V6.80244H4.25153V4.25153H6.80244V2.55092H4.25153V0H2.55092Z" />
    </svg>
  );
};
// export const Search: React.FC<IconsProps> = ({ onClick, customClass }) => {
//   return (
//     <svg
//       className={(styles["root"], customClass)}
//       onClick={onClick}
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//       focusable="false"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g data-name="Layer 2">
//         <path
//           d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM5 11a6 6 0 116 6 6 6 0 01-6-6z"
//           data-name="search"
//         ></path>
//       </g>
//     </svg>
//   );
// };
// export const Search: React.FC<IconsProps> = ({ onClick, customClass }) => {
//   return (
//     <svg
//       className={(styles["root"], customClass)}
//       onClick={onClick}
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//       focusable="false"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g data-name="Layer 2">
//         <path
//           d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM5 11a6 6 0 116 6 6 6 0 01-6-6z"
//           data-name="search"
//         ></path>
//       </g>
//     </svg>
//   );
// };
