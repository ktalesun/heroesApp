import { Navbar } from 'flowbite-react'
import React from 'react'
import { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../auth/context/AuthContext';

export const CustomNavBar = () => {

    const navigate = useNavigate();
    const {user, logout} =  useContext(AuthContext);
    

    const handleLogout = () => {
        logout();
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
                    src="/React.webp"
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
                <span className='text-white bg-blue-500 px-2 rounded-md'>{user?.name}</span>
                <button className='bg-blue-700 text-white text-base rounded-md w-16 h-6 place-self-center'
                        onClick={handleLogout}>
                    Logout
                </button>
            </Navbar.Collapse>
        </Navbar>
    )
}
