import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import MessageInput from "./MessageInput";
import generateId from "../uniqueIdGenerator";
import "../styles/messages-list.scss";

function MessagesList({ activeChat, user, updateActiveChat }) {
  const [userInput, setUserInput] = useState("");
  const [friend, setFriend] = useState({});

  function findFriendData() {
    let recipient = activeChat.participants.filter(
      participant => participant.id !== user.id
    );
    recipient = recipient[0];
    setFriend(recipient);
  }

  useEffect(() => {
    findFriendData();
  }, [activeChat]);

  function handleOnSubmit(event) {
    event.preventDefault();
    let date = new Date().getTime() / 1000;

    const newMessage = {
      id: generateId(),
      text: userInput,
      publishDate: date,
      ownerId: user.id,
      recepientId: friend.id
    };
    updateActiveChat(newMessage);
    setUserInput("");
  }

  function handleOnChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="messages-list-ctn flex-column">
      {activeChat.messages.map(message => {
        return (
          <div key={message.id}>
            <Message message={message} user={user} friend={friend} />
          </div>
        );
      })}
      <div className="mes-input-ctn">
        <MessageInput
          userInput={userInput}
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

MessagesList.propeTypes = {
  activeChat: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateActiveChat: PropTypes.func.isRequired
};

export default MessagesList;
