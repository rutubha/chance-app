import React from 'react'
import { Status } from './Status';

import './Status.css';

export const StatusBar = (props) => {
  return (
            props.userList.length > 0 ? props.userList.map((user, index) => {
              if(user.status > 0) {
                return <Status user = {user} key = {index} />
              }
            }
            ) : <div></div>
  )
}