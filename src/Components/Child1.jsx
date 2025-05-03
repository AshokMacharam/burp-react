import React from "react";

const Child1 = (props) => {
  return (
    <div>
      <input onChange={(e) => props.sendDatatoParent(e.target.value)} />
    </div>
  );
};

export default Child1;
