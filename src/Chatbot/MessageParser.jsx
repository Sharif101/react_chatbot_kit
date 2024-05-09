import React from "react";

const MessageParser = ({ children, actions }) => {
  //   console.log(children);
  const parse = (message) => {
    // console.log(message);
    actions.afterNameMessage(message);

    if (Number(message)) {
      if (message <= 18) {
        actions.afterAgeMessagekid(message);
      } else {
        actions.afterAgeMessageadult(message);
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          //   actions: {}, didn't work
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
