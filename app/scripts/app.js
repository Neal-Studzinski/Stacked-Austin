import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Home from "./components/home.js";
import LogOut from "./actions/logout.js";
import NavBar from "./components/navBar.js";
import Profile from "./components/profile.js";

export default function app() {
    render(
        <Provider store={store}>
            <Router>
                <div>

                    <Route path="/" component={NavBar} />
                    <Route path="/navbar" component={NavBar} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact-us" component={Contact} />
                    <Route exact path="/profile" component={Profile} />
                </div>
            </Router>
        </Provider>,
        document.getElementById("app")
    );
}
