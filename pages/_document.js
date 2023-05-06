/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ===== CSS FILES ===== */}

          {/* ===== Bootstrap CSS ===== */}

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossOrigin="anonymous"></link>

          {/* ===== Main CSS File ===== */}
          <link
            rel="stylesheet"
            href="/assets/styles/style.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/assets/styles/shortcodes.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/assets/styles/responsive.css"
            type="text/css"
          />

          <link
            rel="stylesheet"
            href="/assets/styles/custom.css"
            type="text/css"
          />

          {/* ===== PREFETCH ===== */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          {/* ===== GOOGLE FONT ===== */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@400;500;600&display=swap"
            rel="stylesheet"></link>

          {/* ===== FAVICONS ===== */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {/*  =====  SCRIPTS  =====  */}
          <script
            async
            defer
            src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${process.env.PRISMIC_ID}`}></script>
          <script
            defer
            data-domain={`${process.env.PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}`}
            src="https://plausible.io/js/plausible.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
