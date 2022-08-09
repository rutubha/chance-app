import React from "react";
import { ChatCard }from "./ChatCard";


export const ChatMain = (props) => {
  return (
    props.userList.map((user, index) => {
      return <ChatCard user = {user} key={index}/>
    })
  );
};
