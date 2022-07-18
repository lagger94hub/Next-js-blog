import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./_post-content.module.scss";
import Image from "next/image";
import { Prism as SynaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const { slug, image, title, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;
  const customeRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here

      return (
        <SynaxHighlighter
          style={atomDark}
          language={language}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        ></SynaxHighlighter>
      );
    },
  };
  return (
    <>
      <article className={classes.content}>
        <PostHeader title={title} image={imagePath} />
        <ReactMarkdown components={customeRenderers}>{content}</ReactMarkdown>
      </article>
    </>
  );
};
export default PostContent;
