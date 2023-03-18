import { FC } from 'react'
import '../styles/header.css'

interface headerProps {
	headerText: string
}

const Header: FC<headerProps> = ({ headerText }) => {
	return <h1 className="header">{headerText}</h1>
}

export default Header
