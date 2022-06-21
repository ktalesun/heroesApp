import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/', {
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
