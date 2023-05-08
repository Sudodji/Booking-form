import { TextField as MUITextField } from '@mui/material'

const TextField = ({ type, value, onChange }) => {
	return (
		<MUITextField
			id={type}
			label={type}
			type={type === 'comment' ? 'text' : type}
			InputLabelProps={
				type === 'comment'
					? {}
					: {
							shrink: true,
					  }
			}
			InputProps={type === 'time' ? { step: 300 } : {}}
			fullWidth
			required={type === 'comment' ? false : true}
			multiline={type === 'comment' ? true : false}
			rows={type === 'comment' ? 4 : 0}
			value={value}
			onChange={onChange}
		/>
	)
}

export default TextField
