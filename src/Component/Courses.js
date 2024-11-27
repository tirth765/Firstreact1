import React, { useState } from 'react'
import Fees from './Fees';

export default function Courses() {
    const [courses, setCourses] = useState([
        {
            name:'Full Stack Devlopment',
            Duration: '12 Months',
        },
        {
            name: 'React Devlopment',
            Duration: '6 Months',
        },
        {
            name: 'Python Devlopment',
            Duration: '3 Months',
        }
    ]);

    const [Count, setCount] = useState(0);

    const handlePrev = () => {
        if(Count > 0) { 
            setCount(Count - 1); 
        }
    }
    const handleNext = () => {
        if(Count < courses.length - 1) {
            setCount(Count + 1)
        }
        
    }
  return (
    
    <div>
        {/* {
        courses.map((v,i) => (
            <>
            <span>{v.name} {'-->'} </span>
            <span>{v.Duration}</span>
            
            <br/>
            <br/>
            
            </>
        ))
    } */}

   
    <br/>
    <span>{courses[Count].name}</span> {'-->'}
    <span>{courses[Count].Duration}</span>

    <br/>
    <Fees Cn = {courses[Count].name} />
    <br/>

    <button onClick = {handlePrev} disabled={Count == 0}>Prev</button>
    <button onClick = {handleNext} disabled={Count == courses.length - 1}>Next</button>
    
    </div>


  )
}

