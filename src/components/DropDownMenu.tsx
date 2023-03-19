import { FC } from 'react'
import '../styles/dropDownMenu.css'

interface dropDownMenuProps {
	labels: string[]
	onChange: any
}

const DropDownMenu: FC<dropDownMenuProps> = ({ labels, onChange }) => {
	return (
		<select
			name="Dropdown Menu"
			id="dropdown"
			onChange={(event) => onChange(event.currentTarget.value)}
		>
			{labels.map((label) => (
				<option value={label} key={label}>
					{label}
				</option>
			))}
		</select>
	)
}

export default DropDownMenu
