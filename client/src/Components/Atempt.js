import React from 'react'
import { CryptoState } from './CryptoContext';

const Atempt = () => {

    const { question,answers,title, setIsSwitchOn } = CryptoState();
  return (
    <div>
      <h1>{title}</h1>
      <h2>Question:</h2>
      <p>{question}</p>


    </div>
  )
}

export default Atempt
