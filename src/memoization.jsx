import { useMemo } from 'react'
import BuildingSelect from './components/BuildingSelect'
import FloorAndRoomSelect from './components/FloorAndRoomSelect'
import TextField from './components/TextField'

export const BuildingSelectMemoized = ({ value, onChange }) =>
	useMemo(() => {
		return <BuildingSelect value={value} onChange={onChange} />
	}, [value, onChange])

export const FloorSelectMemoized = ({ value, onChange }) =>
	useMemo(() => {
		return <FloorAndRoomSelect type='floor' value={value} onChange={onChange} />
	}, [value, onChange])

export const RoomSelectMemoized = ({ value, onChange }) =>
	useMemo(() => {
		return <FloorAndRoomSelect type='room' value={value} onChange={onChange} />
	}, [value, onChange])

export const DateInputMemoized = ({ value, onChange }) =>
	useMemo(() => {
		return <TextField type='date' value={value} onChange={onChange} />
	}, [value, onChange])

export const TimeInputMemoized = ({ value, onChange }) =>
	useMemo(() => {
		return <TextField type='time' value={value} onChange={onChange} />
	}, [value, onChange])

export const CommentInputMemoized = ({ value, onChange }) =>
	useMemo(() => {
		return <TextField type='comment' value={value} onChange={onChange} />
	}, [value, onChange])
