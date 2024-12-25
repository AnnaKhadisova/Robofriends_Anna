import React, { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Hello.css'


function Hello(props) {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='f1 tc'>
     <h1>Hello World</h1>
     <p>{props.greeting}</p>
     </div>
    </>
   
  )
}

export default Hello