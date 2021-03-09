import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../style/style.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <script
        src="https://kit.fontawesome.com/cf8e377f62.js"
        crossOrigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rubik|IBM+Plex+Serif"
      />
      <link rel="icon" type="image/jpeg" href="/assets/images/photo.jpg" />
      <script
        async
        defer
        data-domain="brendanmckenzie.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
