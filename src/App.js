import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Workouts from "./components/workouts/Workouts";
import WorkoutDetails from "./components/workout/WorkoutDetails";
import CreateWorkout from "./components/createWorkout/CreateWorkout";

function App() {
	const [workoutList, setWorkoutList] = useState([
		{
			id: 1,
			name: "Morning Run",
			date: "2023-06-21",
			duration: 30,
			calories: 300,
		},
		{
			id: 2,
			name: "Evening Yoga",
			date: "2023-06-22",
			duration: 45,
			calories: 200,
		},
	]);

	// Function to add a new workout
	const addWorkout = (newWorkout) => {
		setWorkoutList((prev) => [...prev, newWorkout]);
	};

	return (
		<div className="App">
			<Router>
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/workouts"
							element={<Workouts workoutList={workoutList} />}
						/>
						<Route
							path="/workouts/:id"
							element={<WorkoutDetails workoutList={workoutList} />}
						/>
						<Route
							path="/create"
							element={<CreateWorkout addWorkout={addWorkout} />}
						/>
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
