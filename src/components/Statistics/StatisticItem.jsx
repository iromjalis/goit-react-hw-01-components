import React from 'react';

const StatisticItem = ({backgroundColor, stat: { id, label, percentage }}) => {
    return (<li className="stat-item" style={{backgroundColor: `${backgroundColor}`}} key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage} %</span>
            </li>)
    
}

export default  StatisticItem 