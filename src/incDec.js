import { useEffect,useState } from "react";

function IncDec() {
    
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //setCount(5);
        console.log("Use effect is called")
        
    },[]);

    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    return(
        count == 0?<button className = "btn btn-success" style = {{margin:"40px"}}onClick={increment}>Add to cart</button>:
     <div style = {{display:"flex" , flexWrap:"wrap",margin:"50px"}}>
        <button className = "btn "  style = {{border: "1px solid #ddd",fontSize:"30px"}} onClick={decrement}>-</button>
        <h1 style = {{padding:"10px"}}>{count}</h1>
        <button className = "btn " style = {{border: "1px solid #ddd" ,fontSize:"30px"}} onClick={increment}>+</button>
          
     </div>
    );
}
export default IncDec;