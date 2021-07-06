import React from "react";
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";

const createCalendar = () => {
    return Array(35)
        .fill(0)
        .map((_, i) => i);
};

const calendar = createCalendar();

const CalendarBoard = () => {
    console.log(calendar);

    return (
        <div className={styles.container}>
            <GridList cellHeight="auto" cols={7} spacing={0}  className={styles.grid}>
                {calendar.map((c) => {
                    <li>
                        <div className={styles.element}>{c}</div>
                    </li>
                })}
            </GridList>
        </div>
    )
};

export default CalendarBoard;