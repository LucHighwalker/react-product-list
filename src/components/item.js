import React from 'react';

import Price from './price';

export default function Item(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Price value={props.price} />
    </div>
  );
}
