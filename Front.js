import React,{useState} from 'react'
import "./App.css"
import Count from "./count"



export default function Front() {
  const [number,setNum]=useState("");
 var[getNum,setnum]=useState("");
  
   function onclickHandle () {
    setnum(number);
    }

 function  Handleonchange(e){
    setNum(e.target.value)
    
    }
 
    return (
        <div >
         
            <input type="text" name="name"placeholder="type number.." onChange={Handleonchange} />
            <button onClick={onclickHandle}>Submit</button>
      
        
        <h1>{getNum}</h1>
        <Count />
        </div>


    )
}