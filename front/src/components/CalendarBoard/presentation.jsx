import React from "react";
import * as styles from "./style.css";
import { GridList, Typography } from "@material-ui/core";
import CalendarElement from "../CalenderElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => { 
    console.log(calendar);

    return (
        <div className={styles.container}>
            <GridList cellHeight="auto" cols={7} spacing={0}  className={styles.grid}>
                {/* 曜日 */}
                {days.map((d) => ( 
                    <li key={d}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {d}
                        </Typography>
                    </li>
                ))}
                {/* 日付 */}
                {calendar.map(({ date, schedules }) => (
                    <li key={date.toISOString()} onClick={() => openAddScheduleDialog(date)}> {/*ISOString という規格の形に変形してくれるのでそれを使っている*/}
                        <CalendarElement day={date} month={month} schedules={schedules} />
                    </li>
                ))}
            </GridList>
        </div>
    )
};

export default CalendarBoard;