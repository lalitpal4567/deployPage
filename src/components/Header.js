import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaCompass } from "react-icons/fa";


const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container'>
                <a href="#" className='navbar-brand me-auto' style={{ width: "156px" }}>
                    <img className='w-100' src="./images/logo.png" />
                </a>
                <div className='d-flex justify-content-evenly align-items-center column-gap-4'>
                    <div className='dropdown d-none d-lg-block'>
                        <button className='btn border-0 d-flex align-items-center column-gap-1 fw-semibold p-0' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaCompass className='' style={{ fontSize: "24px" , color: "#8064A2"}} />
                            Explore
                            <IoIosArrowDown className=' align-self-end' />
                        </button>
                        <ul class="dropdown-menu border-0" style={{ width: 220 }}>
                            <li><a class="dropdown-item py-2 border-bottom border-1" href="#">People - Community</a></li>
                            <li><a class="dropdown-item py-2 border-bottom border-1" href="#">Places - Venue</a></li>
                            <li><a class="dropdown-item py-2 border-bottom border-1" href="#">Programs - Events</a></li>
                            <li><a class="dropdown-item py-2 border-bottom border-1" href="#">Products - Store</a></li>
                            <li><a class="dropdown-item py-2 border-bottom border-1" href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <div className='dropdown d-none d-lg-block'>
                        <button className='btn border-0 d-flex align-items-center column-gap-1 fw-semibold p-0' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdStars className='' style={{ fontSize: "24px", color: "#8064A2" }} />
                            Hobbies
                            <IoIosArrowDown className=' align-self-end' style={{ fontSize: "15px" }} />
                        </button>
                        <ul class="dropdown-menu border-0" style={{ width: 220 }}>
                            <li><a class="dropdown-item py-2 border-1 border-bottom" href="#">Sport - Cricket</a></li>
                            <li><a class="dropdown-item py-2 border-1 border-bottom" href="#">Book - Adventure</a></li>
                            <li><a class="dropdown-item py-2 border-1 border-bottom" href="#">Game - Mobile games</a></li>
                        </ul>
                    </div>
                    <IoSearch className='' style={{ fontSize: "24px" , color: "#8064A2"}} />
                    <FaBell className='' style={{ fontSize: "24px" , color: "#8064A2"}} />
                    <FaBookmark className=' d-none d-md-block' style={{ fontSize: "24px", color: "#8064A2" }} />
                    <FaShoppingCart className=' d-none d-md-block' style={{ fontSize: "24px", color: "#8064A2" }} />
                    <button className='btn d-none d-lg-block d-xl-block d-xxl-block border-1 border-black fw-semibold px-3' type='button' id="button">Sign In</button>
                    <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Header
