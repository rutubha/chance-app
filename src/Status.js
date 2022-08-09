import React from 'react'

import './Status.css';

export const Status = (props) => {
  return (
    <div className='status-card'>
            <div className='profile-pic'>
                <img src={process.env.PUBLIC_URL + "Images/" + props.user.img} alt="profile"/>
            </div>
            <div className='profile-name'>{props.user.userName}</div>
    </div>
  )
}