import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';

export default class Frame2 extends Component {
    constructor(props) {
        super(props);
        this.onChangeWidth = this.onChangeWidth.bind(this);
    }
    onChangeWidth(e) {
        const {context} = this.props;
        context.methods.setAppState({
            // frame_2__width: parseInt( e.currentTarget.value, 0 )
            // frame__2: {
            //     width: parseInt( e.currentTarget.value, 0 )
            // }
            frame__2__width: parseInt( e.currentTarget.value, 0 )
        });
    }
    render() {
        const {context} = this.props,
                state = context.state;

        return (
            <div className={ state.frame__2__door ? 'frames__frame frames__frame-2 door' : 'frames__frame frames__frame-2 window' }>
                <div className='frames__w'>
                    <input type='text' onChange={this.onChangeWidth} defaultValue={state.frame__2__width} />
                </div>
                <div className='frames__t'>
                    {
                        state.frame__3__wind
                        ?
                        ''
                        :
                        <Remove num={this.props.num} context={context} />
                    }
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
