import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h2>Please contact Us</h2>
                <form>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        defaultValue="name"
                    />
                    <input type="email" defaultValue="email" />
                    <input type="submit" value="Send" />
                </form>
            </section>
        );
    }
}
