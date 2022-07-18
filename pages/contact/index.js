import Contact from "../../components/contact/Contact";
import Head from "next/dist/shared/lib/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Send me your messages"
        />
      </Head>
      <Contact />
    </>
  );
}
