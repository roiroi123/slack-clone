import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from "firebase"

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [ {user}] = useStateValue()
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
        console.log("in");
        db.collection('rooms').doc(channelId).collection("messages").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL
        })
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
