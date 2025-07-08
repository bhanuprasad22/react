import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  // const[counter, setCounter]=useState("hello")

  // let counter=5;
  function addValue(){
    // console.log(counter+1);
    // counter=counter+1
    setCounter(counter+1);
   
  }
  function removeValue(){
     if (counter > 0) {
    setCounter(counter - 1);
  }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>
        Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>


    </>
  )
}

export default App
