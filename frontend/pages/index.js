import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import {getHomepage} from "../lib/api";

export async function getStaticProps() {
  const homepage = await getHomepage()
  return {
    props: {homepage},
  }
}

export default function Home({homepage}) {
  return (
      <>
        <Head>
          <title>3K Karate klub Klatovy</title>
          <meta name="description" content="Generated by create next app"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <Hero homepage={homepage}/>
      </>
  )
}
