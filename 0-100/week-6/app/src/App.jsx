// import { useState } from "react";
// // import React from "react";

// export default function App() {
//   const [todo, setTodo] = useState([
//     { title: "title1", description: "description1" },
//     { title: "title2", description: "description2" },
//     { title: "title3", description: "description3" },
//   ]);
//   function addTodo() {
//     setTodo([...todo,{
//       title: "Title is " + Math.random,
//       description: "Description is" + Math.random,
//     }]);
//   }
//   return (
//     <>
//       <button onClick={addTodo}>Add Todo</button>
//       <Todo title={"ckkjkcjk"} />


//       {/* {todo.map(item => {
//         // eslint-disable-next-line react/jsx-key
//         return(<Todo title={item.title} description={item.description} />)
//       })} */}
//     </>
//   );
// }
// function Todo(title) {
//   return (
//     <>
//       <h1>{title}</h1>

//     </>
//   );
// }


import React from 'react'

export default function App() {
  return (
    <div>
      <Todo title="NKJKJKJJKJK"></Todo>
    </div>
  )
}

function Todo(title) {
  return (
    <>
      <h1>{title}</h1>

    </>
  )
}
