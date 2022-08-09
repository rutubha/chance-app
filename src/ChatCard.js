import React from 'react'
import { Badge } from './Badge';

import './Status.css';
import './ChatCard.css';

export const ChatCard = (props) => {
  return (
    <div className='chat-card'>
        <div className='profile-pic'>
              <img src={process.env.PUBLIC_URL + "Images/" + props.user.img} alt="profile"/>
          </div>
        <div className='username'>
              <div> <b>{props.user.userName}</b></div> 
              <div className='chat-text mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, inventore.</div>
        </div>
        <div className='notification'>
              <div className='gray font-small'>3:42pm</div>
              {
                props.user.message > 0 ? <div className='w-flex pt-1'><Badge message = {props.user.message} key={ 2 }/></div> : ""
              }
        </div>
    </div>
  )
}