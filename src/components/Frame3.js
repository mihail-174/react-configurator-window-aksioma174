import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';

export default class Frame3 extends Component {
    constructor(props) {
        super(props);
        this.onChangeWidth = this.onChangeWidth.bind(this);
    }
    onChangeWidth(e) {
        const {context} = this.props;
        context.methods.setAppState({
            // frame_3__width: parseInt( e.currentTarget.value, 0 )
            // frame__3: {
            //     width: parseInt( e.currentTarget.value, 0 )
            // }
            frame__3__width: parseInt( e.currentTarget.value, 0 )
        });
    }
    render() {
        const {context} = this.props,
                state = context.state;

        return (
            <div className={ state.frame__3__door ? 'frames__frame frames__frame-3 door' : 'frames__frame frames__frame-3 window' }>
                <div className='frames__w'>
                    <input type='text' onChange={this.onChangeWidth} defaultValue={state.frame__3__width} />
                </div>
                <div className='frames__t'>
                    <Remove num={this.props.num} context={context} />
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
