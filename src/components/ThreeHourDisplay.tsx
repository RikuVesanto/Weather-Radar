import React, { FC } from 'react'
import { getWeatherIcon } from '../utils/general-functions'
import '../styles/threeHourDisplay.css'

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
		<div className="container">
			<p className="threeHourTime">{forecast.time}</p>
			<img
				className="icon"
				src={forecast.iconId ? getWeatherIcon(forecast.iconId) : ''}
				alt="Weather icon"
			></img>
			<p className="threeHourTemperature">{forecast.temperature}°C</p>
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
