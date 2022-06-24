import Head from "next/head";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header/header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rpashev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
