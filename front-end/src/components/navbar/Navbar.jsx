import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/ticket-booking-app-logo.png'
import { FaBusAlt, FaCar, FaTrain } from "react-icons/fa"
import { IoMdAirplane } from "react-icons/io"
import { MdEventAvailable } from "react-icons/md"
import './navbar.css'

const Tab = ({ index, title, icon, isActive, onClick }) => {
    return (
        <div data-index={index} className={`icon ${isActive ? "active" : ""}`} onClick={onClick}>
            {icon} {title}
        </div>)
};

const Navbar = () => {
    const [moving, setMoving] = useState(false)
    const [selected, setSelected] = useState(1)
    const [prev, SetPrev] = useState(selected)
    const [mid, setMid] = useState("")
    const onClick = (index) => (event) => {
        event.preventDefault();
        SetPrev(selected);
        setSelected(index);
        setMid("initialised");
        setMoving(True);
        setTimeout(() => {
            setMoving(false)
            setMid("")
        }, 750)

    }
    return (
        <div className="navbar-main">
            <Link className='navbar-logo' to="/">
                <img className='logo-image' src={logo} alt="booking app logo" />
            </Link>
            <nav className='tab'>
                <div className="icons">
                    <Tab
                        title="Car"
                        icon={<FaCar />}
                        isActive={selected === 1}
                        onClick={handleTabClick(1)}
                    />
                    <Tab
                        title="Bus"
                        icon={<FaBusAlt />}
                        isActive={selected === 2}
                        onClick={handleTabClick(2)}
                    />
                    <Tab
                        title="Air"
                        icon={<IoMdAirplane />}
                        isActive={selected === 3}
                        onClick={handleTabClick(3)}
                    />
                    <Tab
                        title="Train"
                        icon={<FaTrain />}
                        isActive={selected === 4}
                        onClick={handleTabClick(4)}
                    />
                    <Tab
                        title="Launch"
                        icon={<div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.2087 17.6553C20.0225 17.6553 19.8828 17.6553 19.6966 17.7018C19.2311 17.7484 18.8122 18.0277 18.5328 18.2604C18.207 18.4932 17.8346 18.6329 17.4156 18.5863C17.1363 18.5398 16.9501 18.4932 16.7639 18.3535C16.7173 18.307 16.4846 18.1208 16.1587 17.9346C15.7863 17.7484 15.4139 17.6553 14.9949 17.6553C14.4363 17.6553 13.9243 17.7949 13.5053 18.0742C13.0863 18.3535 12.6674 18.6329 12.1087 18.5398C11.8294 18.4932 11.5967 18.3535 11.3639 18.2139C11.3174 18.1673 11.2708 18.1673 11.2243 18.1208C11.0381 17.9811 10.8053 17.8415 10.5725 17.7949C10.4794 17.7484 10.4329 17.7484 10.3398 17.7484C9.78117 17.6553 9.22255 17.7018 8.71049 17.888C8.38463 18.0277 8.10532 18.2604 8.05877 18.2604C7.6398 18.6794 6.84843 18.6794 6.33636 18.3535C6.24326 18.307 6.19671 18.2604 6.1036 18.2139C6.05705 18.1673 5.96395 18.1208 5.9174 18.0742C5.54499 17.7949 5.07947 17.6553 4.61396 17.6553C4.2881 17.6553 4.05534 17.8415 4.00879 18.1208C4.00879 18.4001 4.19499 18.6329 4.4743 18.6794C4.52086 18.6794 4.61396 18.6794 4.66051 18.6794C4.75361 18.6794 4.80016 18.6794 4.84672 18.726C5.07947 18.7725 5.31223 18.9122 5.54499 19.0984C5.59154 19.1449 5.63809 19.1449 5.68464 19.1915C6.19671 19.5639 6.84843 19.7035 7.5467 19.6104C8.10532 19.5173 8.52428 19.238 8.85014 18.9587C9.22255 18.6794 9.64152 18.6329 10.0605 18.7725C10.3398 18.8656 10.5725 19.0053 10.8519 19.1915L10.8984 19.238C11.457 19.6104 12.0622 19.7035 12.7605 19.6104C13.2725 19.5639 13.6449 19.2846 14.0174 19.0518H14.0639C14.2501 18.9122 14.3898 18.8656 14.5294 18.8191C15.0415 18.6794 15.507 18.7725 16.0191 19.1449C16.4846 19.5173 17.0432 19.657 17.5553 19.657C18.1139 19.657 18.6725 19.4708 19.0915 19.1449C19.4639 18.8656 19.7897 18.726 20.2087 18.726C20.488 18.726 20.6742 18.4932 20.6742 18.2139C20.7208 17.888 20.488 17.6553 20.2087 17.6553Z" fill="#333333" />
                            <path d="M19.1381 12.628C19.0915 14.3038 18.2071 16.3521 17.1829 17.19C17.0433 17.0969 16.9036 17.0038 16.7174 16.9107C16.2054 16.6314 15.6467 16.4917 15.0416 16.4917H14.9485C14.1571 16.4917 13.4588 16.7245 12.8536 17.1435C12.6209 17.3297 12.4347 17.4228 12.3416 17.4228C12.2485 17.4228 12.1088 17.3297 11.9692 17.2366C11.9226 17.19 11.8761 17.19 11.8295 17.1435C11.5968 17.0038 11.2709 16.8176 10.8985 16.678C10.8054 16.6314 10.6657 16.5848 10.5261 16.5848C10.2933 16.4917 10.014 16.4917 9.7347 16.4917C9.22263 16.4917 8.71057 16.5848 8.24505 16.7711C8.01229 16.8642 7.82609 17.0038 7.63988 17.0969C6.19679 15.7469 5.77782 13.5125 5.73127 12.5814C5.68472 12.209 5.91748 11.9297 6.24334 11.79C6.6623 11.6038 10.9916 10.1142 11.783 9.78833C12.1554 9.64868 12.4812 9.64868 12.8536 9.78833C13.6916 10.1142 18.2071 11.6504 18.5329 11.79C19.045 11.9763 19.1846 12.209 19.1381 12.628Z" fill="#333333" />
                            <path d="M15.507 7.22754H9.22253C8.80356 7.22754 8.43115 7.5534 8.43115 8.01891V9.74132C8.43115 9.78787 8.4777 9.83442 8.57081 9.83442L11.9691 8.53098C12.2018 8.43788 12.4811 8.43788 12.7604 8.53098L16.1587 9.83442C16.2052 9.83442 16.2984 9.83442 16.2984 9.74132V8.01891C16.2984 7.59995 15.9259 7.22754 15.507 7.22754Z" fill="#333333" />
                            <path d="M13.1795 4.71387H11.5502C11.0846 4.71387 10.7588 5.08628 10.7588 5.50524V6.06386C10.7588 6.11041 10.8053 6.15696 10.8519 6.15696H13.9243C13.9708 6.15696 14.0174 6.11041 14.0174 6.06386V5.50524C13.9708 5.08628 13.5984 4.71387 13.1795 4.71387Z" fill="#333333" />
                        </svg></div>}
                        isActive={selected === 5}
                        onClick={handleTabClick(5)}
                    />
                    <Tab
                        title="Event"
                        icon={<MdEventAvailable />}
                        isActive={selected === 6}
                        onClick={handleTabClick(6)}
                    />
                </div>
                <div className="bar">
                    <div className="cap" />
                    <div className="middle">
                        <div className="side" />
                        <div className="circle" />
                        <div className="side" />
                    </div>
                    <div className="cap" />
                </div>
            </nav>
        </div>
    )
}

export default Navbar