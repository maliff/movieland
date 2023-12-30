import './App.css';
import { useState, useEffect } from 'react';

const Fullname = (props) => {
  return(
    <>
    <h1>First Name : {props.fname}</h1>
    <h2>Last Name : {props.lname}</h2>
    <h3> Age : {props.age}</h3>
    </>
  )
}

const  App = () => {
  // const name = 'John';
  const isNameShowing = false;
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    // setCounter(100);
    alert("yove have change the counter to " + counter);
  },[counter]);

  return (
    <>
    <div className="App">
      <h1>Hello , what is your name ?</h1>
      {isNameShowing ?(
        <>
        <Fullname fname={'Alice'} lname={'keyston'} age={'25'}/>
        </>
      ) : (
        <>
        <h2> I dont have a name , bitch</h2>
        </>
      )
      }
      <div>
        <h2>Please increment this : {'showing how states work'}</h2>
        <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      </div>

    </div>

    <div>
      <h3>third div outside main div : app hehe </h3>
    </div>
  </>
  );

}

export default App;
