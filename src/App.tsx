import React, { useState, useEffect } from 'react'
import { getData } from './utils/http-requests'
import { kelvinToCelsius, getNumbersSuffix } from './utils/general-functions'
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
				onSuccess: async (response: any) => {
					console.log(response)
					const data = response.data
					const dateTime = new Date(data.dt * 1000)
					const day = dateTime.getDate()
					const hour = dateTime.getHours()
					const minutes = dateTime.getMinutes()
					const date =
						dateTime.toLocaleString('default', { month: 'long' }) +
						' ' +
						getNumbersSuffix(day)
					const parsedWeather = {
						name: data.name,
						temperature: Math.round(kelvinToCelsius(data.main.temp)),
						humidity: data.main.humidity,
						windSpeed: data.wind.speed,
						rain: data.rain['1h'],
						description: data.weather[0].description,
						date: date,
						time: hour + ':' + (minutes < 10 ? '0' + minutes : minutes),
						iconId: data.weather[0].icon,
					}
					setCurrentWeather(parsedWeather)
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
