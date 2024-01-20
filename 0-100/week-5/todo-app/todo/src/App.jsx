/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function Todos(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}


export default function App() {
  const[Todo,SetTodo]=useState([{
    title:"Go to gym",
    description:"you have to go to the gym at 8pm",
    completed:false
  },{
    title:"Dinner",
    description:"you have to go to the mess at 9:30pm",
    completed:false
  }])

  function addTodo(){
    SetTodo([...Todo,{ // setTodo([...Todo])=> the todo array [1,2], setTodo([...Todo,3])=> [1,2,3]
      title :"write code",
      description:"write the code for the prod app",
      completed: false
    }])
  }
  return (
    <div>
      {Todo.map((todos)=>{ // whenever you want to add some js, put that in {}
        return <Todos title={todos.title} description={todos.description}></Todos>
      })}
      <button onClick={addTodo}>Add ToDo</button>
      {/* <h1>okay</h1> */}
    </div>
  )
}

