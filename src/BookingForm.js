import { Button, Container, Grid, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import {
	BuildingSelectMemoized,
	CommentInputMemoized,
	DateInputMemoized,
	FloorSelectMemoized,
	RoomSelectMemoized,
	TimeInputMemoized,
} from './memoization'
const BookingForm = () => {
	const [building, setBuilding] = useState('')
	const [floor, setFloor] = useState('')
	const [room, setRoom] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [comment, setComment] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		const formData = {
			building,
			floor,
			room,
			date,
			time,
			comment,
		}
		console.log(JSON.stringify(formData))
	}

	const handleClear = useCallback(() => {
		setBuilding('')
		setFloor('')
		setRoom('')
		setDate('')
		setTime('')
		setComment('')
	}, [])

	const handleBuildingChange = useCallback(event => {
		setBuilding(event.target.value)
	}, [])

	const handleFloorChange = useCallback(event => {
		setFloor(event.target.value)
	}, [])

	const handleRoomChange = useCallback(event => {
		setRoom(event.target.value)
	}, [])

	const handleDateChange = useCallback(event => {
		setDate(event.target.value)
	}, [])

	const handleTimeChange = useCallback(event => {
		setTime(event.target.value)
	}, [])

	const handleCommentChange = useCallback(event => {
		setComment(event.target.value)
	}, [])

	return (
		<Container
			maxWidth='sm'
			sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
		>
			<Typography variant='h4' gutterBottom>
				Booking Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<BuildingSelectMemoized
							value={building}
							onChange={handleBuildingChange}
						/>
						<FloorSelectMemoized value={floor} onChange={handleFloorChange} />
						<RoomSelectMemoized value={room} onChange={handleRoomChange} />
					</Grid>
					<Grid item xs={12}>
						<DateInputMemoized value={date} onChange={handleDateChange} />
					</Grid>
					<Grid item xs={12}>
						<TimeInputMemoized value={time} onChange={handleTimeChange} />
					</Grid>
					<Grid item xs={12}>
						<CommentInputMemoized
							value={comment}
							onChange={handleCommentChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							sx={{ marginRight: 2 }}
						>
							Submit
						</Button>
						<Button
							type='button'
							variant='contained'
							color='secondary'
							onClick={handleClear}
						>
							Clear
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}

export default BookingForm
