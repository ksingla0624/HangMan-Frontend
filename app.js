import React from "react";
import reactDom from "react-dom";
import Game from "./components/game/index.js";
import "./stylesheet/main.scss";
const App = () => <Game />;
reactDom.render(<App />, document.getElementById("app"));
