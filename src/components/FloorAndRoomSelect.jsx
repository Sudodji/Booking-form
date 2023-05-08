import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const FloorAndRoomSelect = ({ type, value, onChange }) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id={`${type}-label`}>Floor</InputLabel>
			<Select
				labelId={`${type}-label`}
				id={type}
				label={'type'}
				required
				value={value}
				onChange={onChange}
			>
				{Array.from({ length: type === 'floor' ? 25 : 10 }, (_, i) =>
					type === 'floor' ? i + 3 : i + 1
				).map(item => (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default FloorAndRoomSelect
