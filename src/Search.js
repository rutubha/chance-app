import React, {useState} from 'react'
import { Badge } from './Badge';

import './Search.css';

export const Search = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="search">
        <div className="message">
            <span className='me-2'>Messages</span>
            <Badge message={1} index={1}/>
        </div>
        <div className="search-input">
            <input type="text" id='searchInput' placeholder='search' onChange={(e) =>{
              e.preventDefault();
              setValue(e.currentTarget.value);
              props.search(e.currentTarget.value);
            }
            } value={value}/>
        </div>
    </div>
  )
}
