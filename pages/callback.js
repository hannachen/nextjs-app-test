import React from 'react';

export default class Callback extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location);

      const shop = url.searchParams.get('shop');
      window.location.href = `https://${shop}/admin/apps/nextjs-app-test`;
    }
  }

  render () {
    return (<>Redirecting back to shop...</>);
  }
}