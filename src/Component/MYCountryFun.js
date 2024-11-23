// import React , { useState } from 'react'

// export default function MYCountryFun() {

//     const[country, setCountry] = useState(false);
//     const[Population, setPopulation] = useState (false);

//     const handleCountry = () => {
      
//       setCountry(!country);
//       setPopulation(!Population);
//     }
    
//   return (
//     <>
//     <h1>Function Base Component</h1>
//     <div>MYCountry {!country ? 'India' : 'USA'}</div>

//     <h4>Population {!Population ? '30 Billion' : '50 Billion'} </h4>

//     <button onClick={handleCountry}>Change Country</button>
    

//     </>
//   )
// }


import React , { useState } from 'react'

export default function MYCountryFun() {

    const[country, setCountry] = useState('India');
    const[Population, setPopulation] = useState ('30 Billion');

    const handleCountry = () => {
      if(country === 'India') {
        setCountry('USA');
        setPopulation('50 Billion');
      } else {
        setCountry('India');
        setPopulation('30 Billion');
      }
     
    }
    
  return (
    <>
    <h1>Function Base Component</h1>
    <div>MYCountry {country}</div>

    <h4>Population {Population} </h4>

    <button onClick={handleCountry}>Change Country</button>
    

    </>
  )
}
