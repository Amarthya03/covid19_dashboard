import React from "react";
import "./App.css";
import MonthlyData from "./pages/MonthlyData";
import WeeklyData from "./pages/WeeklyData";
import ThreeDayAverage from "./pages/ThreeDayAverage";

function App() {
	return (
		<div className="App">
			<MonthlyData />
			<WeeklyData />
			<ThreeDayAverage />
		</div>
	);
}

export default App;
