import { CarouselProduct } from "@/components/container/carousel";
import { NextPage } from "next";
import styles from "./index.module.scss";
import { Products } from "types/product";
export interface BestSellerProps {
  data: Products[];
}

const BestSeller: NextPage<BestSellerProps> = ({ data }) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["title"]}>
        <h2>BestSeller</h2>
        <span>BestSeller</span>
      </div>
      <CarouselProduct data={data} />
    </div>
  );
};
export default BestSeller;
