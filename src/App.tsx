import React, { useState, useEffect } from 'react'
import { getData } from './utils/http-requests'

function App() {
	useEffect(() => {
		getCurrentWeather('61.4991', '23.7871')
	}, [])

	async function getCurrentWeather(lat: String, lon: String) {
		return await getData(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
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

	return <div className="App"></div>
}

export default App
