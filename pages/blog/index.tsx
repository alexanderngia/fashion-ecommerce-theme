import { headerLayouts } from "@/components/container/header";
import axios from "axios";
import LayoutDefault from "components/container/layout/default";
import { CardPost } from "components/ui/card";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getPosts } from "services/postService";
import { IText } from "types/layout";
import { Post } from "types/post";
import styles from "./index.module.scss";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  const { data } = await axios.get("http://localhost:3000/api/default");
  const { nav } = data;
  return {
    props: {
      posts,
      nav,
    },
  };
};
