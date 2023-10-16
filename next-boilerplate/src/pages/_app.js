import React from "react";

import "@fontsource/ubuntu-mono";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/comfortaa";
import "@fontsource-variable/josefin-sans";
import "../styles/styles.scss";

import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <NextNProgress
          color='#47ff9d'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showSpinner={true}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
