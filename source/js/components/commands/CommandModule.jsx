import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import CollapsingComponent from 'components/elements/CollapsingComponent';
import CommandSecion from './CommandSection';

export default class CommandModule extends Component {
    static propTypes = {
        moduleName: PropTypes.string,
        moduleQuote: PropTypes.string,
        availableCommands: PropTypes.array,
    }

    renderCommands() {
        const {
            availableCommands
        } = this.props
        return availableCommands.map(command => {
            return (
                <div className='command'>
                    <div className='subcommand-header'>{command.commandHeader}</div>
                    <div className='command-description'>
                        {command.commandDescription}
                    </div>
                    <CommandSecion title='Commands:' itemsWrapperClass='command-code' items={[command.codes.join(', ')]} />
                    {command.params && <CommandSecion title='Parameters:' itemsWrapperClass='command-code' items={[command.params]} />}
                    {command.options && <CommandSecion title='Options:' itemsWrapperClass='command-code' items={command.options.map(o => {return (<div>{o}<br /></div>)})} />}
                    {command.examples && <CommandSecion title='Example invocation:' itemWrapperClass='command-code' items={command.examples.map(e => {return `!${e}`})} />}
                    {command.output && <CommandSecion title='Example output:' itemWrapperClass='command-example' items={[command.output]} />}
                </div>
            )
        });
    }
    render() {
        const {
            moduleName,
            moduleQuote
        } = this.props;

        return (
            <div className={`command-module`}>
                <CollapsingComponent wrapperClass='' headerClass='module-name' title={`${moduleName} Module`} >
                    {moduleQuote}
                    {this.renderCommands()}
                </CollapsingComponent>
            </div>
        );
    }
}
