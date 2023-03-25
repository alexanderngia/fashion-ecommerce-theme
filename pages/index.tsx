import { headerLayouts } from "@/components/container/header";
import BestSeller from "@/components/ui/bestSeller";
import { CarouselImg } from "@/components/ui/carousel";
import Category from "@/components/ui/category";
import Img from "@/components/ui/img";
import Quote from "@/components/ui/quote";
import { Slider } from "@/components/ui/slider";
import LayoutHome from "components/container/layout/home";
import Banner from "components/ui/banner";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "styles/index.module.scss";

import { getProducts } from "lib/productService";
import { data } from "pages/data/home";
import { Products } from "types/product";

interface HomeProps {
  products: Products[];
}

const Home: NextPage<HomeProps> = ({ products }) => {
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
        <BestSeller data={products} />

        <div className={styles["blog"]}>
          <Img src={data.blog.backgroundImg} alt={data.blog.backgroundImg} />
          <div className={styles["head"]}>
            <h3>
              <span
                dangerouslySetInnerHTML={{ __html: data.blog.title }}
              ></span>
            </h3>
            <Link href={data.blog.link} passHref>
              {data.blog.subTitle} <br />
              <div className={styles["right-arrow"]}></div>
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
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};
