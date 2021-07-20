import { connect } from "react-redux";
import ErrorSnackbar from "./presentation";
import { schedulesResetError } from "../../redux/schedules/action";

const mapStateToProps = (state) => ({ error: state.schedules.error });

const mapDispatchToProps = (dispatch) => ({
    handleClose: () => {
        dispatch(schedulesResetError());
    }       
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);