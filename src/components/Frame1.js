import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';
import Settings from './Settings';
import Parameters from './Parameters';

// 1 створка
export default class Frame1 extends Component {
    constructor(props) {
        super(props);
        this.onChangeWidth = this.onChangeWidth.bind(this);
    }

    onChangeWidth(e) {
        const {context} = this.props;
        const state = context.state;

        if ( state.winds === 2 ) {
            context.methods.setAppState({
                frame__1__width: Math.ceil(e.currentTarget.value),
                frame__2__width: Math.ceil(state.width - e.currentTarget.value)
            });
        }
        if ( state.winds === 3 ) {
            context.methods.setAppState({
                frame__1__width: Math.ceil(e.currentTarget.value),
                frame__2__width: Math.ceil(state.width - e.currentTarget.value - state.frame__3__width)
            });
        }
    }

    render() {
        const {context} = this.props;
        const state = context.state;
        return (
            <div className={'frames__frame frames__frame-1 window'}>
                <div className='frames__w'>
                    <input type='text' onChange={this.onChangeWidth} value={state.frame__1__width} />
                    <span className="suffix">мм</span>
                </div>
                <div className='frames__t'>
                    {
                        state.frame__1 || state.winds===1
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

    componentDidMount() {
        document.querySelector('.frames__frame-1 .frames__w input').setAttribute('disabled', 'disabled');
    }

}
