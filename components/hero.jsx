import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onRegister } from '../store/actions';
// import PropTypes from 'prop-types';
import './hero.scss'
import MsgHero from './msg-hero';
import Card from './card';
import Registro from './registro';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.onFlipCard = this.onFlipCard.bind(this);
  }

  componentDidMount() {
    const GSAP = require('gsap');
    const { TweenMax } = GSAP;
    TweenMax.staggerTo('.msg_animate', 2, { opacity: 1 }, 0.7);
    TweenMax.to('.card_cont', 2, { opacity: 1, delay: 5.8 });
  }

  onFlipCard() {
   TweenMax.to('.flip_inner', 1, { rotationY: 180 });
  }

  render() {
    const { registro, onRegister } = this.props
    return(
      <section className="hero_main_cont">
        <div className="container">
          <div className="row">
            <div className="offset-3 col-md-3 container_msg">
              {registro && this.onFlipCard()}
              <MsgHero onClick={onRegister} />
            </div>
            <div className="col-md-6">
              <Card id="card_hero">
                <Registro />
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

const mapStateToProps = state => ({ registro: state.registro });
const mapDispatchToProps = dispatch => bindActionCreators({ onRegister }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
