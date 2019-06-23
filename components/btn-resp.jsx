import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onNav } from '../store/actions';
import './btn-resp.scss';
import PopOver from './popOver'
import GiftNote from './gift';
import CommentNote from './comments-note';
import { color } from './css-layout';

const iconBars = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <style jsx>{`
      svg{
        fill: #fff;
        width: 20px;
        border: #fff;
        padding:3px;
        transition: ease .5s;
      }
      svg:hover{
        fill: ${color.danger};
        background: #fff;
      }
    `
    }
    </style>
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
  </svg>
);

const BtnResp = (props) => (
  <div className="btn_pop_cont">
    <CommentNote />
    <GiftNote />
    <button onClick={props.onNav} id="btn-resp" type="button">
      {iconBars}
    </button>
    <PopOver popOpen={props.nav} />
  </div> 
);

const mapDispatchToProps = dispatch => bindActionCreators({ onNav }, dispatch);
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnResp);
