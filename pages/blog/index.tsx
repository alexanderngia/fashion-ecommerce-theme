import LayoutDefault from "components/container/layout/default";
import { CardPost } from "components/ui/card";
import { getPosts } from "lib/postService";
import Link from "next/link";
import { Post } from "types/post";

import { headerLayouts } from "@/components/container/header";

import styles from "./index.module.scss";

import type { GetStaticProps, NextPage } from "next";
import { data } from "pages/data/default";

export interface BlogProps {
  posts: Post;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
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
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};
