import React, { Component } from "react";
import * as actions from "../store/actions";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

class MonthlyData extends Component {
	componentDidMount() {
		this.props.getMonthlyData();
	}

	render() {
		const dailyConfirmed = [];
		const dailyDeceased = [];
		const dailyRecovered = [];
		const time = [];
		this.props.month.map((el) => {
			time.push(el.date);
			dailyConfirmed.push(el.dailyconfirmed);
			dailyDeceased.push(el.dailydeceased);
			dailyRecovered.push(el.dailyrecovered);
		});

		const data = {
			title: {
				text: "Monthly Data",
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
		month: state.monthlyData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMonthlyData: () => dispatch(actions.saveMonthly()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyData);
