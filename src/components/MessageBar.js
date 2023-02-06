import { useMutation } from "@tanstack/react-query";
import { clientHttp } from "../client/api";
import React from "react";
import { useContext } from "use-context-selector";
import { AppContext } from "../contexts/app-context";
import { useForm } from "react-hook-form";

const MessageBar = () => {
  const { refetch, username } = useContext(AppContext);
  const { handleSubmit, register, reset } = useForm();

  const { mutate: postMessage, isLoading } = useMutation(
    ["post-message"],
    (message) => clientHttp.post("/items/messages", message),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const onSubmit = ({ message }) => {
    if (message) {
      postMessage({ body: message, author: username });
      reset();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", padding: 10 }}
      >
        <input
          {...register("message")}
          placeholder="Votre message"
          type="text"
          className="flex-grow flex p-3 mr-4 rounded-lg"
        />
        <br />
        <button className="rounded-lg font-bold p-2 flex-grow bg-transparent border-solid border-2 border-black">
          {isLoading ? <span className="animate-bounce">👋</span> : "Envoyer"}
        </button>
      </form>
    </>
  );
};

export default MessageBar;
