import React, { useState } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); // prevents page reloading
    if (!channelId) return false;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Jayant Sharma",
      userImage:
        "https://media.istockphoto.com/photos/man-meets-digital-avatar-of-himself-made-with-a-hologram-picture-id1317150019?b=1&k=20&m=1317150019&s=170667a&w=0&h=wcoKHusFII_C6Je_Kn4LB1ktcahhr1SgBD09Hmlg8jw=",
    });

    chatRef?.current?.scrollIntoView({ behavior: "smooth" });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden={true} type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    display: flex;
    justify-content: center;
    position: relative;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    padding: 20px;
    width: 60%;
    outline: 0px;
    border: 1px solid gray;
    border-radius: 3px;
  }
  > form > button {
    display: none !important;
  }
`;
