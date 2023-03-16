import React, { useState, useEffect } from 'react'
import * as dotenv from 'dotenv'
import logo from './logo.svg'
import './App.css'
import { getData } from './utils/http-requests'

dotenv.config({ path: 'src/development.env' })

function App() {
	useEffect(() => {
		getCurrentWeather('61.4991', '23.7871')
	}, [])

	async function getCurrentWeather(lat: String, lon: String) {
		return await getData(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`,
			{
				onSuccess: async (response: Object) => {
					console.log(response)
				},
				onError: (error: Error) => {
					console.log(error)
				},
			}
		)
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
