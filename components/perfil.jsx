import React, { Component } from 'react';
import { onLogin } from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/layout';
import './perfil.scss';
const user = {
  //name: 'sophie',
  lastName: 'green',
  mail: 'queen-green@gmail.com',
  birthday: '22/06/2019',
  //perfilImg: '/static/queengreen.jpg',
  frontPageImg: '/static/queenfront.jpg',
  frontPageQuote: '"crear un mundo mas limpio es nuestro deber, nuestro derecho es disfrutarlo! compartiendo... con los seres que amamos"',
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onLogin, login, usr } = this.props;
    onLogin(true);
    console.log(usr)
  }

  render() {
    const { usr } = this.props;
    return(
      <Layout>
        <div className="perfil_main_cont">
          <header className="header_perfil_cont shadow-lg shadow" style={{ background:`url(${user.frontPageImg})center center no-repeat`, backgroundSize: 'cover' }}>
            <div className="greeting">
              <h1>hola, me llamo {usr.name}</h1>
              <div className="quote">
                <p>{usr.frontPageQuote}</p>
                <div className="line" />
              </div>
            </div>
            <footer className="perfil_header_footer" />
            <div className="perfil_user_cont" style={{ background: `url(${usr.perfilImg}) center top no-repeat`, backgroundSize: 'cover' }}>
              
              <p className="user_name">{usr.name}{" "}{usr.lastName}</p>
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
