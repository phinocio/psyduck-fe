import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
}))
export default class Commands extends Component {
    static propTypes = {
        error: PropTypes.string,
        loading: PropTypes.bool,
    }

    constructor() {
        super();
        this.state = { open: {} };
    }

    collapse = (div) => {
        var open = this.state.open;
        open[div] = !open[div];
        this.setState(open);
    }

    render() {
        return (
            <div className='commands-container'>
                <div className={`command-module`}>
                    <div className={`module-name ${!this.state.open['dis'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('dis')}>
                        Disappointment Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['dis'] ? '' : 'in'}`}>
                        <div className='command'>
                            Well fuck...that was not awesome.
                        <div className='command-description'>
                                Use this command to display your disdain with the current state of the chat or game events.
                            </div>
                            Commands:
                            <div className='command-code'>
                                fuck, boo, nonono
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !fuck
                            </div>
                            Example output:
                            <div className='command-example'>
                                <img src='https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['fat'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('fat')}>
                        Fuck a Team Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['fat'] ? '' : 'in'}`}>
                    <div className='command'>
                            Fuck you, you fuckin fucks!
                        <div className='command-description'>
                                Use this command to say fuck a team!
                            </div>
                            Commands:
                            <div className='command-code'>
                                fat
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !fat
                            </div>
                            Example output:
                            <div className='command-example'>
                                FUCK THE NASHVILLE PREDATORS!!!! Amirite??  (=^ -ω -^=)
                            </div>
                        </div>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['ftk'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('ftk')}>
                        Fuck The Kings Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['ftk'] ? '' : 'in'}`}>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['grab'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('grab')}>
                        Grab Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['grab'] ? '' : 'in'}`}>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['rng'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('rng')}>
                        Random Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['rng'] ? '' : 'in'}`}>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['ww'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('ww')}>
                        Wild Wing Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['ww'] ? '' : 'in'}`}>
                    </div>
                </div>
            </div>
        );
    }
}
