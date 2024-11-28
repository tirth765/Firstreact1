import { useState, useEffect } from "react";

export default function Loader() {
  const [Loader, setLoader] = useState(true);

  

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    },3000)

  }, []);

  const berb = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    console.log(data.price);
  }
 
  

  return (
    <div>

    {Loader ? ( <div class="loader"><span></span></div>)
     : (<div> Loaded!</div>)
    }

    
    
     
    
    </div>
  );
}

