import { useState } from 'react'

import './App.css'
//components 

import ListGroup from './components/ListGroup';

function App() {
  const heading="My Cities List Group"
  const items =[
    'New york',
    'San francisco',
    'Tokyo',
    'London',
    'Johannesburg',
    'Paris'
  ]
  return (
    <>
     
    <ListGroup items={items} heading={heading}/>
    </>
  )
}

export default App
