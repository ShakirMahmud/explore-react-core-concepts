import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name:'Shakir', age:12};
  return (
    <div>
      <h2>I am {person.name} with age: {age+money}</h2>
    </div>
  )
}

function Student() {
  return (
    <div>
      <h2>Student</h2>
    </div>
  )
}




export default App
