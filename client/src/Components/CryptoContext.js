import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [question, setquestion] = useState("");
  const [answers, setanswers] = useState("");
  const [title, settitle] = useState("");
  return (
    <Crypto.Provider value={{isSwitchOn,setIsSwitchOn ,question, setquestion, answers, setanswers,title, settitle}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};