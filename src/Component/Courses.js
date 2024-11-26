import React, { useState } from 'react'

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
            name: 'Angular Devlopment',
            Duration: '3 Months',
        }
    ]);
  return (
    <div>
        {
        
        courses.map((v,i) => (
            <>
            <span>{v.name} {'-->'} </span>
            <span>{v.Duration}</span>
            <br/>
            <br/>
            
            </>
        ))
    
    }
    
    </div>
  )
}

