import React, { useState, useEffect } from 'react'
import { getData } from './utils/http-requests'
import {
	limitFunction,
	kelvinToCelsius,
	getNumbersSuffix,
} from './utils/general-functions'
import WeatherDisplay from './components/WeatherDisplay'
import ThreeHourDisplay from './components/ThreeHourDisplay'

function App() {
	const [currentWeather, setCurrentWeather] = useState<any>(null)
	const [threeHourForecasts, setThreeHourForecasts] = useState<any>(null)

	useEffect(() => {
		getCurrentWeather('61.4991', '23.7871')
		getFiveThreeHourForecast('61.4991', '23.7871')
	}, [])

	async function getCurrentWeather(lat: String, lon: String) {
		return await getData(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
			{
				onSuccess: async (response: any) => {
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
						windSpeed: Number(data.wind.speed).toFixed(1),
						rain: 'rain' in data ? data.rain['1h'] : 0,
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

	async function getFiveThreeHourForecast(lat: String, lon: String) {
		return await getData(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
			{
				onSuccess: async (response: any) => {
					const condenceForecastObject = (forecast: any) => ({
						time:
							(new Date(forecast.dt * 1000).getHours() < 10 ? '0' : '') +
							new Date(forecast.dt * 1000).getHours().toString() +
							':00',
						temperature: Math.round(kelvinToCelsius(forecast.main.temp)),
						windSpeed: Number(forecast.wind.speed).toFixed(1),
						humidity: forecast.main.humidity,
						rain: 'rain' in forecast ? forecast.rain['1h'] : 0,
						iconId: forecast.weather[0].icon,
					})
					const getFiveForecasts = limitFunction(condenceForecastObject, 5)
					const forecasts = response.data.list
						.map((forecast: any) => getFiveForecasts(forecast))
						.filter((forecast: any) => forecast != null)
					setThreeHourForecasts(forecasts)
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
			<ThreeHourDisplay
				forecast={threeHourForecasts ? threeHourForecasts[0] : null}
			/>
		</div>
	)
}

export default App
