import React from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";

import { CategoryData } from "types/category";
import Link from "next/link";
import Img from "@/components/ui/img";

interface CategoryProps {
  data: CategoryData;
}
interface ListCard {
  title: string;
  img: string;
  link: string;
}
const Category: NextPage<CategoryProps> = ({ data }) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["heading"]}>
        <h2>{data.title}</h2>
        <p>{data.descript}</p>
      </div>
      <div className={styles["card"]}>
        {data &&
          data.card.map(({ title, img, link }: ListCard) => {
            return (
              <Link href={link} key={img} className={styles["column"]}>
                <div className={styles["cont"]}>
                  <Img fill src={img} alt={img} />
                  <div className={styles["title"]}>
                    <h3>{title}</h3>
                    <div className={styles["right-arrow-white"]}></div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
