import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CommandSection extends Component {
    static propTypes = {
        title: PropTypes.string,
        titleClass: PropTypes.string,
        itemWrapperClass: PropTypes.string,
        itemsWrapperClass: PropTypes.string,
        items: PropTypes.array,
    }

    render() {
        const {
    title,
            titleClass,
            itemWrapperClass,
            itemsWrapperClass,
            items
} = this.props;
        return (
            <div>
                <div className={titleClass}>{title}</div>
                <div className={itemsWrapperClass}>
                {items && items.map((item, index) => {
                    return (
                        <div key={`item-${index}`} className={itemWrapperClass}>
                            {item}
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}
