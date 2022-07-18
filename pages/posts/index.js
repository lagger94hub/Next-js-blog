import AllPosts from "../../components/posts/all-posts/Allposts";
import { getAllPosts } from "../../utils/posts-util";
import Head from 'next/head'

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all programming-related tutorials" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1800,
  };
}
