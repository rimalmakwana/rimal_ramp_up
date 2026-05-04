import { useEffect, useState } from "react"


const Counter = () => {

    const [count, setCount]= useState(0);

    useEffect(()=>{
        document.title = `Count : ${count}`;
    },[count]);

  return (
    <div className="card">

        <h2>Counter</h2>

        <p>{count}</p>

        <button onClick={()=>setCount(count+1)}>Increase</button>
        
        <button onClick={()=>setCount(count-1)}>Decrement</button>
     
    </div>
  );
}

export default Counter
