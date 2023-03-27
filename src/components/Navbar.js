import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <img className='iconimg' src='https://cdn-icons-png.flaticon.com/512/2214/2214046.png'/>
                <h1> <span className='text1'></span><span className='purple'>Flash</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
