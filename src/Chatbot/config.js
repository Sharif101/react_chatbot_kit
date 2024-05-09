import { createChatBotMessage } from "react-chatbot-kit";
import StartBtn from "./File/StartBtn";
import StartSlow from "./File/StartSlow";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi i am Rose.`, {
      widget: "startBtn",
    }),
  ],
  botName: "Rose",
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "startSlow",
      widgetFunc: (props) => <StartSlow {...props} />,
    },
  ],
};

export default config;
