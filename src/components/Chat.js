import React from "react";
import PropTypes from "prop-types";
import "../styles/chat.scss";

const Chat = ({ chat, selectActiveChat }) => {
  function selectChat() {
    selectActiveChat(chat.id);
  }

  return (
    <div className="chat-preview-ctn flex-row alignCenter" onClick={selectChat}>
      <div>
        <img
          src={chat.participants[1].avatarUrl}
          alt={chat.participants[1].name}
        />
      </div>
      <div>{chat.participants[1].name}</div>
    </div>
  );
};

Chat.propeTypes = {
  chat: PropTypes.object.isRequired,
  selectActiveChat: PropTypes.func.isRequired
};

export default Chat;
