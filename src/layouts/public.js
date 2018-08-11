import React, {Component} from "react";
import Navbar from "../components/navBar/menu_container";

export default class PublicLayout extends Component {
    render() {
        return (
            <div className="page page-login">
                <div className="main">{this.props.children}</div>
            </div>
        );
    }
}
