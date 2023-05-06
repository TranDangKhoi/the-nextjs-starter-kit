import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My first NextJS App</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="favicon" href="/favicon.ico" type="image/x-icon" />
        <title>Document</title>
      </Head>
      <main>
        <header>
          <Link href="/">Home</Link>
          <Link href="/property">Property</Link>
          <Link href="/blog">Blog</Link>
        </header>
      </main>
    </>
  );
}
