import React from "react";
import { IconButton, Toolbar, Typography, withStyles, Tooltip } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { DatePicker } from "@material-ui/pickers";

//見た目を整える
const StyledToolbar = withStyles({
    root: { padding: "0" }
})(Toolbar);
const StyledTypography = withStyles({
    root: { margin: "0 30px 0 10px" }
})(Typography);
const StyledDatePicker = withStyles({
    root: { marginLeft: 30 }
})(DatePicker);

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {
    return (
        <StyledToolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>
            <Tooltip title="前の月" placement="bottom">
                <IconButton size="small" onClick={setPreviousMonth}>
                    <ArrowBackIos />
                </IconButton>
            </Tooltip>
            <Tooltip title="次の月" placement="bottom">
                <IconButton size="small" onClick={setNextMonth}>
                <ArrowForwardIos />
            </IconButton>
            </Tooltip>
            {/* DatePickeの表示 */}
            <StyledDatePicker
                value={month}  // mergePropsでのmonth
                onChange={setMonth} //DatePickerから移動できるようにする
                variant="inline"
                format="YYYY年 M月"
                animateYearScrolling
                disableToolbar
            />
        </StyledToolbar>
    );
};

export default Navigation