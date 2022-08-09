import React, { useState } from 'react'
import { StatusBar } from './StatusBar';
import { ChatMain } from './ChatMain';
import { Badge } from './Badge';
import { Search } from "./Search";


import './Status.css';
import './App.css';
import './ChatMain.css';

export const App = () => {

  let userList = [
    {
      userName : "SuperSalad",
      img : "prof1.png",
      message : 1,
      status : 2
    },

    {
      userName : "SassyCup",
      img : "prof2.png",
      message : 0,
      status : 2
    },

    {
      userName : "SuperFan",
      img : "prof3.png",
      message : 2,
      status : 0
    },

    {
      userName : "BubblySoap",
      img : "prof4.png",
      message : 3,
      status : 1
    }, 

    {
      userName : "SweetToast",
      img : "prof2.png",
      message : 1,
      status : 1
    },

    {
      userName : "FitCack",
      img : "prof1.png",
      message : 5,
      status : 0
    },

    {
      userName : "WisePear",
      img : "prof4.png",
      message : 1,
      status : 3
    },

    {
      userName : "PoliteTaco",
      img : "prof3.png",
      message : 1,
      status : 1
    }
  ]


  let [newUserLists, setUserList] = useState(userList);
  const search = (str) => {
    let searchUser = [];

    if(str == "") {
      searchUser = [...userList];
    } else {
      userList.map((user) => {
        if(user.userName.toLowerCase().includes(str.toLowerCase())) {
          searchUser.push({
            userName : user.userName,
            img : user.img,
            message : user.message,
            status : user.status
          });
        }
      })
    }

    setUserList(searchUser);
  }

  return (
    <React.StrictMode>
        <div className='container'>
          <div className='new-conn'>
            <span className='me-1'>New Connection</span>
            <Badge message={2} index = {1}/>
          </div>
          <div className='d-flex'>
            <StatusBar userList={userList} />
          </div>
          <div className="main-chat">
            <Search search= {search} userList={userList}/>
            <ChatMain userList={newUserLists}/>
          </div>
        </div>
      </React.StrictMode>
  )
}


