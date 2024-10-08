import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/ticket-booking-app-logo.png'
import { LiaTimesSolid } from 'react-icons/lia'
import { FaBars, FaPhone } from 'react-icons/fa6'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Link to="/">
                <img src={logo} alt="booking app logo" />
            </Link>
            <button>
                <LiaTimesSolid />
            </button>
        </div>
    )
}

export default Navbar