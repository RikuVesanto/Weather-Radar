import React, { FC } from 'react'
import { getWeatherIcon } from '../utils/general-functions'
import '../styles/WeatherDisplay.css'

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
			<p>Wind: {forecast.windSpeed} m/s</p>
			<p>Humidity: {forecast.humidity} %</p>
			<p>
				Precipitation {'(3 h)'}: {forecast.rain} mm
			</p>
		</div>
	) : (
		<div></div>
	)
}

export default ThreeHourDisplay
