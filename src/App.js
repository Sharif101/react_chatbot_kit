import Chatbot from "react-chatbot-kit";
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
import "react-chatbot-kit/build/main.css";
import "./App.css";

function App() {
  return (
    <div className="boxs">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;
