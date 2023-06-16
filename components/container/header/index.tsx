import Link from "next/link";
import React, { useState } from "react";
import styles from "./index.module.scss";

import Img from "@/components/ui/img";
import { IText } from "types/layout";
import { CartBar } from "@/components/container/cart";
import { SearchBar } from "components/ui/search";
import { Products } from "types/product";

import { Search, Cart, CustomerService } from "components/ui/icons";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { handleCartToggle, selectCartToggle } from "redux/action/cart";
import { useRouter } from "next/router";
import classnames from "classnames";
import { header } from "data/header";
interface HeaderProps {
  layout: "store" | "default";
  customHome?: string;
  customHeader?: string;
}

const Header: React.FC<HeaderProps> = ({
  layout,
  customHome,
  customHeader,
}) => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const cartToggle = useAppSelector(selectCartToggle);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onToggleSearch = async () => {
    setSearchToggle(!searchToggle);
  };

  const onToggleChat = async () => {};

  switch (layout) {
    case "store":
      return (
        <>
          <div className={classnames(styles["header-store"], customHeader)}>
            <div className={styles["menu"]}>
              {header &&
                header.navStore.map(({ title, url }) => {
                  return (
                    <Link key={title} href={url}>
                      {title}
                    </Link>
                  );
                })}
            </div>
            <div className={styles["logo"]}>
              <Link href="/">
                <Img alt="logo store" src={header.logo} />
              </Link>
            </div>
            <div className={styles["icon"]}>
              <Search
                customClass={styles["searchIcon"]}
                onClick={onToggleSearch}
              />
              <Cart onClick={() => dispatch(handleCartToggle())} />
              <CustomerService onClick={onToggleChat} />
            </div>
          </div>
          {searchToggle && (
            <SearchBar onClickClose={onToggleSearch} onClick={onToggleSearch} />
          )}
          {cartToggle && (
            <CartBar onClick={() => dispatch(handleCartToggle())} />
          )}
        </>
      );
    default:
      return (
        <>
          <div className={classnames(styles["header"], customHome)}>
            <div className={styles["menu"]}>
              {header &&
                header.nav.map(({ title, url }) => {
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
              <Cart onClick={() => dispatch(handleCartToggle())} />
              <CustomerService onClick={onToggleChat} />
            </div>
          </div>
          {searchToggle && (
            <SearchBar onClickClose={onToggleSearch} onClick={onToggleSearch} />
          )}
          {cartToggle && (
            <CartBar onClick={() => dispatch(handleCartToggle())} />
          )}
        </>
      );
  }
};

export default Header;

export const headerLayouts: Record<string, React.FC<HeaderProps>> = {
  default: Header,
  home: Header,
};
