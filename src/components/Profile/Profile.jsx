import React from 'react';
import PropTypes from 'prop-types';
//component
import StatsItem from './StatsItem';
//styles
import './Profile.css';
//default img
import defaultImg from '../../defaultPhoto/defaultPhoto.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="ProfileWrapper">
      <div className="profile">
        <div className="description">
          <img src={avatar} className="avatar" width="150" alt={name} />
          <b>
            <p className="name">{name} </p>
          </b>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="Stats">
          {Object.entries(stats).map((stat, i) => (
            <StatsItem stat={stat} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.node.isRequired),
};

Profile.defaultProps = {
  avatar: defaultImg,
};

export default Profile;
