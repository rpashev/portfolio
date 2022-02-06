import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      ;
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
