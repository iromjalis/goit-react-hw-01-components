import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ stat: [key, value] }) => (
  <li className="StatItem">
    <span className="label">{key}</span>
    <span className="quantity">{value} </span>
  </li>
);

StatsItem.prototypes = {
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default StatsItem;
