import React, { useEffect, useState } from "react";
import PassVerify from "./helper";

const PasswordChecker = () => {
  const [input, setInput] = useState("");
  const [warningText, setWarningText] = useState("EnterPass");
  const checkValidity = PassVerify();

  const onInputChange = (e) => {
    setInput(e.target.value);
    setWarningText(checkValidity(e.target.value));
  };

  return (
    <div className="container flex flex-col gap-6">
      <input
        type="text"
        className=" border-2 border-blue-400 rounded-2xl text-3xl text-center px-16 py-8"
        placeholder="input pass"
        value={input}
        onChange={onInputChange}
      />
      <p className="text-center text-2xl">{warningText}</p>
    </div>
  );
};

export default PasswordChecker;
