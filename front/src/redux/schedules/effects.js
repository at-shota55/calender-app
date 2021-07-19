import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem } from "./action";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async (dispatch) => {
    //loading: trueにする action を dispatch している
    dispatch(schedulesSetLoading());

    //指定された月の予定を取得する API を叩いている
    const result = await get(`schedules?month=${month}&year=${year}`);

    const formatedSchedule = result.map((r) => formatSchedule(r));

    dispatch(schedulesFetchItem(formatedSchedule));
};

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
    // loading: true にする
    dispatch(schedulesSetLoading());

    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    
    const currentSchedules = getState().schedules.items;
    await deleteRequest(`schedules/${id}`);

    // 成功したらローカルのstateを削除
    const newSchedules = currentSchedules.filter(s => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
};