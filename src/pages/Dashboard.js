// dashboard.js
import VoiceInput from "../components/VoiceInput";  // import voice component
import React from "react";

const ChatbotPage = () => {
  return (
    <div className="p-4">
      <h2>Interview Support Chatbot</h2>
      <VoiceInput />
    </div>
  );
};

export default ChatbotPage;  // Only this export should be default
