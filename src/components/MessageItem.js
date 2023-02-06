import React from "react";
import PropTypes from "prop-types";
import Emoji from "react-emoji-render";

const MessageItem = ({ message }) => {
  return (
    <li className="mb-4 rounded-lg bg-white p-2">
      <small>@{message.author}</small>
      <div>
        <Emoji>{message.body}</Emoji>
      </div>
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
export default MessageItem;
