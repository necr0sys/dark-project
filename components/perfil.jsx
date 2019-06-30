import React, { Component } from 'react';
import { onLogin } from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../components/layout';
import './perfil.scss';
import PerfilHeader from './perfil-header';
import PerfilNav from './perfil-nav';


class Login extends Component {
  constructor(props) {
    super(props);
    /*this.state= {
      user: {
        name: 'sophie',
        lastName: 'green',
        mail: 'queen-green@gmail.com',
        birthday: '22/06/2019',
        perfilImg: '/static/queengreen.jpg',
        frontPageImg: '/static/queenfront.jpg',
        frontPageQuote: '"crear un mundo mas limpio es nuestro deber, nuestro derecho es disfrutarlo! compartiendo... con los seres que amamos"',
        posts: [
          {
            author: {
              name: 'Sophie Green',
              img: '/static/queengreen.jpg',
            },
            date: '29/06/2019 2:00pm',
            imgUrl: '/static/product-2-100.jpg',
            history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perferendis. Deserunt mollitia incidunt magni minus tempora maiores veniam quia quasi iste molestiae impedit in distinctio, laborum similique ratione blanditiis earum.',
            likes: 5,
          }
        ]
      }
    }*/
  }

  componentDidMount() {
    const { onLogin } = this.props;
    onLogin(true);
  }

  render() {
    const { user, id } = this.props;
    return(
      <Layout>
        <div className="perfil_main_cont">
          <PerfilHeader user={user} />
          <PerfilNav id={id} posts={user.posts} />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ login: state.login });
const mapDispatchToProps = dispatch => bindActionCreators({ onLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
