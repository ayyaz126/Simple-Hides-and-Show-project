import React, { useState } from 'react'

function App() {
  const  [status , setStatus]=useState(true); 
  return (
    <div className='app' >
      {
             status? <h1> hello world </h1>:null
      }
  
      <button onClick={ ()=> setStatus(false)}   > Hide </button>
      <button onClick={ ()=> setStatus(true)}    > Show </button>
    </div>
  );
}

export default App