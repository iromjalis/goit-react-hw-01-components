import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({
  backgroundColor,
  stat: { id, label, percentage },
}) => {
  return (
    <li
      className="stat-item"
      style={{ backgroundColor: `${backgroundColor}` }}
      key={id}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
  );
};

StatisticItem.prototypes = {
  backgroundColor: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
StatisticItem.defaultProps = {
  backgroundColor: '',
};

export default StatisticItem;
