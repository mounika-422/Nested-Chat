import React from "react";

const Action = ({ onClick, type, className }) => {
  return (
    <div className={className} onClick={onClick}>
      {type}
    </div>
  );
};

export default Action;
