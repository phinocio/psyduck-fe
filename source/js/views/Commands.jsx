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
                        <div className='command'>
                            The Kings, fuck them.
                        <div className='command-description'>
                                Use this command to say fuck the kings!
                            </div>
                            Commands:
                            <div className='command-code'>
                                ftk
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !ftk
                            </div>
                            Example output:
                            <div className='command-example'>
                                <img src='https://cdn.discordapp.com/attachments/317180913110745088/404113239342055424/if-its-brown-flush-it-down_fb_1265355.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['grab'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('grab')}>
                        Grab Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['grab'] ? '' : 'in'}`}>
                        <div className='command'>
                            There is no hiding from Psyduck.
                        <div className='command-description'>
                                With this command you can save a quote from another user. You know, for blackmail later on :)
                            </div>
                            Commands:
                            <div className='command-code'>
                                grab, snag, quote
                            </div>
                            Parameters:
                            <div className='command-code'>
                                {'<mention>'}
                            </div>
                            Options:
                            <div className='command-code'>
                                {'count - number, used to grab a quote other than the last post from the <mention> user. Counting up from the last.'}
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !grab @Marky Mark
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !grab @Marky Mark 2
                            </div>
                        </div>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['rng'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('rng')}>
                        Random Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['rng'] ? '' : 'in'}`}>
                        <div className='command'>
                            Time to blackmail!!!
                        <div className='command-description'>
                                Use this command to recall a quote from the target user.
                            </div>
                            Commands:
                            <div className='command-code'>
                                random
                            </div>
                            Parameters:
                            <div className='command-code'>
                                {'<mention>'}
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !random @Marky Mark
                            </div>
                            Example output:
                            <div className='command-example'>
                            Remember this one @Marky Mark?? -> harold over here grabbing himself yall
                            </div>
                        </div>
                    </div>
                </div>
                <div className='command-module'>
                    <div className={`module-name ${!this.state.open['ww'] ? 'entypo-down-open' : 'entypo-up-open'}`} onClick={() => this.collapse('ww')}>
                        Wild Wing Module
                    </div>
                    <div className={`available-commands collapse ${!this.state.open['ww'] ? '' : 'in'}`}>
                        <div className='command'>
                            Old habits die hard...
                        <div className='command-description'>
                                These commands have been ported from the old bot, Wild Wing.
                            </div>
                            <div className='subcommand-header'>Lets go Ducks!</div>
                            Commands:
                            <div className='command-code'>
                                lgd, letsgo, goducks
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !lgd
                            </div>
                            Example output:
                            <div className='command-example'>
                                <img src='https://images-ext-1.discordapp.net/external/o7jgUOZjcd2r1dhzFqM743KUcHH1eUCaW7cC-Wv8soc/https/media.giphy.com/media/RrVzUOXldFe8M/giphy.gif' />
                            </div>
                            <div className='subcommand-header'>Goal!</div>
                            Commands:
                            <div className='command-code'>
                                goal, g, score
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !g
                            </div>
                            Example output:
                            <div className='command-example'>
                                <img src='https://media.giphy.com/media/3oKIPxAqQThWWlD0Sk/giphy.gif' />
                            </div>
                            <div className='subcommand-header'>Game Day</div>
                            Commands:
                            <div className='command-code'>
                                gameday, gd, game
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !gameday
                            </div>
                            Example output:
                            <div className='command-example'>
                            FUCK YEAH @Marky Mark IT'S FUCKIN GAME DAY!!!!<br/>
                                <img src='https://images-ext-2.discordapp.net/external/gdPOUwTIdsqN-hhBoFjAJgUMwLUZQFIWs_iR9X7tC4w/https/media.giphy.com/media/MhUksLMEoawQU/giphy.gif?width=400&height=169' />
                            </div>
                            <div className='subcommand-header'>Win!</div>
                            Commands:
                            <div className='command-code'>
                                win, g, duckswin
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !w
                            </div>
                            Example output:
                            <div className='command-example'>
                            FUCKIN RIGHT BOYS!!!!<br/>
                                <img src='https://images-ext-2.discordapp.net/external/vPPSdQ0bclFahHbiCV4BZdfnnQecvU5pjmW9Q4YIGPo/https/media.giphy.com/media/26tPcgtbhhbU88U2A/giphy.gif?width=400&height=225' />
                            </div>
                            <div className='subcommand-header'>Also</div>
                            Commands:
                            <div className='command-code'>
                                also, a
                            </div>
                            Parameters:
                            <div className='command-code'>
                                count - number of times to repeat "ALSO", limit 100.
                            </div>
                            Example invocation:
                            <div className='command-example'>
                                !also 5
                            </div>
                            Example output:
                            <div className='command-example'>
                            ALSO ALSO ALSO ALSO ALSO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
