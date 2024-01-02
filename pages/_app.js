import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../components/layout/Default";
import { useEffect } from "react";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });

  // useEffect(() => {
  //   // Disable right-click
  //   document.addEventListener(
  //     "contextmenu",
  //     function (e) {
  //       e.preventDefault();
  //     },
  //     false
  //   );

  //   // Disable image drag
  //   document.addEventListener(
  //     "dragstart",
  //     function (e) {
  //       e.preventDefault();
  //     },
  //     false
  //   );

  //   // Disable copy and cut keyboard shortcuts
  //   document.addEventListener(
  //     "keydown",
  //     function (e) {
  //       if (e.ctrlKey && (e.code === "KeyC" || e.code === "KeyX")) {
  //         e.preventDefault();
  //       }
  //     },
  //     false
  //   );

  //   // Disable F12 key press
  //   document.addEventListener(
  //     "keydown",
  //     function (e) {
  //       if (e.code === "F12") {
  //         e.preventDefault();
  //       }
  //     },
  //     false
  //   );
  // }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id="
      />
      <Script strategy="lazyOnload">
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '');
				`}
      </Script> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
