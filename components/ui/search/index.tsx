import { CardProduct, CardProductItem } from "components/ui/card";
import { data } from "data/product";
import { NextPage } from "next";
import { MouseEventHandler, useEffect, useState } from "react";
import { Close } from "../icons";
import styles from "./index.module.scss";
import { Products } from "types/product";
import InputText from "../input";
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
  const [searchParam, setSearchParam] = useState<Array<string>>([]);
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
  useEffect(() => {
    q.length > 0
      ? setSearchParam(["nameItem", "categoryItem"])
      : setSearchParam([]);
  }, [q]);

  return (
    <div className={styles["root"]}>
      <div onClick={onClick} className={styles["background"]}></div>

      <div className={styles["container"]}>
        <Close customClass={styles["close"]} onClick={onClickClose} />
        <div className={styles["search"]}>
          <InputText
            placeholder="Tìm sản phẩm"
            {...props}
            defaultValue={q}
            type="text"
            onChange={(e: any) => setQ(e.target.value)}
          />
        </div>

        {search(data).length > 0 && (
          <div className={styles["list"]}>
            {search(data)?.map(
              (
                { nameItem, imgItem, priceItem, urlItem }: Products,
                index: number
              ) => {
                return (
                  <CardProduct
                    className={styles["card"]}
                    classThumb={styles["thumb"]}
                    key={imgItem + nameItem + index}
                    href={`store/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    price={priceItem}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
};
