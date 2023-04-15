import { CardProductItem } from "components/ui/card";
import { data } from "data/product";
import { NextPage } from "next";
import { MouseEventHandler, useState } from "react";
import { Close } from "../icons";
import styles from "./index.module.scss";
import { Products } from "types/product";
interface SearchBarProps {
  // data: Products[] | null;
  onClick: MouseEventHandler;
  onClickClose: MouseEventHandler;
}

export const SearchBar: NextPage<SearchBarProps> = (
  { onClick, onClickClose },
  props
) => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nameItem", "categoryItem"]);
  const search = (data: Products[]) => {
    return data.filter((product: Products) => {
      return searchParam.some((newItem) => {
        return (
          product[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
          -1
        );
      });
    });
  };
  return (
    <div className={styles["root"]}>
      <div onClick={onClick} className={styles["background"]}></div>

      <div className={styles["container"]}>
        <Close customClass={styles["close"]} onClick={onClickClose} />
        <h3 className={styles["title"]}>Search</h3>
        <div className={styles["search"]}>
          <input
            placeholder="Tìm sản phẩm"
            {...props}
            defaultValue={q}
            type="text"
            onChange={(e: any) => setQ(e.target.value)}
          />
        </div>

        <div className={styles["list"]}>
          {data &&
            search(data)?.map(
              (
                {
                  nameItem,
                  imgItem,
                  priceItem,
                  urlItem,
                  sizeItem,
                  colorItem,
                }: Products,
                index: number
              ) => {
                return (
                  <CardProductItem
                    key={imgItem + nameItem + index}
                    href={`store/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    sizeItem={sizeItem}
                    colorItem={colorItem}
                    price={priceItem}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};
