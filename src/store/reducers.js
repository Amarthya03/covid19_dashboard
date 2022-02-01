import * as actionTypes from "./actions";

const initialState = {
	monthlyData: [],
	weeklyData: [],
	threeDay: [],
	error: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_MONTHLY:
			return {
				...state,
				monthlyData: action.payload.resp.results,
			};
		case actionTypes.SAVE_MONTHLY_FAILED: {
			return {
				...state,
				error: true,
			};
		}
		case actionTypes.SAVE_WEEKLY:
			return {
				...state,
				weeklyData: action.payload.resp.results,
			};
		case actionTypes.SAVE_WEEKLY_FAILED: {
			return {
				...state,
				error: true,
			};
		}

		case actionTypes.THREE_DAY_AVERAGE:
			return {
				...state,
				threeDay: action.payload.resp.results,
			};
		case actionTypes.THREE_DAY_AVERAGE_FAILED: {
			return {
				...state,
				error: true,
			};
		}

		default:
			return state;
	}
};

export default reducer;
