import { useEffect, useState } from "react"


const Clock = () => {

    const[time , setTime]  = useState(new Date());

    useEffect(()=>{
        const id =  setInterval(()=>{
            setTime(new Date());
        },1000);

        // cleanup function
        return () => {
      clearInterval(id);
      console.log("Clock unmounted, interval cleared");
    };

    },[]);

  return (
    <div className="card">

        <h2>Live Clock</h2>

        <p>{time.toLocaleTimeString()}</p>
      
    </div>
  )
}

export default Clock
