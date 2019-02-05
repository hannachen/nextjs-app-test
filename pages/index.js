import React from "react";
import Head from "next/head";

import AppPage from "../components/app";
import AppWrapper from "../components/appWrapper";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>My styled page</title>
          <link
            rel="stylesheet"
            href="https://sdks.shopifycdn.com/polaris/3.4.0/polaris.min.css"
          />
        </Head>
        <AppWrapper>
          <AppPage />
        </AppWrapper>
      </>
    );
  }
}
