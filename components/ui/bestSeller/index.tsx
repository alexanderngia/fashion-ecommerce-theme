import { CarouselProduct } from "@/components/ui/carousel";
import { NextPage } from "next";
import { CarouselProductData } from "types/carousel";
import styles from "./index.module.scss";
export interface BestSellerProps {
  data: CarouselProductData[];
}

const BestSeller: NextPage<BestSellerProps> = ({ data }) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["title"]}>
        <h2>BestSeller</h2>
        <span>BestSeller</span>
      </div>
      <CarouselProduct
        customCont={styles["carousel-container"]}
        customCardProduct={styles["productCard"]}
        customClass={styles["card"]}
        data={data}
      />
    </div>
  );
};
export default BestSeller;
