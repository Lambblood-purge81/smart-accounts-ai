import React from "react";
import VoiceInput from "../components/VoiceInput";  // Correct import once
import { Button, Card, Row, Col } from "react-bootstrap";

export default function ChatbotPage() {
  return (
    <div className="chatbot-page">
      <Row>
        {/* Interview Support Section */}
        <Col md={6}>
          <Card className="chat-card">
            <Card.Body>
              <h3>Interview Support</h3>
              <p>Ask your questions, and let the chatbot guide you!</p>
              <VoiceInput />  {/* Voice Input Component */}
            </Card.Body>
          </Card>
        </Col>

        {/* Chatbot Assistant Section */}
        <Col md={6}>
          <Card className="chat-card">
            <Card.Body>
              <h3>Chatbot Assistant</h3>
              <div className="chat-window">
                <div className="chat-message">
                  <p>User: "What is SmartAccounts AI?"</p>
                  <p>Bot: "SmartAccounts AI is an intelligent accounting assistant..."</p>
                </div>
                <div className="chat-input">
                  <input type="text" placeholder="Ask something..." />
                  <Button variant="primary">Send</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
