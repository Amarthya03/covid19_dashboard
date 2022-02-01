import React, { Component } from "react";
import * as actions from "../store/actions";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

class ThreeDayAverage extends Component {
	componentDidMount() {
		this.props.threeDayData();
	}

	render() {
		const dailyConfirmed = [];
		const dailyDeceased = [];
		const dailyRecovered = [];
		const time = [];

		this.props.threeDay.map((el) => {
			dailyConfirmed.push(el.moving_average_dailyconfirmed);
			dailyDeceased.push(el.moving_average_dailydeceased);
			dailyRecovered.push(el.moving_average_dailyrecovered);
		});

		this.props.month.map((el) => {
			time.push(el.date);
		});

		time.splice(0, 2);

		const data = {
			title: {
				text: "Moving Average",
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
		threeDay: state.threeDay,
		month: state.monthlyData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		threeDayData: () => dispatch(actions.saveThreeDay()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDayAverage);
