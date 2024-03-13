import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <Crypto.Provider value={{isSwitchOn,setIsSwitchOn}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};