import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData } from "../../utils/posts-util";
import Head from "next/head";

export default function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta
          name="description"
          content={props.post.excerpt}
        />
      </Head>
      {props.post && <PostContent post={props.post} />}
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 1800,
  };
}
