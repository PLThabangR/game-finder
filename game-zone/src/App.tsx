import { useState } from 'react'

import './App.css'
//components 

import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Like from './components/Like';

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
const [bugs,setBugs] = useState([
  {id:1,tittle:"Bug 1",fixed:false},
{id:2,tittle:"Bug 2",fixed:false}])
  const handleMe =()=>{
    //Create a new bug
    setBugs(bugs.map(bug=>bug.id===1 ?{...bug,fixed:true} : bug));
    for(let i=0; i<bugs.length; i++){
      console.log(bugs);
    }
  }
  const text ="Hello world!"
  return (
    <>
     
    <ListGroup items={items} heading={heading} onSelectItem={handleSelectItem}/>
    <Alert btnClass="danger">
      Hello world form child <span>Thabang from Span</span>
    </Alert>
    <Like onClick={()=> console.log("Clicked")}/>
    <button onClick={handleMe}>Click</button>
    </>
  )
}

export default App
