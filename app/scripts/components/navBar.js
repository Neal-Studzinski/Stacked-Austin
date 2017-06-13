import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import container from "../containers/all.js";
import logOut from "../actions/logout.js";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    componentDidMount() {
        //this.props.dispatch(loadMovies());
        //this.props.dispatch(loadRatings());
    }
    handleLogOut(e) {
        e.preventDefault();
        let token = this.props.session["userToken"];
        this.props.dispatch(logOut(token));
        this.props.history.push("/");
    }
    render() {
        let hideClass = "hide";

        if (this.props.session.user !== null) {
            console.log(this.props.session.user);
            hideClass = "show";
        }

        return (
            <nav>
                <div className="nav-wrapper">
                    <div className={hideClass}>
                        <button
                            onClick={this.handleLogOut}
                            className="logout"
                            type="submit"
                            value="LOGOUT"
                        />
                    </div>

                </div>
            </nav>
        );
    }
}
export default connect(container.allState)(NavBar);
