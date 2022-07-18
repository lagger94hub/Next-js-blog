import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../utils/posts-util";
import Head from "next/dist/shared/lib/head";
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Rami&apos;s Blog</title>
        <meta name="description" content="I post about programming and other useful stuff" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}
export  async function getStaticProps () {
  const featuredPosts = await getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1800
  }
}