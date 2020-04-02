import React from "react";


const ActionButton = ({className, content, onClicked}) => {
  return (
        <button className={className} onClick={onClicked}>{content}</button>
  )
};

export default ActionButton;