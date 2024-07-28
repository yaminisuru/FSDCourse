 
import {useRef, useEffect} from 'react';
  
 function Eleven() {
    
    const firstRef = useRef(null);
    
    useEffect(()=>{
        
        
    },[]);
    const formSubmition = (event) => {
        event.preventDefault();// prevent reload
       console.log("Form submitted")
       console.log(firstRef.current.value)
       firstRef.current.value = "";

    }
    return(
        <div>
            <form onSubmit={formSubmition}>
                <input type="text" ref = {firstRef} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
 }
 export default Eleven;