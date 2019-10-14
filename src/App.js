import React, { useState } from "react";
import * as chatApi from "./api/chatApi";
import ChatList from "./components/ChatList";
import MessagesList from "./components/MessagesList";
import Header from "./components/common/Header";
import "./App.scss";

function App() {
  const user = {
    id: 1,
    name: "Thomas",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  };

  const [chats, setChats] = useState(chatApi.getChats());
  const [activeChat, setactiveChat] = useState(chats[0]);

  function selectActiveChat(chatId) {
    setactiveChat(chats.find(chat => chat.id === chatId));
  }

  function filterChatsParticipents() {
    const filteredChats = chats.map(chat => {
      return {
        ...chat,
        participants: chat.participants.filter(
          participant => participant.id !== user.id
        )
      };
    });
    return filteredChats;
  }

  function updateActiveChat(message) {
    const newactiveChat = {
      ...activeChat
    };
    newactiveChat.messages.push(message);
    setactiveChat(newactiveChat);
  }

  return (
    <>
      <Header user={user} />
      <div className="flex-row main-container">
        <div className="aside-wrapper" id="aside-wrapper">
          <ChatList
            chats={filterChatsParticipents()}
            selectActiveChat={selectActiveChat}
          />
        </div>
        <div className="main-view-wrapper">
          <MessagesList
            activeChat={activeChat}
            user={user}
            updateActiveChat={updateActiveChat}
          />
        </div>
      </div>
    </>
  );
}

export default App;
