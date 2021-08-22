import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  './FriendsItem.css';
import defaultImg from '../../defaultPhoto.jpg'

const FriendsItem =({name, avatar,isOnline}) =>{ 
 
 
    return (
      <div className="FriendsItemWrapper">

       <li class="FriendsItem-item">
  <span class="status">{isOnline? '🟢': '🔴' } </span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name} </p>
</li>

      </div>
    );
  }

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar:PropTypes.string,
  isOnline:PropTypes.bool.isRequired,
};

FriendsItem.defaultProps = {
  avatar: defaultImg,
};

export default FriendsItem;
