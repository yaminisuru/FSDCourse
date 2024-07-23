
import {useState} from 'react';

function Exp2() {
     const [value , setInputValue] = useState("");
     const [arr, setArr] = useState([]);
     


    const inputValue = (event) => {
    console.log("input value changed")
    setInputValue(event.target.value)
    console.log(event.target.value)
   }


    const display = () => {
        
       console.log("display method called")
       setArr([...arr,value]);
       setInputValue("");
    }
    return(
        <div>
            <input type = "text" placeholder="enter your name" onChange = {inputValue}/>
            <button className = "btn btn-primary" onClick={display} >Display</button>
            <ul>
            {
                arr.map((v1,index)=>(
                <li key = {index}>{v1}</li>
                ))
            }
            </ul>
        </div>
    );
}
export default Exp2;