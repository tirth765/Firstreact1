import { useState, useEffect } from "react";

export default function TimerFun() {
  //1.
  const [Timer, setTimer] = useState(new Date());

  const tick = () => {
    setTimer(new Date())
  }

  useEffect(() => {
    //3.componentDidMount

    setInterval(tick, 1000);

    //4. componentWillUnmount
    // return () => {

    // }
  },[])



  //2.Work like a render. Display Component.
  return(
    <h1>{Timer.toLocaleTimeString()}</h1>
  ) 
}
 