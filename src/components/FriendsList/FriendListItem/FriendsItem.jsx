import React from 'react';
import PropTypes from 'prop-types';
//styles
import './FriendsItem.css';
//default img
import defaultImg from '../../../defaultPhoto/defaultPhoto.jpg';

const FriendsItem = ({ name, avatar, isOnline }) => {
  return (
    <li className="FriendsItem-item">
      <span className="status">{isOnline ? '🟢' : '🔴'} </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name} </p>
    </li>
  );
};

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

FriendsItem.defaultProps = {
  avatar: defaultImg,
};

export default FriendsItem;
