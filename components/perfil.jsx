import React, { Component } from 'react';
import { onLogin } from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/layout';
import './perfil.scss';
const user = {
  name: 'sophie',
  lastName: 'green',
  mail: 'queen-green@gmail.com',
  birthday: '22/06/2019',
  perfilImg: '/static/queengreen.jpg',
  frontPageImg: '/static/queenfront.jpg',
  frontPageQuote: '"crear un mundo mas limpio es nuestro deber, nuestro derecho es disfrutarlo! compartiendo... con los seres que amamos"',
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onLogin, login } = this.props;
    console.log(login);
    onLogin(true);
  }

  render() {
    return(
      <Layout>
        <div className="perfil_main_cont">
          <header className="header_perfil_cont shadow-lg shadow" style={{ background:`url(${user.frontPageImg})center center no-repeat`, backgroundSize: 'cover' }}>
            <div className="greeting">
              <h1>hola, me llamo {user.name}</h1>
              <div className="quote">
                <p>{user.frontPageQuote}</p>
                <div className="line" />
              </div>
            </div>
            <footer className="perfil_header_footer" />
            <div className="perfil_user_cont">
              <img className="img-fluid user_img" src={user.perfilImg} />
              <p className="user_name">{user.name}{" "}{user.lastName}</p>
            </div>
          </header>
        </div>
        <div className="body"></div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ login: state.login });
const mapDispatchToProps = dispatch => bindActionCreators({ onLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
