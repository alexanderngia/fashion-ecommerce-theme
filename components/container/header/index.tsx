import Link from "next/link";
import React, { useState } from "react";
import styles from "./index.module.scss";

import Img from "@/components/ui/img";
import { IText } from "types/layout";
import { CartBar } from "components/ui/cart";
import { SearchBar } from "components/ui/search";
import { Products } from "types/product";

import { Search, Cart, CustomerService } from "components/ui/icons";
interface HeaderProps {
  layout: "home" | "store" | "default";
  data: IText[];
  cart: Products[];

}
const Header: React.FC<HeaderProps> = ({
  layout,
  data,
  cart
}) => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const [cartToggle, setCartToggle] = useState<boolean>(false);

  const onToggleSearch = async () => {
    setSearchToggle(!searchToggle);
  };
  const onToggleCart = async () => {
    setCartToggle(!cartToggle);
  };
  const onToggleChat = async () => {};

  switch (layout) {
    case "home":
      return (
        <>
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
              <Search
                customClass={styles["searchIcon"]}
                onClick={onToggleSearch}
              />
              <Cart onClick={onToggleCart} />
              <CustomerService onClick={onToggleChat} />
            </div>
          </div>
          {searchToggle && (
            <SearchBar onClickClose={onToggleSearch} onClick={onToggleSearch} />
          )}
          {cartToggle && (
            <CartBar
              cart={cart}
              onClickClose={onToggleCart}
              onClick={onToggleCart}
            />
          )}
        </>
      );
    case "store":
      return (
        <>
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
              <Search
                customClass={styles["searchIcon"]}
                onClick={onToggleSearch}
              />
              <Cart onClick={onToggleCart} />
              <CustomerService onClick={onToggleChat} />
            </div>
          </div>
          {searchToggle && (
            <SearchBar onClickClose={onToggleSearch} onClick={onToggleSearch} />
          )}
          {cartToggle && (
            <CartBar
              cart={cart}
              onClickClose={onToggleCart}
              onClick={onToggleCart}
            />
          )}
        </>
      );
    default:
      return (
        <>
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
              <Search
                customClass={styles["searchIcon"]}
                onClick={onToggleSearch}
              />
              <Cart onClick={onToggleCart} />
              <CustomerService onClick={onToggleChat} />
            </div>
          </div>
          {searchToggle && (
            <SearchBar onClickClose={onToggleSearch} onClick={onToggleSearch} />
          )}
          {cartToggle && (
            <CartBar
              cart={cart}
              onClickClose={onToggleCart}
              onClick={onToggleCart}
            />
          )}
        </>
      );
  }
};

export default Header;

export const headerLayouts: Record<string, React.FC<HeaderProps>> = {
  default: Header,
  dashboard: Header,
  admin: Header,
};
