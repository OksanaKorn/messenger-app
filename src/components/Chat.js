import React from "react";
import PropTypes from "prop-types";
import "../styles/chat.scss";

const Chat = ({ chat, selectActiveChat }) => {
  function selectChat() {
    selectActiveChat(chat.id);
  }

  return (
    <>
      {chat.participants.map(participant => {
        return (
          <div
            key={participant.id}
            className="chat-preview-ctn flex-row alignCenter"
            onClick={selectChat}
          >
            <div>
              <img src={participant.avatarUrl} alt={participant.name} />
            </div>
            <div>{participant.name}</div>
          </div>
        );
      })}
    </>
  );
};

Chat.propeTypes = {
  chat: PropTypes.object.isRequired,
  selectActiveChat: PropTypes.func.isRequired
};

export default Chat;
