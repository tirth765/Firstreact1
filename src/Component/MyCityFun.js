import React from 'react'

export default function MyCityFun(props) {
  return (

    <>
     <br/>
     <br/>
    <div>MyCityFun</div>

    <h4> My City : {props.c === 'India' ? 'Surat' : 'New york'}</h4>
    <h4> Population : {props.p === '30 Billion' ? '10 Million' : '50 Million'}</h4>

    </>
  )
}
