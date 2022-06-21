import { Navbar } from 'flowbite-react'
import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

export const CustomNavBar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('login', {
            replace: true
        })
    }

    return (
        <Navbar
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand >
                <img
                    src="/public/React.webp"
                    className="mr-3 h-6 sm:h-9"
                    alt="React Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    HeroesApp
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/dc"> DC </NavLink>
                <NavLink to="/marvel"> Marvel </NavLink>
                <NavLink to="/search"> Search </NavLink>
                <button className='bg-blue-700 text-white text-base rounded-md w-16 h-6 place-self-center'
                        onClick={handleLogout}>
                    Logout
                </button>
            </Navbar.Collapse>
        </Navbar>
    )
}
