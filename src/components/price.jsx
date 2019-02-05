import React from 'react';
import PropTypes from 'prop-types';

function Price(props) {
  const { value } = props;

  return (
    <p>
      $&nbsp;
      {value}
    </p>
  );
}

Price.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Price;
