import { useEffect,useState } from "react";

function Nine() {
    
    const [count, setCount] = useState(1);

    useEffect(()=>{
        //setCount(5);
        console.log("Use effect is called")
        
    },[]);

    const increment = () => {
        setCount(count+1);
    }
    return(
     <div>
          <h1>Count {count}</h1>
          <button className = "btn btn-primary" onClick={increment}>Click Me</button>
     </div>
    );
}
export default Nine;