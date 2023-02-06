import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createContext } from "use-context-selector";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!username && location.pathname === "/chat") {
      navigate("/");
    }
  }, [username, location, navigate]);

  const { isLoading, refetch } = useQuery(
    ["get-messages"],
    () =>
      axios.get(
        "https://zt8d60la.directus.app/items/messages?sort=-id&limit=5"
      ),
    {
      onSuccess: (response) => {
        setMessages(response.data.data);
      },
    }
  );

  const handleAddMessage = (message) => {
    setMessages([{ username: "Baptiste", body: message }, ...messages]);
  };

  return (
    <AppContext.Provider
      value={{
        messages,
        handleAddMessage,
        setMessages,
        isLoading,
        refetch,
        username,
        setUsername,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
