import React from "react";
import { AppProvider } from "@shopify/polaris";

export default class AppWrapper extends React.Component {
  render() {

    return (
      <AppProvider
        apiKey="nextjs_app_key"
        forceRedirect={true}
        shopOrigin="shop1.myshopify.io"
      >
        {this.props.children}
      </AppProvider>
    );
  }
}
