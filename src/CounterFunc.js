import React, { useState } from "react";

const CounterFunc = (props) => {
  const [value, setValue] = useState(1);
  const [people, setPeople] = useState([]);
  const [hat, setHat] = useState("hat");

  const add = () => {
    setValue(value + 1);
  };

  const dec = () => {
    setValue(value - 1);
    setHat("hatChanged");
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <p>count: {value}</p>
      <p>count: {hat}</p>
      <button onClick={add}>add</button>
      <button onClick={dec}>minus</button>
    </div>
  );
};

export default CounterFunc;
