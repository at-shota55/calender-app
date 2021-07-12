//全部を一個にまとめたreducerがrootReducer

import { combineReducers } from "redux"; //今後複数の reducer を作成していくことになり、それをまとめて store に登録する仕組み
import calendarReducer from "./calender/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    schedules: schedulesReducer
});

export default rootReducer;