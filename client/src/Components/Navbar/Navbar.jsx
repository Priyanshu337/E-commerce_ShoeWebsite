import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)

    return (
        <div className='navbar'>
            <h3>Wear`e</h3>
            <div className='category'>
                <h4>Men</h4>
                <h4>Women</h4>
            </div>
            <div className="left-nav">
                <p>Profile</p>
                <p>Cart{cartstate.cartItems.length}</p>
            </div>
        </div>

    )
}
