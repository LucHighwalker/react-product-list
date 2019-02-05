import React from 'react';
import PropTypes from 'prop-types';

import Price from './price';

import './item.css';

function Item(props) {
  const { name, price, desc } = props;

  return (
    <div className="item">
      <h1>{name}</h1>
      <Price value={price} />
      <p>{desc}</p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;
