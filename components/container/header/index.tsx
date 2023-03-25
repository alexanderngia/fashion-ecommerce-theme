import Link from "next/link";
import React, { useState } from "react";
import styles from "./index.module.scss";

import Img from "@/components/ui/img";
import { Cart } from "@styled-icons/bootstrap/Cart";
import { CustomerService } from "@styled-icons/remix-line/CustomerService";
import { IText } from "types/layout";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";

interface HeaderProps {
  layout: "home" | "store" | "default";
  data: IText[];
}
const Header: React.FC<HeaderProps> = ({ layout, data }) => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);

  const onToggleSearch = async () => {
    setSearchToggle(!searchToggle);
  };
  switch (layout) {
    case "home":
      return (
        <div className={styles["header"]}>
          <div className={styles["menu"]}>
            {data &&
              data.map(({ title, url }) => {
                return (
                  <Link key={title} href={url}>
                    {title}
                  </Link>
                );
              })}
          </div>
          <div className={styles["icon"]}>
            {/* <Translate /> */}
            {searchToggle && <input className={styles["search"]} type="text" />}

            <SearchOutline onClick={onToggleSearch} />
            <Link href="/cart">
              <Cart />
            </Link>
            <Link href="/support">
              <CustomerService />
            </Link>
          </div>
        </div>
      );
    case "store":
      return (
        <div className={styles["header-store"]}>
          <div className={styles["menu"]}>
            {data &&
              data.map(({ title, url }) => {
                return (
                  <Link key={title} href={url}>
                    {title}
                  </Link>
                );
              })}
          </div>
          <div className={styles["logo"]}>
            <Link href="/">
              <Img alt="logo store" src="/images/transBlack.png" />
            </Link>
          </div>
          <div className={styles["icon"]}>
            {/* <Translate /> */}
            {searchToggle && <input className={styles["search"]} type="text" />}

            <SearchOutline onClick={onToggleSearch} />
            <Link href="/cart">
              <Cart />
            </Link>
            <Link href="/support">
              <CustomerService />
            </Link>
          </div>
        </div>
      );
    default:
      return (
        <div className={styles["header-store"]}>
          <div className={styles["menu"]}>
            {data &&
              data.map(({ title, url }) => {
                return (
                  <Link key={title} href={url}>
                    {title}
                  </Link>
                );
              })}
          </div>
          <div className={styles["logo"]}>
            <Link href="/">
              <Img alt="logo store" src="/images/transBlack.png" />
            </Link>
          </div>
          <div className={styles["icon"]}>
            {/* <Translate /> */}
            {searchToggle && <input className={styles["search"]} type="text" />}

            <SearchOutline onClick={onToggleSearch} />
            <Link href="/cart">
              <Cart />
            </Link>
            <Link href="/support">
              <CustomerService />
            </Link>
          </div>
        </div>
      );
  }
};

export default Header;

export const headerLayouts: Record<string, React.FC<HeaderProps>> = {
  default: Header,
  dashboard: Header,
  admin: Header,
};
