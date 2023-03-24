import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";
import Img from "@/components/ui/img";
import { SliderData } from "types/slider";

interface SliderProps {
  list: SliderData;
}

export const Slider: NextPage<SliderProps> = ({ list }) => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const sliderLenght = list?.length;

  useEffect(() => {
    const next = () => {
      setcurrentSlide(currentSlide === sliderLenght - 1 ? 0 : currentSlide + 1);
    };
    let slideInterval = setInterval(next, 2500);
    return () => clearInterval(slideInterval);
  }, [currentSlide, sliderLenght]);

  return (
    <div className={styles["root"]}>
      {list &&
        React.Children.toArray(
          list?.map(({ id, img }: SliderData, index: number) => {
            return (
              <>
                {currentSlide === index && (
                  <div key={`${img} + ${id}`} className={styles["slide"]}>
                    <Img priority src={img} alt={img} />
                    <div className={styles["logo"]}>
                      <Img
                        priority
                        src="/images/logoWhiteTransText.png"
                        alt="logo carousel"
                      />
                    </div>
                  </div>
                )}
              </>
            );
          })
        )}
    </div>
  );
};
