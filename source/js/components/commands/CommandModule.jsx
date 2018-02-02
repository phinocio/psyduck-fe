import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import CollapsingComponent from 'components/elements/CollapsingComponent';

export default class CommandModule extends Component {
    static propTypes = {
        moduleName: PropTypes.string,
        moduleQuote: PropTypes.string,
        availableCommands: PropTypes.array,
    }

    constructor() {
        super();
        this.state = { open: false };
    }

    collapse = () => {
        this.setState({ open: !this.state.open });
    }
    renderParams(params) {
        return (
            <div>
                Parameters:
            <div className='command-code'>
                    {params.join(' ')}
                </div>
            </div>
        );
    }
    renderOptions(options) {
        return (
            <div>
                Options:
                <div className='command-code'>
                    {options.map(option => {
                        return (
                            <div>{option}<br /></div>
                        )
                    })}
                </div>
            </div>
        );
    }
    renderExamples(examples) {
        return (
            <div>
                Example invocation:
                {examples.map(example => {
                    return (
                        <div className='command-example'>
                            {`!${example}`}
                        </div>
                    )
                })}
            </div>
        );
    }
    renderOutput(output) {
        return (
            <div>Example output:
                <div className='command-example'>
                    {output}
                </div>
            </div>
        );
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
                    Commands:
                            <div className='command-code'>
                        {command.codes.join(', ')}
                    </div>
                    {command.params && this.renderParams(command.params)}
                    {command.options && this.renderOptions(command.options)}
                    {command.examples && this.renderExamples(command.examples)}
                    {command.output && this.renderOutput(command.output)}
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
