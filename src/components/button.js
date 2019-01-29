import React from 'react';

import './button.css';

export default function Button(props) {
  return (
    <button
      className={props.classes}
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      {props.value}
    </button>
  );
}
