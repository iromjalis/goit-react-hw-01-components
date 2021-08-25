import React  from 'react';
import PropTypes from 'prop-types';
import FriendsItem from '../FriendListItem/FriendsItem';
import  './FriendList.css';

const  FriendList =({friends})=> { 
      return (
           <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => <FriendsItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>)}
          </ul>
     );
  }
 
FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}

export default FriendList;
