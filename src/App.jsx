import { useState } from 'react'

import './App.css'
import Form from './Form';

function App() {
  const [count, setCount] = useState({
    firstname : '',
    secondname:'',
    email:'',
    contact:'',
    gender:'',
    subject:'',
    resume:'',
    url:'',


  })

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "red", background: "black" }}>
          Fill The Form{" "}
        </h1>
      </div>
      <Form setCount={setCount} count={count} />
      <div>
        <h1 style={{ textAlign: "center", color: "red", background: "black" }}>
          Console The Result
        </h1>
      </div>
      <div>
        <p style={{ textAlign: "center", color: "red",fontSize:'30px',position:'relative',bottom:'20px'  }}>
          if You submit it will in a object (fn + f12)
        </p>
      </div>
    </>
  );
}

export default App
