import React from "react";
import { useContext } from "use-context-selector";
import { AppContext } from "../contexts/app-context";
import useMessagesSelector from "../hooks/useMessagesSelector";
import MessageItem from "./MessageItem";

const MessageList = () => {
  const messages = useMessagesSelector();
  const { isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div className="p-5">Chargement…</div>;
  }

  if (messages.length === 0) {
    return <div className="p-5">Aucun message</div>;
  }

  return (
    <>
      <ul className="p-3 list-none">
        {messages.map((message, i) => {
          return <MessageItem message={message} key={i} />;
        })}
      </ul>
    </>
  );
};

export default MessageList;
