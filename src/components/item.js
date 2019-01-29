import React from 'react';

import Price from './price';

import './item.css'

export default function Item(props) {
  return (
    <div className="item">
      <h1>{props.name}</h1>
      <Price value={props.price} />
      <p>{props.desc}</p>
    </div>
  );
}
