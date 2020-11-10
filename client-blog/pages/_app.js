import "../styles/index.css";
import "../styles/globals.css";
import React, { useState} from "react";
import Nav from '../components/layout/Navigation';
import Sidebar from '../components/layout/Sidebar';


import Head from "next/head";

function MyApp({ Component, pageProps }) {


  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };
  
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="description" name="description" content="Contactame!" />
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Sidebar toggle={toggle} toggleState={toggleState} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
