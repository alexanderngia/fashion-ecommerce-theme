import LayoutDefault from "components/container/layout/default";
import { CardPost } from "components/ui/card";
import { getPosts } from "lib/postService";
import { Post } from "types/post";

import { headerLayouts } from "@/components/container/header";

import styles from "./index.module.scss";

import type { GetStaticProps, NextPage } from "next";
import { data } from "data/blog";
import { useState } from "react";
import { ButtonMain, ButtonSub } from "@/components/ui/button";

export interface BlogProps {
  posts: Post;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const [filteredPost, setFfilteredPost] = useState(posts);

  const filterByCate = (selectedCate: string) => {
    const filtered = posts.filter((post: Post) => {
      return post.category === selectedCate;
    });
    setFfilteredPost(filtered);
  };

  return (
    <>
      <HeaderLayout layout={layout}></HeaderLayout>
      <LayoutDefault>
        <h1 className={styles["heading"]}>{data.heading}</h1>
        <div className={styles["category"]}>
          {data.category.map(({ title }, index: number) => {
            return (
              <ButtonSub
                key={`${title}-category-${index}`}
                onClick={() => filterByCate(title)}
              >
                {title}
              </ButtonSub>
            );
          })}
        </div>
        <div className={styles["container"]}>
          {filteredPost &&
            filteredPost.map(
              ({ id, title, featureImg, url, author }: Post, index: number) => {
                return (
                  <CardPost
                    className={styles["item"]}
                    key={`${title + featureImg + index + id}`}
                    href={`/blog/${url}`}
                    title={title}
                    image={featureImg}
                    author={author}
                  />
                );
              }
            )}
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
