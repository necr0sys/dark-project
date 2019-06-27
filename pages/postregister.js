import Layout from '../components/layout';
import BodyPostRegister from '../components/body-post-register';

const App = props => (
  <Layout>
    <BodyPostRegister id={props.id} />
  </Layout>
);

applicationCache.getInitialProps = ({ query }) => {
  const id = query.id;
  return { id };
}

export default App;
