import { FC } from 'react'
import '../styles/dropDownMenu.css'

interface dropDownMenuProps {
	labels: string[]
	onClick: any
}

const DropDownMenu: FC<dropDownMenuProps> = ({ labels, onClick }) => {
	return (
		<select name="Dropdown Menu" id="dropdown" onClick={onClick}>
			{labels.map((label) => (
				<option value={label} key={label}>
					{label}
				</option>
			))}
		</select>
	)
}

export default DropDownMenu
