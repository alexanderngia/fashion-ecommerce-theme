import React from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";

import { CategoryData } from "types/category";
import Link from "next/link";
import Img from "@/components/ui/img";
import { ArrowRight } from "@/components/ui/icons";

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
        <p dangerouslySetInnerHTML={{ __html: data.descript }} />
      </div>
      <div className={styles["card"]}>
        {data &&
          data.card.map(({ title, img, link }: ListCard) => {
            return (
              <Link href={link} key={img} className={styles["column"]}>
                <div className={styles["cont"]}>
                  <Img src={img} alt={img} />
                  <div className={styles["title"]}>
                    <h3>{title}</h3>
                    <ArrowRight customClass={styles["icon"]} />
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
