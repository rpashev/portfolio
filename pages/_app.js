import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header/header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="A portfolio application for Rosen Pashev, an aspiring web developer from Bulgaria specializing in JavaScript, CSS, SCSS, HTML, React, Vue, Angular, Node, Mongo, Express, TypeScript"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>rpashev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
