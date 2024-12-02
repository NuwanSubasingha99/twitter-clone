import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignUpPage from './pages/auth/signup/signUpPage'
import LoginPage from './pages/auth/login/LoginPage'
import RightPannel from './components/common/RightPanel'
import { Toaster } from 'react-hot-toast'
import NotificationPage from './pages/notification/NotificationPage'
import ProfilePage from './pages/profile/ProfilePage'
import Sidebar from './components/common/Sidebar'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './components/common/LoadingSpinner'

function App() {

	const { data: authUser, isLoading, isError, error } = useQuery({

		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (data.error) {
					return null;
				}

				if (!res.ok) {
					throw new Error(data.error)
				}
				return data
			} catch (error) {
				throw new Error(error);

			}
		}
	})

	if (isLoading) {
		return (
			<div className='h-screen flex justify-center items-center'>
				<LoadingSpinner size='lg' />
			</div>
		)
	}

	return (
		<div className='flex max-w-6xl mx-auto'>
			{authUser && <Sidebar />}
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <LoginPage />} />
				<Route path='/signup' element={!authUser ? <SignUpPage /> : <HomePage />} />
				<Route path='/login' element={!authUser ? <LoginPage /> : <HomePage />} />
				<Route path='/notifications' element={authUser ? <NotificationPage /> : <LoginPage />} />
				<Route path='/profile/:username' element={authUser ? <ProfilePage /> : <LoginPage />} />
			</Routes>

			{authUser && <RightPannel />}
			<Toaster />

		</div>
	)
}

export default App
