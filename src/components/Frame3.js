import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';
import Settings from './Settings';
import Parameters from './Parameters';

export default class Frame3 extends Component {
    constructor(props) {
        super(props);
        this.onChangeWidth = this.onChangeWidth.bind(this);
    }
    onChangeWidth(e) {
        const {context} = this.props,
                state = context.state;

        let width1, width2, width3 = 0;
        if ( state.frame__1__wind ) {
            width1 = state.frame__1__width;
        }
        if ( state.frame__2__wind ) {
            width2 = state.frame__2__width;
        }
        width3 = e.currentTarget.value;
        context.methods.setAppState({
            width: parseInt( width1, 0 ) + parseInt( width2, 0 ) + parseInt( width3, 0 ),
            frame__3__width: parseInt( e.currentTarget.value, 0 )
        });
    }
    render() {
        const {context} = this.props,
                state = context.state;

        return (
            <div className={ state.frame__3__type==='door' ? 'frames__frame frames__frame-3 door' : 'frames__frame frames__frame-3 window' }>
                <div className='frames__w'>
                    <input type='text' onChange={this.onChangeWidth} value={state.frame__3__width} />
                </div>
                <div className='frames__t'>
                    <Remove num={this.props.num} context={context} />
                    <Settings num={this.props.num} context={context} />
                    <Parameters num={this.props.num} context={context} />
                </div>
                <div className='frames__b'>
                    {
                        state['frame__'+this.props.num+'__type']==='door'
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
