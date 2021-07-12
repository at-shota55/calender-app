import dayjs from "dayjs";

//0~34
export const createCalendar = (month) => {
    //今月の最初の日
    const firstDay = getMonth(month);
    const firstDayIndex = firstDay.day();
    
    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, "day");
            return day;
        });
};

//その月のdayjsインスタンスを返す関数を定義
export const getMonth = ({ year, month }) => {
    return dayjs(`${year}-${month}`);
};

//当日かどうかを判断する
export const isSameDay = (d1, d2) => {
    const format = "YYYYMMDD";
    return d1.format(format) === d2.format(format);
};

//今月かどうか
export const isSameMonth = (m1, m2) => {
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format);
};

// 文字列のフォーマットをどうするか
export const isFirstDay = (day) => day.date() === 1;

//次の月を取得する関数
export const getNextMonth = (month) => {
    const day = getMonth(month).add(1, "month");
    return formatMonth(day);
};

//前の月を取得する関数
export const getPreviousMonth = (month) => {
    const day = getMonth(month).add(-1, "month");
    return formatMonth(day);
};

export const formatMonth = (day) => ({
    month: day.month() + 1,
    year: day.year()
});
