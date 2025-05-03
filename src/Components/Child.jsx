import React from "react";
import { useState } from "react";

const Child = ({ getData }) => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    getData(name);
  }

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Child;
