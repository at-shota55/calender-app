import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalenderBoard";

const App = () => (
    <div>    
        <CalendarBoard />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
