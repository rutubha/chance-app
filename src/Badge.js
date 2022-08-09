import React from 'react'

import './Badge.css'

export const Badge = (props) => {
  return (
    <div className={props.index == 1 ? 'badge bg-orange' : 'badge bg-light-blue'}>{props.message}</div>
  )
}
