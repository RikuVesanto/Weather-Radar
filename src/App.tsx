import React, { useState, useEffect } from 'react'
import { getData } from './utils/http-requests'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
	const [currentWeather, setCurrentWeather] = useState<any>(null)

	useEffect(() => {
		getCurrentWeather('61.4991', '23.7871')
	}, [])

	async function getCurrentWeather(lat: String, lon: String) {
		return await getData(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
			{
				onSuccess: async (response: Object) => {
					setCurrentWeather(response)
				},
				onError: (error: Error) => {
					console.log(error)
				},
			}
		)
	}

	return (
		<div className="App">
			<WeatherDisplay weather={currentWeather} />
		</div>
	)
}

export default App
