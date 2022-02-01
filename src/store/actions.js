import axios from "axios";
export const SAVE_MONTHLY = "SAVE_MONTHLY";
export const SAVE_MONTHLY_FAILED = "SAVE_MONTHLY_FAILED";
export const SAVE_WEEKLY = "SAVE_WEEKLY";
export const SAVE_WEEKLY_FAILED = "SAVE_WEEKLY_FAILED";
export const THREE_DAY_AVERAGE = "THREE_DAY_AVERAGE";
export const THREE_DAY_AVERAGE_FAILED = "THREE_DAY_AVERAGE_FAILED";

export const saveMonthlyData = (resp) => {
	return {
		type: SAVE_MONTHLY,
		payload: {
			resp,
		},
	};
};

export const saveMonthlyDataFailed = () => {
	return {
		type: SAVE_MONTHLY_FAILED,
	};
};

export const saveMonthly = () => {
	return (dispatch) => {
		axios
			.get("http://localhost:5000/api/month")
			.then((response) => dispatch(saveMonthlyData(response.data)))
			.catch((error) => {
				console.log("Error: " + error);
				dispatch(saveMonthlyDataFailed());
			});
	};
};

export const saveWeeklyData = (resp) => {
	return {
		type: SAVE_WEEKLY,
		payload: {
			resp,
		},
	};
};

export const saveWeeklyDataFailed = () => {
	return {
		type: SAVE_WEEKLY_FAILED,
	};
};

export const saveWeekly = () => {
	return (dispatch) => {
		axios
			.get("http://localhost:5000/api/week")
			.then((response) => dispatch(saveWeeklyData(response.data)))
			.catch((error) => {
				console.log("Error: " + error);
				dispatch(saveWeeklyDataFailed());
			});
	};
};

export const saveThreeDayData = (resp) => {
	return {
		type: THREE_DAY_AVERAGE,
		payload: {
			resp,
		},
	};
};

export const saveThreeDayDataFailed = () => {
	return {
		type: THREE_DAY_AVERAGE_FAILED,
	};
};

export const saveThreeDay = () => {
	return (dispatch) => {
		axios
			.get("http://localhost:5000/api/threeDayAvg")
			.then((response) => dispatch(saveThreeDayData(response.data)))
			.catch((error) => {
				console.log("Error: " + error);
				dispatch(saveThreeDayDataFailed());
			});
	};
};
