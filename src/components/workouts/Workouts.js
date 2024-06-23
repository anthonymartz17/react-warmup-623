import React, { useState } from "react";
import { Link } from "react-router-dom";
const sortOptions = [
	{ name: "Calories low - high" },
	{ name: "Calories high - low" },
	{ name: "Duration low - high" },
	{ name: "Duration high - low" },
];

const Workouts = ({ workoutList }) => {
	const [workouts, setWorkouts] = useState(workoutList);
	function sortWorkouts(sortBy) {
		let list = [...workouts];
		switch (sortBy) {
			case "Calories low - high":
				list.sort((a, b) => a.calories - b.calories);
				break;
			case "Calories high - low":
				list.sort((a, b) => b.calories - a.calories);
				break;
			case "Duration low - high":
				console.log("entre aki");
				list.sort((a, b) => a.duration - b.duration);
				break;
			case "Duration high - low":
				list.sort((a, b) => b.duration - a.duration);
				break;
		}
		setWorkouts(list);
	}
	return (
		<div>
			<h2>Workout List</h2>
			<select
				name="sort-workout"
				id="sort-workout"
				onChange={(e) => sortWorkouts(e.target.value)}
			>
				<option value="" disabled>
					Select
				</option>
				{sortOptions.map((opt, idx) => (
					<option value={opt.name} key={idx}>
						{opt.name}
					</option>
				))}
			</select>
			<ul>
				{workouts.map((workout) => (
					<li key={workout.id}>
						<Link to={`/workouts/${workout.id}`}>
							{workout.name} - {workout.date}
							<br />
							Calories Burned: {workout.calories}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Workouts;
