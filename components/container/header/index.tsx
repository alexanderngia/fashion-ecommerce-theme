import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

import Img from "@/components/ui/img";
import { Cart } from "@styled-icons/bootstrap/Cart";
import { CustomerService } from "@styled-icons/remix-line/CustomerService";
import { IText } from "types/layout";
interface HeaderProps {
  layout: "home" | "store" | "default";
  data: IText[];
}
const Header: React.FC<HeaderProps> = ({ layout, data }) => {
  switch (layout) {
    case "home":
      return (
        <header>
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

              <Link href="/cart">
                <Cart />
              </Link>
              <Link href="/support">
                <CustomerService />
              </Link>
            </div>
          </div>
        </header>
      );
    case "store":
      return (
        <header>
          <div className={styles["header-store"]}>
            <div className={styles["menu-store"]}>
              {data &&
                data.map(({ title, url }) => {
                  return (
                    <Link key={title} href={url}>
                      {title}
                    </Link>
                  );
                })}
            </div>
            <div className={styles["logo-store"]}>
              <Link href="/">
                <Img
                  alt="logo store"
                  width={130}
                  height={25}
                  src="/images/transBlack.png"
                />
              </Link>
            </div>
            <div className={styles["icon-store"]}>
              {/* <Translate /> */}

              <Link href="/cart">
                <Cart />
              </Link>
              <Link href="/support">
                <CustomerService />
              </Link>
            </div>
          </div>
        </header>
      );
    default:
      return (
        <header>
          <div className={styles["header-store"]}>
            <div className={styles["menu-store"]}>
              {data &&
                data.map(({ title, url }) => {
                  return (
                    <Link key={title} href={url}>
                      {title}
                    </Link>
                  );
                })}
            </div>
            <div className={styles["logo-store"]}>
              <Link href="/">
            
                  <Img
                    alt="logo store"
                    width={130}
                    height={25}
                    src="/images/transBlack.png"
                  />
           
              </Link>
            </div>
            <div className={styles["icon-store"]}>
              {/* <Translate /> */}

              <Link href="/cart">
                <Cart />
              </Link>
              <Link href="/support">
                <CustomerService />
              </Link>
            </div>
          </div>
        </header>
      );
  }
};

export default Header;

export const headerLayouts: Record<string, React.FC<HeaderProps>> = {
  default: Header,
  dashboard: Header,
  admin: Header,
};
