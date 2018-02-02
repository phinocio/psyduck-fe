import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class PostData extends Component {
    static propTypes = {
        dataTitle: PropTypes.string,
        posts: PropTypes.array,
    }

    render() {
        const {
            dataTitle,
            posts
        } = this.props;

        return (
            <div className="post-data">
              <div className="post-data-header">{dataTitle}</div>
              <div className='post-count'>
                <span className="entypo-trophy">Total Posts: {posts.find(p => p.CountType === "4").Count}</span>
              </div>
              <div className='post-count'>
                <span className="entypo-keyboard">Text Posts: {posts.find(p => p.CountType === "3").Count}</span>
              </div>
              <div className='post-count'>
                <span className="entypo-picture">Image Posts: {posts.find(p => p.CountType === "2").Count}</span>
              </div>
              <div className='post-count'>
                <span className="fontelico-emo-thumbsup">Emoji Posts: {posts.find(p => p.CountType === "0").Count}</span>
              </div>
              <div className='post-count'>
                <span className="entypo-video">Gif Posts: {posts.find(p => p.CountType === "1").Count}</span>
              </div>
            </div>
        );
    }
}
