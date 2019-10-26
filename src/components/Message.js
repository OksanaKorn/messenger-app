import React from "react";
import PropTypes from "prop-types";
import "../styles/message.scss";

function message({ message, user, friend, replyedMessage }) {
  if (message.ownerId === user.id) {
    return (
      <div className="message-ctn right">
        <div className="flex-row alignCenter">
          <div className="message-text">{message.text}</div>
          <img src={user.avatarUrl} alt={user.name} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="message-ctn left">
        {/* <div>{replyedMessage.text}</div> */}
        <div className="flex-row alignCenter">
          <img src={friend.avatarUrl} alt={friend.name} />
          <div className="message-text">{message.text}</div>
        </div>
      </div>
    );
  }
}

message.propeTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      publishDate: PropTypes.number.isRequired,
      ownerId: PropTypes.number.isRequired,
      recepientId: PropTypes.number.isRequired
    })
  ).isRequired,
  user: PropTypes.object.isRequired,
  friend: PropTypes.object.isRequired,
  replyedMessage: PropTypes.object
};

export default message;
