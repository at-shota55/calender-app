import dayjs from "dayjs";
import "dayjs/locale/ja";
import {
    ADD_SCHEDULE_SET_VALUE,
    ADD_SCHEDULE_CLOSE_DIALOG,
    ADD_SCHEDULE_OPEN_DIALOG,
    ADD_SCHEDULE_START_EDIT
} from "./action";

dayjs.locale("ja")

const init = {
    form: {
        title: "",
        description: "",
        date: dayjs(),
        location: ""
    },
    isDialogOpen: false, //dialogが開いているかどうか
    isStartEdit: false
};

const addScheduleReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_SCHEDULE_SET_VALUE:
            return { ...state, form: {...state.form, ...payload }}
        case ADD_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true }
        case ADD_SCHEDULE_CLOSE_DIALOG:
            return init
        case ADD_SCHEDULE_START_EDIT:
            return { ...state, isStartEdit: true }
        default:
            return state
    }
}

export default addScheduleReducer