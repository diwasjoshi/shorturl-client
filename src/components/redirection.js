import React, {Component, PropTypes} from 'react';


import Modal from 'react-modal';

export default class Redirection extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
        window.location = this.props.redirectionUrl;
    }

    render() {
        return (
          <div></div>
        )
    }
}
