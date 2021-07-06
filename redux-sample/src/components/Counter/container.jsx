import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";

// store からどの state を引っ張ってくるかを定義している
//const mapStateProps = state => {return { count: state.count };};と同義
const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = (dispatch) => ({
    increment: count => {
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
});

//HOC（Hight Order Component）or カリー化
export default connect(
    mapStateProps,
    mapDispatchProps
)(Counter);

