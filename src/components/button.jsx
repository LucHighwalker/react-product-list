import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

function Button(props) {
  const { classes, value, onClick } = props;

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
