import React from "react";
import PropTypes from "prop-types";
import Chat from "./Chat";

import "../styles/chat-list.scss";

function chatList({ chats, selectActiveChat }) {
  return (
    <div className="chat-list-ctn">
      {chats.map(chat => {
        return (
          <div key={chat.id}>
            <Chat chat={chat} selectActiveChat={selectActiveChat} />
          </div>
        );
      })}
    </div>
  );
}

chatList.propeTypes = {
  selectActiveChat: PropTypes.func.isRequired,
  chats: PropTypes.array.isRequired
};

export default chatList;
