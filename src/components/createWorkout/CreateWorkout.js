import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import "./CreateWorkout.css";
const CreateWorkout = ({ addWorkout }) => {
  const navigate= useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault();
    addWorkout({ id: nanoid(4), ...newWorkout });
    navigate("/workouts")
	};

	const [newWorkout, setNewWorkout] = useState({
		name: "",
		date: "",
		duration: null,
		calories: null,
	});

	function handleTextChange(e) {
		const { id, value } = e.target;
		setNewWorkout((prev) => ({
			...prev,
			[id]: id == "calories" || id == "duration" ? Number(value) : value,
		}));
	}
	return (
		<div className="form_container">
			<h2>Create Workout</h2>
			<form onSubmit={handleSubmit} className="form">
				<div className="form_fields">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={handleTextChange} />
				</div>
				<div className="form_fields">
					<label htmlFor="date">Date</label>
					<input type="date" id="date" onChange={handleTextChange} />
				</div>
				<div className="form_fields">
					<label htmlFor="duration">Duration</label>
					<input type="number" id="duration" onChange={handleTextChange} />
				</div>
				<div className="form_fields">
					<label htmlFor="calories">Calories Burned</label>
					<input type="number" id="calories" onChange={handleTextChange} />
				</div>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};

export default CreateWorkout;
