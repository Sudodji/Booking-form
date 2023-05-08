import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const BuildingSelect = ({ value, onChange }) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id='building-label'>Building</InputLabel>
			<Select
				labelId='building-label'
				id='building'
				label='building'
				required
				value={value}
				onChange={onChange}
			>
				<MenuItem value='A'>A</MenuItem>
				<MenuItem value='B'>B</MenuItem>
			</Select>
		</FormControl>
	)
}

export default BuildingSelect
