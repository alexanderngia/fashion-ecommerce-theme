import React from "react";
import styles from "./index.module.scss";
import { NextPage } from "next";
import { QuoteData } from "types/quote";

interface QuoteProps {
  data: QuoteData;
}

const Quote: NextPage<QuoteProps> = ({ data }) => {
  return (
    <div className={styles["root"]}>
      <h2>{data.title}</h2>
      <p>{data.descript}</p>
      {data.subDescript && (
        <p dangerouslySetInnerHTML={{ __html: data.subDescript }}></p>
      )}
    </div>
  );
};

export default Quote;
