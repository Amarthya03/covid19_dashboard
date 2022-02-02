import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
	return (
		<ul className="NavigationItems">
			<NavigationItem link="/" exact>
				Home
			</NavigationItem>
			<NavigationItem link="/weeklyData">Weekly Data</NavigationItem>
			<NavigationItem link="/monthlyData">Monthly Data</NavigationItem>
			<NavigationItem link="/threeDayAverage">
				Three Day Average
			</NavigationItem>
		</ul>
	);
};

export default NavigationItems;
