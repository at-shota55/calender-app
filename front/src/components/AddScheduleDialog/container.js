// redux への接続部分

import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/action";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const mapDispatchToProps = (dispatch) => ({
    setSchedule: (value) => {
        dispatch(addScheduleSetValue(value));
    },
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    saveSchedule: (schedule) => {
        dispatch(asyncSchedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    }
});

const mergeProps = (stateProps, dispatchProps) => ({    
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const{ schedule: { form: schedule } } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);