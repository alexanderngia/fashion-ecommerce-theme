import { headerLayouts } from "@/components/container/header";
import axios from "axios";
import LayoutDefault from "components/container/layout/default";
import Divider from "components/ui/divider";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getPostByCategory, getPostBySlug, getPostPath } from "lib/postService";
import { IText } from "types/layout";
import { Post } from "types/post";
import styles from "./[slug].module.scss";
import { getDefaultData } from "lib/pageService";

export interface SinglePostProps {
  nav: IText[];
  post: Post;
  postCategory: Post;
}
const SinglePost: NextPage<SinglePostProps> = ({ post, postCategory, nav }) => {
  const layout = "default";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  // const similarList = postCategory?.filter((item: Post) => item.id !== post.id);

  return (
    <>
      <HeaderLayout data={nav} layout={layout}></HeaderLayout>
      <LayoutDefault>
        <div className={styles["root"]}>
          <span className={styles["cate"]}>
            <Divider />
            &nbsp;&nbsp;&nbsp;
            <p>{post.category}</p>
          </span>
          <h1>{post.title}</h1>
          <p className={styles["author"]}>Written by {post.author}</p>

          <span
            className={styles["body"]}
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
          <div className={styles["similar"]}>
            <h2>Related Post </h2>
            <div className={styles["container"]}>
              {/* {similarList && (
      <CarouselCard
        type="post"
        list={similarList}
        classCard={styles["similarCard"]}
      />
    )} */}
            </div>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
};
export default SinglePost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const data = await getDefaultData();
  const { nav } = data;
  const post = await getPostBySlug(slug);
  const postCategory = await getPostByCategory(post.category);

  return {
    props: {
      post,
      postCategory,
      nav,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostPath();

  return { paths, fallback: false };
};