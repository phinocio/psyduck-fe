import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CollapsingComponent extends Component {
    static propTypes = {
        wrapperClass: PropTypes.string,
        headerClass: PropTypes.string,
        title: PropTypes.string,
        opened: PropTypes.bool
    }

    constructor(props) {
        super();
        this.state = { open: props.opened || false };
    }

    collapse = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const {
    wrapperClass,
            headerClass,
            title
} = this.props;
        return (
            <div>
                <div className={`${headerClass} ${!this.state.open ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse()}>
                    {title}
                </div>
                <div className={`collapse ${!this.state.open ? '' : 'in'}`}>
                    <div className={wrapperClass}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
