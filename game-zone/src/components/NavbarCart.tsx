import React from 'react'

interface Props{
    cartItemsCount:number;
}
const NavbarCart = ({cartItemsCount}:Props) => {
  return (
    <div>{cartItemsCount} items</div>
  )
}

export default NavbarCart