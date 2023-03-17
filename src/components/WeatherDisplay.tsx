import React, { FC } from 'react'

interface weatherProps {
	weather: {
		name: string
		temperature: number
		humidity: number
		windSpeed: number
		rain: number
		icon: string
	}
}

const WeatherDisplay: FC<weatherProps> = ({ weather }) => {
	return (
		<div>
			<p>{weather.name}</p>
			<p>{weather.temperature} </p> <p>°C</p>
			<p>{weather.windSpeed} m/s</p>
			<p>{weather.humidity} %</p>
			<p>{weather.rain ? weather.rain : 0} mm</p>
		</div>
	)
}

export default WeatherDisplay
