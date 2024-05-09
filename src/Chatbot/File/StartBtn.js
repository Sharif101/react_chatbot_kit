import React from "react";

export default function StartBtn(props) {
  const initialActions = () => {
    props.actions?.initialAction();
  };
  return (
    <div>
      <button className="start-btn" onClick={() => initialActions()}>
        Let's Get Started
      </button>
    </div>
  );
}
