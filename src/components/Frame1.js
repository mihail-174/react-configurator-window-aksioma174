import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';
import Settings from './Settings';
import Parameters from './Parameters';

export default class Frame1 extends Component {
    constructor(props) {
        super(props);
        this.onChangeWidth = this.onChangeWidth.bind(this);
    }
    onChangeWidth(e) {
        const {context} = this.props,
                state = context.state;

        let width1, width2, width3 = 0;
        width1 = e.currentTarget.value;
        if ( state.frame__2__wind ) {
            width2 = state.frame__2__width;
        }
        if ( state.frame__3__wind ) {
            width3 = state.frame__3__width;
        }
        context.methods.setAppState({
            width: parseInt( width1, 0 ) + parseInt( width2, 0 ) + parseInt( width3, 0 ),
            frame__1__width: parseInt( e.currentTarget.value, 0 )
        });
    }
    render() {
        const {context} = this.props,
                state = context.state;

        return (
            <div className={ state.frame__1__door ? 'frames__frame frames__frame-1 door' : 'frames__frame frames__frame-1 window' }>
                <div className='frames__w'>
                    <input type='text' onChange={this.onChangeWidth} value={state.frame__1__width} />
                </div>
                <div className='frames__t'>
                    {
                        state.frame__1__wind || state.winds===1
                        ?
                        ''
                        :
                        <Remove num={this.props.num} context={context} />
                    }
                    <Settings num={this.props.num} context={context} />
                    <Parameters num={this.props.num} context={context} />
                </div>
                <div className='frames__b'>
                    {
                        state['frame__'+this.props.num+'__door']
                        ?
                        <RemoveBottom num={this.props.num} context={context} />
                        :
                        <AddBottom num={this.props.num} context={context} />
                    }
                </div>
            </div>
        )
    }
}
