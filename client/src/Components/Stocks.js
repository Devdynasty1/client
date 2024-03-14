import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Stocks = () => {

  return (
      <div >
        <Link to="/hard">HARD</Link>
        <Link to="/medium">MEDIUM</Link>
        <Link to="/easy">EASY</Link>
      </div> 
   
  );
};

export default Stocks;
