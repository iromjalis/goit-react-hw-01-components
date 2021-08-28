import React from 'react';
import PropTypes from 'prop-types';
//components
import FriendsItem from './FriendListItem/FriendsItem';
//styles
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
