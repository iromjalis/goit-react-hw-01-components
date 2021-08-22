import React  from 'react';
import PropTypes from 'prop-types';
import FriendsItem from '../FriendListItem/FriendsItem';
import  './FriendList.css';

// {
//     "avatar": "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },

const  FriendList =({friends})=> { 

      return (
      <div className="FriendListWrapper">
          <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline }) => <FriendsItem avatar={avatar} name={name} isOnline={isOnline} />
)}
</ul>
      </div>
    );
  }
 
FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.string,),};

FriendList.defaultProps = {
  // bla: 'test',
};

export default FriendList;
