import React from "react";
import { Card, Layout, FormLayout, Page, TextField, Heading } from "@shopify/polaris";

export default class App extends React.Component {
  render() {
    return (
      <Page
        title="App Title"
        primaryAction={{
          content: "Save",
          disabled: true
        }}
        secondaryActions={[
          {
            content: "Secondary Button",
            disabled: false
          }
        ]}
        actionGroups={[
          {
            title: "Grouped Buttons",
            actions: [{ content: "Grouped A" }]
          }
        ]}
      >
        <Layout>

          <Layout.Section>
            <Heading>This is a sample Polaris Page</Heading>
            <p>The appearance of the page title area will change depending on where this page is viewed from.</p>
          </Layout.Section>

          <Layout.AnnotatedSection
            title="Standalone"
            description="Page is handled as a regular page when no props are passed into the outer `AppProvider`"
          >
            <img src="/static/screenshots/page-standalone.png" style={{width: '100%'}} />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Embedded App - Web"
            description="Page becomes an embedded component when `apiKey` and `shopOrigin` are passed into the outer `AppProvider`, and viewed in web admin"
          >
            <img src="/static/screenshots/page-embedded.png" style={{width: '100%'}} />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Embedded App - Mobile"
            description="Page becomes an embedded component when `apiKey` and `shopOrigin` are passed into the outer `AppProvider`, and viewed in mobile Shopify"
          >
            <img src="/static/screenshots/page-mobile-ios.png" style={{width: '100%'}} />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Preview"
            description='This is how the information will be displayed on your shop under the "Add to Cart" button.'
          >
            <Card title="Online store dashboard" sectioned>
              <p>View a summary of your online store’s performance.</p>
            </Card>
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="Display"
            description="Setup the text to be displayed on your page."
          >
            <Card title="Form Section" sectioned>
              <FormLayout>
                <TextField
                  label="Display text for value range"
                  onChange={() => {}}
                />
                <TextField
                  label="Display text for single value"
                  onChange={() => {}}
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>

        </Layout>
      </Page>
    );
  }
}
