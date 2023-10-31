import React from 'react'
interface Alert{
    children:string
}
const Alert = ({children}:Alert) => {
  return (
    <div>
<div className="alert alert-primary" role="alert">
 {children}
</div>

    </div>
  )
}

export default Alert