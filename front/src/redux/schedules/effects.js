import { 
    schedulesSetLoading, 
    schedulesFetchItem, 
    schedulesAddItem, 
    schedulesDeleteItem,
    schedulesAsyncFailure
} from "./action";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async (dispatch) => {
    //loading: trueにする action を dispatch している
    dispatch(schedulesSetLoading());

    try {
        //指定された月の予定を取得する API を叩いている
        const result = await get(`schedules?month=${month}&year=${year}`);
    
        const formatedSchedule = result.map((r) => formatSchedule(r));
    
        dispatch(schedulesFetchItem(formatedSchedule));
    } catch (err) {
        console.log(err)
        dispatch(schedulesAsyncFailure(err.message));
    }

};

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
    // loading: true にする
    dispatch(schedulesSetLoading());

    // 非同期処理のエラーを捕捉できるように
    try {
        const body = { ...schedule, date: schedule.date.toISOString() };
        const result = await post("schedules", body);
    
        const newSchedule = formatSchedule(result);
        dispatch(schedulesAddItem(newSchedule));
    } catch (err) {
        console.log(err)
        dispatch(schedulesAsyncFailure(err.message));
    }
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    
    const currentSchedules = getState().schedules.items;

    try {
        await deleteRequest(`schedules/${id}`);
    
        // 成功したらローカルのstateを削除
        const newSchedules = currentSchedules.filter(s => s.id !== id);
        dispatch(schedulesDeleteItem(newSchedules));
    } catch (err) {
        console.log(err)
        dispatch(schedulesAsyncFailure(err.message));
    }
};