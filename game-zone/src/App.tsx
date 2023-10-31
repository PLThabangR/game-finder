import { useState } from 'react'

import './App.css'
//components 

import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

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

  const handleSelectItem =(item:string)=>{
    console.log(item)
  }
  const text ="Hello world!"
  return (
    <>
     
    <ListGroup items={items} heading={heading} onSelectItem={handleSelectItem}/>
    <Alert>
      Hello world form child <span>Thabang from Span</span>
    </Alert>
    </>
  )
}

export default App
