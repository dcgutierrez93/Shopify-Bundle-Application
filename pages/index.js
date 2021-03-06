import {  EmptyState, Layout, Page, } from '@shopify/polaris';
// import {
//   Layout,
//   Page,
//   Card,
//   Button,
//   FormLayout,
//   TextStyle,
// } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="Get Started Bundling your Products"
        action={{
          content: 'Select products',
          onAction: () => console.log('clicked'),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
