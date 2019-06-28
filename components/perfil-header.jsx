import './perfil-header.scss';

const PerfilHeader = ({ user }) => (
  <header className="header_perfil_cont shadow-lg shadow" style={{ background:`url(${user.frontPageImg})center center no-repeat`, backgroundSize: 'cover' }}>
  <div className="greeting">
    <h1>hola, me llamo {user.name}</h1>
    <div className="quote">
      <p>{user.frontPageQuote}</p>
      <div className="line" />
    </div>
  </div>
  <footer className="perfil_header_footer" />
  <div className="perfil_user_cont" style={{ background: `url(${user.perfilImg}) center top no-repeat`, backgroundSize: 'cover' }}>
    
    <p className="user_name">{user.name}{" "}{user.lastName}</p>
  </div>
</header>
);

export default PerfilHeader;
