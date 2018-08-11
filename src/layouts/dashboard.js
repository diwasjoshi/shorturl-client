import React, {Component} from "react";
import Toolbar from "../components/toolbar/toolbar";

export default class DashboardLayout extends Component {
    render() {
        return (
            <div className="page page-dashboard">
                <div className="navbar">
                    <Toolbar/>
                </div>
                <div className="main">{this.props.children}</div>
            </div>
        );
    }
}
