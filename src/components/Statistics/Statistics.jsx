import React from 'react';
import PropTypes from 'prop-types';
// components
import StatisticItem from './StatisticItem';
//styles
import './Statistics.css';
//randomm backGroundColor
const randomColor = () => {
  let random1 = Math.round(Math.random() * 255);
  let random2 = Math.round(Math.random() * 255);
  let random3 = Math.round(Math.random() * 255);
  return `rgb(${random1}, ${random2}, ${random3})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <div className="StatisticsWrapper">
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map((stat, i) => {
            let backgroundColor = randomColor();
            return (
              <StatisticItem
                stat={stat}
                backgroundColor={backgroundColor}
                key={stat.id}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.any.isRequired),
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
