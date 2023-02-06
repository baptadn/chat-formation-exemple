import { useContextSelector } from "use-context-selector";
import { AppContext } from "../contexts/app-context";

const useMessagesSelector = () => {
  const messages = useContextSelector(AppContext, (state) => state.messages);

  return messages;
};

export default useMessagesSelector;
