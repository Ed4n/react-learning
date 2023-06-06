import { useState } from "react";

export default function Statetest() {
  const [stateTest, setStateTest] = useState({
    textInput: "",
    numero: "",
  });

  const handleChange = (event) => {
    setStateTest({
      ...stateTest,
      [event.target.name]: event.target.value,
    });
  };

  console.log(stateTest);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        name="textInput"
        id="textInput"
        placeholder="name 1"
      />

      <input
        type="text"
        onChange={handleChange}
        name="numero"
        placeholder="name2"
        id="numero"
      />

      <h4>{stateTest.textInput}</h4>
      <h4>{stateTest.numero}</h4>
    </div>
  );
}
