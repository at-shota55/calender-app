//container は redux からの state と redux に dispatch する関数を props として提供するためのコンポーネント

import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/action";
import { setSchedules } from "../../services/schedule";

const mapStateToProps = (state) => ({ 
    calendar: state.calendar,
    schedules: state.schedules
});

const mapDispatchToProps = (dispatch) => ({
    openAddScheduleDialog: (d) => {
        dispatch(addScheduleOpenDialog());
        dispatch(addScheduleSetValue({ date: d }))
    }
});

//mergePropsはmapStateToPropsで生成されたpropsとmapDisapatchToPropsで生成されたpropsを引数にとり、コンポーネントで使う形に整形して渡す関数
const mergeProps = (stateProps, dispatchProps) => {
    const { calendar: month, schedules: { items: schedules } } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules)

    return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);