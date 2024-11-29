import { useState, useEffect } from "react";

export default function Loaders() {
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    },3000)

  }, []);

  return (
    <div>
      
    {Loader ? ( <div class="loader"><span></span></div>) : (<div> Loaded!</div>)

    } 

    </div>
  );
}

