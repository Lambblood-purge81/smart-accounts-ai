import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import '../styles/chatbot.css'; // Import the CSS here

export default function VoiceInput() {
  const [message, setMessage] = useState("");
  
  // Native Speech Synthesis API instead of 'react-speech-synthesis'
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Check if browser supports speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setMessage(transcript);  // Update the message state with transcript
    speakText(transcript);    // Use native speech synthesis to speak the transcript
    resetTranscript();        // Reset the transcript for next listening
  };

  return (
    <div className="voice-input">
      <h2>Chatbot Interview Assistant</h2>
      <div className="voice-icons">
        <button onClick={handleStartListening}>
          <FontAwesomeIcon icon={faMicrophone} size="2x" />
        </button>
        <button onClick={handleStopListening}>
          Stop
        </button>
      </div>
      <div className="chat-box">
        <div className="chat-box-content">
          <p><strong>User:</strong> {message}</p>
          <p><strong>Bot:</strong> {transcript}</p>
        </div>
      </div>
    </div>
  );
}
