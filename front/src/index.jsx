import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import Navigation from "./components/Navigation/container";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

dayjs.locale("ja");

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>    
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
