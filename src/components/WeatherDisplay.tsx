import React, { FC } from 'react'
import { getWeatherIcon } from '../utils/general-functions'
import '../styles/weatherDisplay.css'

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
	return weather ? (
		<div className="weatherDisplay">
			<div className="flexRow">
				<div className="topLeft">
					<p className="cityName">{weather.name}</p>
					<p className="description">{weather.description}</p>
				</div>
				<div className="topRight">
					<img
						src={weather.iconId ? getWeatherIcon(weather.iconId) : ''}
						alt="Weather icon"
					></img>
					<p className="temperature">{weather.temperature}°C</p>
				</div>
			</div>
			<div className="flexRow">
				<div className="bottomLeft">
					<p className="date">{weather.date}</p>
					<p className="time">{weather.time}</p>
				</div>
				<div className="bottomRight">
					<div>
						<p>Wind: {weather.windSpeed} m/s</p>
						<p>Humidity: {weather.humidity} %</p>
						<p>
							Precipitation {'(3 h)'}: {weather.rain} mm
						</p>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div></div>
	)
}

export default WeatherDisplay
