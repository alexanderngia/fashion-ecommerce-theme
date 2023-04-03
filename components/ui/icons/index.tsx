import React, { MouseEventHandler } from "react";
import Image, { ImageProps } from "next/legacy/image";
import styles from "./index.module.scss";
import searchIcon from "icons/search.svg";
import classnames from "classnames";

interface IconsProps {
  onClick: MouseEventHandler;
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
