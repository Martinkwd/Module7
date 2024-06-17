import { useState } from "react";
import { useUserContext } from "./EmojiProvider";

function MoodChanger() {
  const [mood, setMood] = useState("Happy");
  const { currentEmoji, handleUpdateEmoji } = useUserContext();

  const happySad = (mood) => {
    handleUpdateEmoji(mood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {currentEmoji === "Happy" ? "😄" : "😥"}
      <button onClick={() => happySad("Happy")}>Happy</button>
      <button onClick={() => happySad("Sad")}>Sad</button>
    </div>
  );
}

export default MoodChanger;
