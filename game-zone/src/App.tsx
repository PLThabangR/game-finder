import { useState } from 'react'

import './App.css'
//components 

import ListGroup from './components/ListGroup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <ListGroup/>
    </>
  )
}

export default App
