import React, { FC } from 'react'
import { getWeatherIcon } from '../utils/general-functions'
import '../styles/ThreeHourDisplay.css'

interface forecastProps {
	forecast: {
		temperature: number
		humidity: number
		windSpeed: number
		rain: number
		time: string
		iconId: string
	}
}

const ThreeHourDisplay: FC<forecastProps> = ({ forecast }) => {
	return forecast ? (
		<div>
			<p className="time">{forecast.time}</p>
			<img src={getWeatherIcon(forecast.iconId)} alt="Weather icon"></img>
			<p className="temperature">{forecast.temperature}°C</p>
			<div className="weatherInfo">
				<p>{forecast.windSpeed} m/s</p>
				<p>{forecast.humidity} %</p>
				<p>{forecast.rain} mm</p>
			</div>
		</div>
	) : (
		<div></div>
	)
}

export default ThreeHourDisplay
