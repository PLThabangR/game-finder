import React, { useState } from 'react'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/AI';
interface Props{
    onClick:() => void;
}

const Like = ({onClick}:Props) => {
    const toggle=()=>{
        setStatus(!status);
        onClick();
    }
 const [status,setStatus] =  useState(true);
  return (
<>

{ status ? (<AiFillHeart color={'#ff6b81'} size={40} onClick={toggle}/>):
(<AiOutlineHeart  size={40} onClick={toggle}/>) }
   
 
    </>
  )
}

export default Like