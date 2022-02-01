import React, { Component } from "react";
import * as actions from "../store/actions";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

class WeeklyData extends Component {
	componentDidMount() {
		this.props.getWeeklyData();
	}

	render() {
		const dailyConfirmed = [];
		const dailyDeceased = [];
		const dailyRecovered = [];
		const time = [];
		this.props.week.map((el) => {
			time.push(el.date);
			dailyConfirmed.push(el.dailyconfirmed);
			dailyDeceased.push(el.dailydeceased);
			dailyRecovered.push(el.dailyrecovered);
		});

		const data = {
			title: {
				text: "Weekly Data",
			},
			tooltip: {
				trigger: "axis",
			},
			legend: {
				data: ["Confirmed", "Deceased", "Recovered"],
			},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				containLabel: true,
			},
			toolbox: {
				feature: {
					saveAsImage: {},
				},
			},
			xAxis: {
				type: "category",
				boundaryGap: false,
				data: time,
			},
			yAxis: {
				type: "value",
			},
			series: [
				{
					name: "Confirmed",
					type: "line",
					stack: "Total",
					data: dailyConfirmed,
				},
				{
					name: "Deceased",
					type: "line",
					stack: "Total",
					data: dailyDeceased,
				},
				{
					name: "Recovered",
					type: "line",
					stack: "Total",
					data: dailyRecovered,
				},
			],
		};
		return (
			<div>
				<ReactEcharts
					style={{
						height: "300px",
						width: "80%",
					}}
					option={data}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		week: state.weeklyData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getWeeklyData: () => dispatch(actions.saveWeekly()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyData);
