import React, { FC } from 'react'
import { getWeatherIcon } from '../utils/general-functions'

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
			<p>{weather.name}</p>
			<p>{weather.temperature} </p> <p>°C</p>
			<p>{weather.windSpeed} m/s</p>
			<p>{weather.humidity} %</p>
			<p>{weather.rain ? weather.rain : 0} mm</p>
		</div>
	)
}

export default WeatherDisplay
