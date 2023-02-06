import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

const Chat = () => {
  return (
    <div className="flex flex-col p-2 bg-emerald-300 w-96 rounded-md">
      <div style={{ paddingLeft: 10, paddingTop: 10, fontSize: 30 }}>
        <span role="img" aria-label="langue">
          🏨
        </span>{" "}
        Dayuse
      </div>
      <MessageList />
      <MessageBar />
    </div>
  );
};

export default Chat;
