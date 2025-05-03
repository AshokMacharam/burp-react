import React, { useState } from "react";
import Child1 from "./Child1";
const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState("");

  function handleChildData(data) {
    setDataFromChild(data);
  }
  console.log(dataFromChild);
  return (
    <div>
      <p>{dataFromChild}</p>
      <Child1 sendDatatoParent={handleChildData} />
    </div>
  );
};

export default Parent;
