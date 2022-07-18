import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

const getPostData = async (fileName) => {
  try {
    const slug = fileName.replace(".md", "");
    const fileDirectory = path.join(postsDirectory, `${slug}.md`);
    const fileContent = await fs.readFile(fileDirectory, "utf-8");
    const { data, content } = matter(fileContent);
    const postData = {
      slug,
      ...data,
      content,
    };
    return postData;
  } catch (e) {
    console.log(e.message);
  }
};
const getAllPosts = async () => {
  const postFiles = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    postFiles.map(async (postFile) => {
      const postData = await getPostData(postFile);
      return postData;
    })
  );
  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};
const getFeaturedPosts = async () => {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
export { getAllPosts, getFeaturedPosts, getPostData };
