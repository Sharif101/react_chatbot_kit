import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // ------------------------
  const afterAgeMessageadult = (e) => {
    const message = createChatBotMessage(`Wow !!! you are${e}, you adult !!`);
    updateState(message);
  };

  const afterAgeMessagekid = (e) => {
    const message = createChatBotMessage(
      `Ha Ha Ha !!! you are${e}, you still kid go to home now`
    );
    updateState(message);
  };

  const afterNameMessage = (e) => {
    const message = createChatBotMessage(`Welcome ${e}. What is your age?`);
    updateState(message);
  };
  const initialAction = () => {
    const message = createChatBotMessage("Just type in your name to begin.");
    updateState(message, "age");
  };

  const updateState = (message, checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            afterAgeMessagekid,
            afterAgeMessageadult,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
