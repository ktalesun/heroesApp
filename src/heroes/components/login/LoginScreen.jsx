import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/context/AuthContext';


export const LoginScreen = () => {

	const navigate = useNavigate();

	const {login} = useContext(AuthContext)

	const handleNavigate = () => {
		const lastPath = localStorage.getItem('lastPath') || '/';
		login('Kevin Leon')
		navigate(lastPath, {
			replace: true
		});
	}
	

	return (
		<div className='container mx-auto flex flex-col items-center justify-center gap-8'>
			<h1 className='mt-4'>LoginScreen</h1>
			<button className='bg-blue-700 text-white rounded-md text-base w-16 h-8'
					onClick={handleNavigate}>Login</button>
		</div>
	)
}
