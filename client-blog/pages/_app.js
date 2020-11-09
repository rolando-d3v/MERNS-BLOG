import "../styles/index.css";
import "../styles/globals.css";
import Nav from '../components/layout/Navigation';


import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="description" name="description" content="Contactame!" />
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
