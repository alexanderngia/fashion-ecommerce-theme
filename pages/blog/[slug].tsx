import { headerLayouts } from "@/components/container/header";
import LayoutDefault from "components/container/layout/default";
import Divider from "components/ui/divider";
import { getPostByCategory, getPostBySlug, getPostPath } from "lib/postService";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { data } from "data/default";
import { Post } from "types/post";
import styles from "./[slug].module.scss";
import { CarouselPost } from "@/components/container/carousel";

export interface SinglePostProps {
  post: Post;
  postCategory: Post[];
}
const SinglePost: NextPage<SinglePostProps> = ({ post, postCategory }) => {
  const layout = "default";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;

  return (
    <>
      <HeaderLayout customHeader={styles["header"]} data={data.nav} layout={layout}></HeaderLayout>
      <LayoutDefault>
        <div className={styles["root"]}>
          <span className={styles["subDecor"]}>
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
          {postCategory && (
            <div className={styles["similar"]}>
              <h2>Related Post </h2>
              <div className={styles["container"]}>
                <CarouselPost data={postCategory} />
              </div>
            </div>
          )}
        </div>
      </LayoutDefault>
    </>
  );
};
export default SinglePost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const post = await getPostBySlug(slug);
  console.log(post, "post");
  if (post) {
    var postCategory = await getPostByCategory(post);
    console.log(postCategory, "postCategory");
  }
  return {
    props: {
      post,
      postCategory,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPostPath();

  return { paths, fallback: false };
};
