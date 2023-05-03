/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ===== CSS FILES ===== */}

          {/* ===== Bootstrap CSS ===== */}
          {/* <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
          /> */}

          {/* ===== Main CSS File ===== */}
          <link
            rel="stylesheet"
            href="/assets/styles/style.css"
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
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          /> */}

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
            src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${process.env.PRISMIC_ID}`}
          ></script>
          <script
            defer
            data-domain={`${process.env.PRISMIC_ID}.${process.env.NEXT_PUBLIC_TLD}`}
            src="https://plausible.io/js/plausible.js"
          ></script>
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
