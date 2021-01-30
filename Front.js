import React,{useState} from 'react'
import "./App.css"




export default function Front() {
  const [number,setNum]=  useState("");
 var[getNum,setnum]=useState("");
  
   function onclickHandle () {
    setnum(number);
    }

 function  Handleonchange(e){
    setNum(e.target.value)
    
    }
    

  var [count, setCount] = useState("");
 
  function increase() {
    if (count <10) {
      setCount(count +1);
    } else {
      setCount(0);
    }
  }
  function decrease() {
    if (count > 1) {
      setCount(count-1);
    } else {
      setCount(1);
    }
  }
  var b=Number(getNum);
  var c=Number(count);
  var a=Number (b+c);
 
    return (
        <div >
         
            <input type="text" name="name"placeholder="type number.." onChange={Handleonchange} />
            <button onClick={onclickHandle}>Submit</button>
     
        
        <h1>{a}</h1>
        <div >
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      </div>
      
        </div>


    )
}
