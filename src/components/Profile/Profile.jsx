import React  from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

 const Profile = ( {name, tag, location, avatar, stats} ) => { 

 
     return (
      <div className="ProfileWrapper">
       <div className="profile">
  <div className="description">
    <img
      src={avatar}
               className="avatar"
               width='150'
               alt={name}
    />
    <b><p className="name">{name} </p></b>
    <p className="tag">@{tag }</p>
    <p className="location">{location}</p>
  </div>

           <ul className="Stats">
             {Object.entries(stats).map((stat, i)=>(<li className="StatItem" key={i}>
               <span className="label">{stat[0][0].toUpperCase()}{stat[0].slice(1,)}</span>
      <span className="quantity">{stat[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
    </li>))}
   </ul>
</div>

      </div>
    );
  }
 
Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
