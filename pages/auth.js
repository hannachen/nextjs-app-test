import React from 'react';

export default class Auth extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location);

      const shop = url.searchParams.get('shop');
      const clientId = 'nextjs_app_key';
      const scopes = ['read_products', 'read_orders'];
      const redirectUri = `https://${url.host}/callback`;

      window.location.href = `https://${shop}/admin/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
    }
  }

  render () {
    return (<>Redirecting to app installation page...</>);
  }
}