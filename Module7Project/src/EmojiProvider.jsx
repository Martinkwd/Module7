import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();
export const EmojiProvider = (props) => {
  const [currentEmoji, setCurrentEmoji] = useState({});
  const handleUpdateEmoji = (user) => {
    setCurrentEmoji(user);
  };

  return (
    <UserContext.Provider value={{ currentEmoji, handleUpdateEmoji }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
