import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';

const App = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Layout>
      <Hero />
    </Layout>
  </div>
);

export default App;
