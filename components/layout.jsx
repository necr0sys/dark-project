import Header from './header';
import Head from 'next/head';

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;
