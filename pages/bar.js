import fetch from 'isomorphic-unfetch';

const bar = (props) => (
  <h1>hola{props.user}{console.log(props.user)}</h1>
  
);

bar.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(`http://localhost:3000/foo/?id=123456`);
  const user = await res.text();
  return user;
};

export default bar;