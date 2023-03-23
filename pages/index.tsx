import type { GetStaticProps, NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "styles/index.module.scss";
import { Slider } from "@/components/ui/slider";
import Banner from "components/ui/banner";
import Link from "next/link";
import useTrans from "hook/useTrans";
import LayoutHome from "components/container/layout/home";
import axios from "axios";
import { CategoryData } from "types/category";
import Category from "@/components/ui/category";
import Img from "@/components/ui/img";
import { QuoteData } from "types/quote";
import Quote from "@/components/ui/quote";
import { SliderData } from "types/slider";
import { CarouselImg } from "@/components/ui/carousel";
import { CarouselData, CarouselProductData } from "types/carousel";
import BestSeller from "@/components/ui/bestSeller";
import { IText } from "types/layout";
import { headerLayouts } from "@/components/container/header";
interface HomeProps {
  data: HomeData;
}

interface HomeData {
  nav: IText[];
  map: any;
  slider: SliderData;
  cat: CategoryData;
  carouselProduct: CarouselProductData[];
  blog: {
    title: string;
    backgroundImg: string;
    backgroundSubImg: string;
    subTitle: string;
    link: string;
  };
  quote: QuoteData;
  carousel: CarouselData[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const trans = useTrans();
  const layout = "home";

  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logoWhiteTransText.png" />
        <meta name="description" content="Trang chủ Trine Closet" />
        <title>Trine Closet - Sexy Make A Woman</title>
      </Head>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutHome>
        <Slider list={data.slider} />
        <Banner />
        <Category data={data.cat} />
        <BestSeller data={data.carouselProduct} />

        <div className={styles["blog"]}>
          <Img
            layout="fill"
            src={data.blog.backgroundImg}
            alt={data.blog.backgroundImg}
          />
          <div className={styles["head"]}>
            <h3>{data.blog.title}</h3>
            <Link href={data.blog.link} passHref>
              <a>
                {data.blog.subTitle} <br />
                <div className={styles["right-arrow"]}></div>
              </a>
            </Link>
          </div>
        </div>
        <Quote data={data.quote} />
        <CarouselImg data={data.carousel} />
      </LayoutHome>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(process.env.DOMAIN_BACKEND + "/api/home");
  const { data } = res;
  return {
    props: {
      data,
    },
    revalidate: 3600, // revalidate every hour
  };
};
