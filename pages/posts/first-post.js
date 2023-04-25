import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

const ProfileImage = () => (
  <Image
    src="/images/test_photo.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Test photo"
  />
);

// Export default to make this the default parent component in the page route
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First post!</title>
        </Head>
        <Script
          src="" //Intentionally left blank
          strategy="lazyOnload"
          onLoad={() =>
            console.log(
              "using Script component strategy attribute to define this script as lazyOnload, and using onLoad to print this log if it loads correctly!"
            )
          }
        />
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home, a Link component</Link>
        </h2>
        <h2>A quick test of an Image component</h2>
        <ProfileImage />
      </Layout>
    </>
  );
}
