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
		iconId: string
	}
}

const WeatherDisplay: FC<weatherProps> = ({ weather }) => {
	return (
		<div>
			<img src={getWeatherIcon(weather.iconId)} alt="Weather icon"></img>
			<p className="cityName">{weather.name}</p>
			<p className="temperature">{weather.temperature}°C</p>
			<div className="weatherInfo">
				<p>{weather.windSpeed} m/s</p>
				<p>{weather.humidity} %</p>
				<p>{weather.rain ? weather.rain : 0} mm</p>
			</div>
		</div>
	)
}

export default WeatherDisplay
