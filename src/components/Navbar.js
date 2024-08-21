import React from 'react'
import './Navbar.css'
import img from './reactimg.jpg'

export const Navbar = () => {
    return (
        <>
        <div className="image">
            <img src= {img} alt='image not found'/>
        </div>
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="menu">
                <div className="items">HOME</div>
                <div className="items">ABOUT US</div>
                <div className="items">COURSES</div>
                <div className="items">INFO</div>
                <div className="items">CONTACT US</div>
            </div>
        </div>
        </>
    )
}