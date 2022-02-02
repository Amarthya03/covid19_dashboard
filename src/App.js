import React from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import MonthlyData from "./pages/MonthlyData";
import WeeklyData from "./pages/WeeklyData";
import ThreeDayAverage from "./pages/ThreeDayAverage";
import Home from "./pages/Home";
import Layout from "./hoc/Layout/Layout";

function App() {
	return (
		<div className="App">
			<Layout>
				{/* <MonthlyData path="/monthlyData" />
					<WeeklyData path="/weeklyData" />
					<ThreeDayAverage path="/threeDayAverage" /> */}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/monthlyData" component={MonthlyData} />
					<Route path="/weeklyData" component={WeeklyData} />
					<Route
						path="/threeDayAverage"
						component={ThreeDayAverage}
					/>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
