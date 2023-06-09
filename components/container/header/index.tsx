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
interface HeaderProps {
  layout: "home" | "store" | "cate" | "default";
  data: IText[];
}

const Header: React.FC<HeaderProps> = ({ layout, data }) => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const cartToggle = useAppSelector(selectCartToggle);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onToggleSearch = async () => {
    setSearchToggle(!searchToggle);
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
    case "store":
      return (
        <>
          <div className={styles["header-store"]}>
            <div className={styles["menu"]}>
              {data &&
                data.map(({ title, url }) => {
                  return (
                    <Link key={title} href={`/store/${url}`}>
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
  dashboard: Header,
  admin: Header,
};
