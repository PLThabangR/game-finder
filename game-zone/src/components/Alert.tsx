import React, { ReactNode } from 'react'
interface Alert{
    children:ReactNode;
    btnClass?:string;
}

const Alert = ({children,btnClass}:Alert) => {
 const openAlert= ()=>{
    
 }
  return (
    <div>
<div className="alert alert-primary" role="alert">
 {children}
</div>
<button type="button" onClick={openAlert} className={"btn btn-"+btnClass}>Primary</button>
    </div>
  )
}

export default Alert