import Navigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calender/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => ({calendar: state.calendar});

const mapDispatchToProps = (dispatch) => ({
    setMonth: (month) => {
        dispatch(calendarSetMonth(month))
    },
    fetchItem: (month) => {
        dispatch(asyncSchedulesFetchItem(month))
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    // reduxのstate → dayjs
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
        dispatchProps.fetchItem(nextMonth);
    },
    setPreviousMonth: () => {
        const previous = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previous);
        dispatchProps.fetchItem(previous);
    }, 
    setMonth: dayObj => {
        // dayjs → reduxのstate
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
        dispatchProps.fetchItem(month);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation)