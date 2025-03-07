import React from "react";
import { 
    Dialog, 
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid,
    IconButton,
    Typography,
    Tooltip
} from "@material-ui/core";
import { LocationOnOutlined, NotesOutlined, AccessTime, Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { DatePicker } from "@material-ui/pickers";
import * as styles from "./style.css";


const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: { fontSize: 22 }
})(Input);

const AddScheduleDialog = ({ 
    schedule: { 
        form: { title, location, description, date } ,
        isDialogOpen,
        isStartEdit
        } , 
        closeDialog,
        setSchedule,
        saveSchedule,
        setIsEditStart
}) => {
    //isDialogOpen === falseかつtitle === ""
    const isTitleInvalid = !title && isStartEdit;

    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogActions>
                <div className={styles.closeButton}>
                    <Tooltip title="閉じる" placement="bottom">
                        <IconButton onClick={closeDialog} size="small">
                            <Close />
                        </IconButton>
                    </Tooltip>
                </div>
            </DialogActions>
            <DialogContent>
                <Title 
                    autoFocus 
                    fullWidth 
                    placeholder="タイトルと日時を追加" 
                    value={title}
                    onChange={(e) => setSchedule({ title: e.target.value })}
                    onBlur={setIsEditStart} //フォーカスが外れたタイミング
                    error={isTitleInvalid}
                />
                <div className={styles.validation}>
                    {isTitleInvalid && (
                        <Typography variant="caption" component="div" color="error">
                            タイトルは必須です。
                        </Typography>
                    )}
                </div>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            style={spacer} 
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            disableToolbar
                            fullWidth
                            value={date}
                            onChange={(d) => setSchedule({ date: d })} //Dayjsオブジェクトをそのまま引数に渡してくれるから引数はd
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <LocationOnOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                            style={spacer} 
                            fullWidth 
                            placeholder="場所を追加"
                            value={location}
                            onChange={(e) => setSchedule({ location: e.target.value })}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                            style={spacer} 
                            fullWidth 
                            placeholder="説明を追加"
                            value={description}
                            onChange={(e) => setSchedule({ description: e.target.value })}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={saveSchedule} disabled={!title}>
                    保存
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default AddScheduleDialog;