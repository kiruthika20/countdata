import React, { useState } from "react";
import  "./index.css"

  
function Count (probs) {
  var [count, setCount] = useState(0);
console.log(count);
  function increase() {
    if (count <10) {
      setCount(count +1);
    } else {
      setCount(10);
    }
  }
  function decrease() {
    if (count > 1) {
      setCount(count-1);
    } else {
      setCount(1);
    }
  }
 
  return (
    <div>
    <div >
    <h1>{count}</h1>
    <div >
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      </div>
    </div>
    </div>
     
  );
}

export default Count;
