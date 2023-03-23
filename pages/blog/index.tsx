import { headerLayouts } from "@/components/container/header";
import axios from "axios";
import LayoutDefault from "components/container/layout/default";
import { CardPost } from "components/ui/card";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getPosts } from "lib/postService";
import { IText } from "types/layout";
import { Post } from "types/post";
import styles from "./index.module.scss";
import { getStoreData } from "lib/pageService";

export interface BlogProps {
  posts: Post;
  nav: IText[];
}

const Blog: NextPage<BlogProps> = ({ posts, nav }) => {
  // const { t, lang } = useLocale(translations);
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  return (
    <>
      <HeaderLayout data={nav} layout={layout}></HeaderLayout>
      <LayoutDefault>
        <h1 className={styles["heading"]}>
          LINGERIA/LIFESTYLE/ACCESSORIES DRESS/OIL/PERFURM
        </h1>
        <div className={styles["category"]}>
          <Link href="/">
            <p>Dress</p>
          </Link>
          <Link href="/">
            <p>Lingerie</p>
          </Link>
          <Link href="/">
            <p>Bikini</p>
          </Link>
          <Link href="/">
            <p>Accessories</p>
          </Link>
        </div>
        <div className={styles["container"]}>
          {posts &&
            posts.map(({ id, title, featureImg, url, author }: Post) => {
              return (
                <CardPost
                  className={styles["item"]}
                  key={title + featureImg + id}
                  href={`/blog/${url}`}
                  title={title}
                  image={featureImg}
                  author={author}
                />
              );
            })}
        </div>
      </LayoutDefault>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getStoreData();
  const posts = await getPosts();
  const { nav } = data;
  return {
    props: {
      posts,
      nav,
    },
  };
};
