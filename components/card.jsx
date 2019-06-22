import React from 'react';
// import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ children, id }) => (
  <div className="card_cont" id={id}>
    <div className="flip_inner shadow">
      <div className="card_front" />
      <div className="card_back">
        {children}
      </div>
    </div>
  </div>
);

/*Card.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};*/

export default Card;
