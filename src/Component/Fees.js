import React from 'react'

export default function Fees(props) {
const FeeSData = {
'Full Stack Devlopment': '75000',
'React Devlopment': '50000',
'Python Devlopment': '45000',
}
  return (
    <>
    <div>{FeeSData[props.Cn]}</div>
    </>
  )
}
