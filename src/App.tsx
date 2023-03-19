import { useState, useEffect } from 'react'
import { getData } from './utils/http-requests'
import {
	limitFunction,
	kelvinToCelsius,
	getNumbersSuffix,
} from './utils/general-functions'
import WeatherDisplay from './components/WeatherDisplay'
import ThreeHourDisplay from './components/ThreeHourDisplay'
import DropDownMenu from './components/DropDownMenu'
import Header from './components/Header'
import './styles/app.css'

function App() {
	const [currentWeather, setCurrentWeather] = useState<any>(null)
	const [threeHourForecasts, setThreeHourForecasts] = useState<any>(null)
	const [city, setCity] = useState<any>('Tampere')
	const cities: any = {
		Tampere: { lat: '61.4991', lon: '23.7871' },
		Jyväskylä: { lat: '62.2415', lon: '25.7209' },
		Kuopio: { lat: '62.8924', lon: '27.677' },
		Espoo: { lat: '60.25', lon: '24.6667' },
	}
	const cityLabels = ['Kaikki kaupungit'].concat(Object.keys(cities))

	useEffect(() => {
		getCurrentWeather(cities[city].lat, cities[city].lon)
		getFiveThreeHourForecast(cities[city].lat, cities[city].lon)
	}, [city])

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
						rain:
							'rain' in data
								? Math.round(data.rain['1h'])
								: 'snow' in data
								? Math.round(data.snow['1h'])
								: 0,
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
						rain:
							'rain' in forecast
								? Math.round(forecast.rain['3h'])
								: 'snow' in forecast
								? Math.round(forecast.snow['3h'])
								: 0,
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
			<Header headerText="Säätutka" />
			<DropDownMenu labels={cityLabels} onChange={setCity} />
			<WeatherDisplay weather={currentWeather} />
			<div className="threeHourForecasts">
				{threeHourForecasts
					? threeHourForecasts.map((forecast: any) => (
							<ThreeHourDisplay forecast={forecast} key={forecast.time} />
					  ))
					: null}
			</div>
		</div>
	)
}

export default App
