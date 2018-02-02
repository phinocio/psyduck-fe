import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommandModule from 'components/commands/CommandModule'

@connect(state => ({
}))
export default class Commands extends Component {
    static propTypes = {
        error: PropTypes.string,
        loading: PropTypes.bool,
    }

    render() {
        const commandModules = [
            {
                moduleName: 'Disappointment',
                moduleQuote: 'Well fuck...that was not awesome.',
                availableCommands: [
                    {
                        commandHeader: 'Boo',
                        commandDescription: 'Use this command to display your disdain with the current state of the chat or game events.',
                        codes: ['fuck', 'boo', 'nonono'],
                        output: <img src='https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif' />
                    }
                ],
            },
            {
                moduleName: 'Fuck a Team',
                moduleQuote: 'Fuck you, you fuckin fucks!',
                availableCommands: [
                    {
                        commandHeader: 'FAT',
                        commandDescription: 'Use this command to say fuck a team!',
                        codes: ['fat'],
                        output: 'FUCK THE NASHVILLE PREDATORS!!!! Amirite??  (=^ -ω -^=)'
                    }
                ],
            },
            {
                moduleName: 'Fuck The Kings',
                moduleQuote: 'The Kings, fuck them.',
                availableCommands: [
                    {
                        commandHeader: 'FTK',
                        commandDescription: 'Use this command to say fuck the kings!',
                        codes: ['ftk'],
                        output: <img src='https://cdn.discordapp.com/attachments/317180913110745088/404113239342055424/if-its-brown-flush-it-down_fb_1265355.jpg' />
                    }
                ],
            },
            {
                moduleName: 'Save Quotes',
                moduleQuote: 'There is no hiding from Psyduck.',
                availableCommands: [
                    {
                        commandHeader: 'Grab',
                        commandDescription: 'With this command you can save a quote from another user. You know, for blackmail later on :)',
                        codes: ['grab', 'snag', 'quote'],
                        params: ['<mention>'],
                        options: ['count - number, used to grab a quote other than the last post from the <mention> user. Counting up from the last.'],
                        examples: ['grab @Marky Mark', 'grab @Marky Mark 2']
                    }
                ],
            },
            {
                moduleName: 'Get Quotes',
                moduleQuote: 'Time to blackmail!!!',
                availableCommands: [
                    {
                        commandHeader: 'Random',
                        commandDescription: 'Use this command to recall a quote from the target user.',
                        codes: ['random'],
                        params: ['<mention>'],
                        examples: ['random @Marky Mark'],
                        output: 'Remember this one @Marky Mark?? -> harold over here grabbing himself yall'
                    }
                ],
            }
            ,
            {
                moduleName: 'Wild Wing',
                moduleQuote: 'Old habits die hard...',
                availableCommands: [
                    {
                        commandHeader: 'Lets go Ducks!',
                        codes: ['lgd', 'letsgo', 'goducks'],
                        examples: ['lgd'],
                        output: <img src='https://images-ext-1.discordapp.net/external/o7jgUOZjcd2r1dhzFqM743KUcHH1eUCaW7cC-Wv8soc/https/media.giphy.com/media/RrVzUOXldFe8M/giphy.gif' />
                    },
                    {
                        commandHeader: 'Goal!',
                        codes: ['goal', 'g', 'score'],
                        examples: ['g'],
                        output: <img src='https://media.giphy.com/media/3oKIPxAqQThWWlD0Sk/giphy.gif' />
                    },
                    {
                        commandHeader: 'Game Day!',
                        codes: ['gameday', 'gd', 'game'],
                        examples: ['gameday'],
                        output: (<div>FUCK YEAH @Marky Mark IT'S FUCKIN GAME DAY!!!! <br /><img src='https://images-ext-2.discordapp.net/external/gdPOUwTIdsqN-hhBoFjAJgUMwLUZQFIWs_iR9X7tC4w/https/media.giphy.com/media/MhUksLMEoawQU/giphy.gif?width=400&height=169' /></div>)
                    },
                    {
                        commandHeader: 'Win!',
                        codes: ['win', 'w', 'duckswin'],
                        examples: ['w'],
                        output: (<div>FUCKIN RIGHT BOYS!!!!<br /><img src='https://images-ext-2.discordapp.net/external/vPPSdQ0bclFahHbiCV4BZdfnnQecvU5pjmW9Q4YIGPo/https/media.giphy.com/media/26tPcgtbhhbU88U2A/giphy.gif?width=400&height=225' /></div>)
                    },
                    {
                        commandHeader: 'Also',
                        codes: ['also', 'a'],
                        params: ['count - number of times to repeat "ALSO", limit 100.'],
                        examples: ['also 5'],
                        output: 'ALSO ALSO ALSO ALSO ALSO'
                    }
                ],
            }
        ];
        return (
            <div className='commands-container'>
                {commandModules.map((cm, i) => {
                    return <CommandModule key={`cm-${i}`} moduleName={cm.moduleName} moduleQuote={cm.moduleQuote} availableCommands={cm.availableCommands} />
                })}
            </div>
        );
    }
}
