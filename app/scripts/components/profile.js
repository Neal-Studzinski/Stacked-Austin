import store from "../store.js";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import container from "../containers/all.js";
import loadProfile from "../actions/info_request";
import User from "../models/user.js";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
                {this.props.session.user.userName}
                <img
                    className="profile-image"
                    src={this.props.session.user.image}
                />

                {this.props.session.user.bio}
            </div>
        );
    }
}
export default connect(container.allState)(Profile);
