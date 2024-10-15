/**
|--------------------------------------------------
| @ i_Shakir
|--------------------------------------------------
*/

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {

  const actors = ['John', 'Doe', 'Rubel'];
  const singers = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Doe', age: 25},
    {id: 3, name: 'Rubel', age: 28}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Actor name={'Bappa Raj'}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {/* <ToDo
        task="Learn React"
        isDone={true}></ToDo>
      <ToDo
        task="Explore Core Concepts"
        isDone={false}></ToDo>
      <ToDo
        task="Try JSX"
        isDone={true}></ToDo> */}
      {/* <Device
        name="Laptop"
        price="27000"></Device>
      <Device
        name="Mobile"
        price="14000"></Device>
      <Device
        name="Watch"
        price="2700"></Device>
      <Person></Person>
      <Student
        grade="7"
        score="99"></Student>
      <Student
        grade={12}
        score="85"></Student>
      <Student
        grade="9"
        score="89"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Person() {
  const age = 15;
  const money = 12;
  const person = { name: "Shakir", age: 12 };
  return (
    <div>
      <h2>
        I am {person.name} with age: {age + money}
      </h2>
    </div>
  );
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h2>Student</h2>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Device(props) {
  return (
    <div>
      <h2>
        This Device: {props.name} and it's Price: {props.price}
      </h2>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "16px",
  };
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding.......</p>
    </div>
  );
}

export default App;
