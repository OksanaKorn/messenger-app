import React from "react";
import PropTypes from "prop-types";

const messageInput = ({ userInput, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="userInput"
          placeholder="Write a message..."
          value={userInput}
          onChange={onChange}
          required
        />
      </form>
    </div>
  );
};

messageInput.propTypes = {
  userInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default messageInput;
