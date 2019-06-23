import Head from 'next/head';
import Layout from '../components/layout';
import Perfil from '../components/perfil';

const App = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Layout>
      <Perfil />
    </Layout>
  </div>
);

export default App;
