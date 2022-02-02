import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div>
				<h2>COVID 19 Dashboard</h2>
				<h3>
					Data collected from{" "}
					<a href="https://data.covid19india.org/">
						https://data.covid19india.org/
					</a>
				</h3>
				<h4>Built by Amarthya using React, Redux and Apace eCharts</h4>
			</div>
		);
	}
}

export default Home;
