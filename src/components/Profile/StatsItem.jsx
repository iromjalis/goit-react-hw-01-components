import React from 'react';

const StatsItem = ({ stat: [key, value] }) => (
    <li className="StatItem" >
               <span className="label">{key}</span>
      <span className="quantity">{value} </span>
</li>
)
export default StatsItem;