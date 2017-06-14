import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import loadProfile from "../actions/info_request";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    console.log('profile ',profile);

    render() {
        return (
            <User
                key={profile.key}
                userName={profile.userName}
                bio={profile.bio}
                image={profile.image}
            />
        );
    }
}
