import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Bake from "./containers/Bake/Bake";
import "./App.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Bake />
            </BrowserRouter>
        );
    }
}

export default App;
