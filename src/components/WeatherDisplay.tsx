import React, { FC } from 'react'
import { getWeatherIcon } from '../utils/general-functions'
import '../styles/WeatherDisplay.css'

interface weatherProps {
	weather: {
		name: string
		temperature: number
		humidity: number
		windSpeed: number
		rain: number
		description: string
		date: string
		time: string
		iconId: string
	}
}

const WeatherDisplay: FC<weatherProps> = ({ weather }) => {
	return (
		<div>
			<p className="cityName">{weather.name}</p>
			<p className="weatherInfo">{weather.description}</p>
			<img src={getWeatherIcon(weather.iconId)} alt="Weather icon"></img>
			<p className="temperature">{weather.temperature}°C</p>
			<p>{weather.date}</p>
			<p>{weather.time}</p>
			<div className="weatherInfo">
				<p>{weather.windSpeed} m/s</p>
				<p>{weather.humidity} %</p>
				<p>{weather.rain ? weather.rain : 0} mm</p>
			</div>
		</div>
	)
}

export default WeatherDisplay
