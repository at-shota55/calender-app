import React from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    DialogActions,
    Grid,
    Typography,
    Tooltip
} from "@material-ui/core";
import { Close, LocationOnOutlined, NotesOutlined, DeleteOutlineOutlined } from "@material-ui/icons";
import styles from "./style.css";

const spacer = (top, bottom) => ({
    margin: `${top}px 0 ${bottom}px 0`
});

const CurrentScheduleDialog = ({ schedule: { item, isDialogOpen },closeDialog, deleteItem }) => {
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogActions>
                <div className={styles.closeButton}>
                    <Tooltip title="削除" placement="bottom">
                        <IconButton onClick={deleteItem} size="small">
                            <DeleteOutlineOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="閉じる" placement="bottom">
                        <IconButton onClick={closeDialog} size="small">
                            <Close />
                        </IconButton>
                    </Tooltip>
                </div>
            </DialogActions>

            <DialogContent>
                {item && (
                    <>
                        <div>
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 30)}
                            >
                                <Grid item>
                                    <span className={styles.box}></span>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {item.date.format("M月 D日")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        {item.location && (
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 4)}
                            >
                                <Grid item>
                                    <LocationOnOutlined />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>{item.location}</Typography>
                                </Grid>
                            </Grid>
                        )}
                        {item.description && (
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 4)}
                            >
                                <Grid item>
                                    <NotesOutlined />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>{item.description}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CurrentScheduleDialog;