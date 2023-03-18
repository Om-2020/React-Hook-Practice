import React, { useState,useEffect} from "react";

const Home = () =>{

    const [cnt,setcnt] = useState(0);

    const increament =() =>{
        setcnt(cnt+1);
        //console.log(cnt);
    }

    useEffect(()=>{
        console.log("showing effect")
    })


    
    const decreament = () => setcnt(cnt-1);
    return (
        <div>
            <h1>Home</h1>
            <button onClick={increament}>+</button>
            <p>{cnt}</p>
            <button onClick={ decreament}> -</button>
        </div>    
    )

}

export default Home;