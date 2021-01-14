import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Bake from "./containers/Bake/Bake";
import "./styles/css/index.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Bake />
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
