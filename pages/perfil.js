import Head from 'next/head';
import Layout from '../components/layout';
import Perfil from '../components/perfil';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const App = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Layout>
      <Perfil usr={props.usr} />
    </Layout>
  </div>
);

App.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/perfil/${id}`);
  const usr = await res.json();
  console.log(usr);
  return { usr };
};

export default App;
