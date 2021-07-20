import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import Navigation from "./components/Navigation/container";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import thunk from "redux-thunk";
import ErrorSnackbar from "./components/ErrorSnackbar/container";

dayjs.locale("ja");

//redux-thunkが普通の action なのか thunk の action なのかを判断してくれるようになる
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>    
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
            <ErrorSnackbar />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
