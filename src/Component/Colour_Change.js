import React, { useState } from 'react'

export default function Colour() {

    const[Colour, setColour] = useState(false);

    const handleColour = () => {
      setColour (!Colour)
    
    }
    
    

  return (
    <>
    <div style={{backgroundColor: Colour ? 'red' : 'orange'}}>
    <h1>Function Base Component</h1>
    <div>MYCountryFun</div>
        
    <h4> Fruit : {Colour ? 'Apple' : 'Mango'} </h4>

    <button onClick={handleColour} >Change Colour</button>
    </div>
    </>
  )
}
