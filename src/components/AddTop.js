import React, { Component } from 'react';

export default class AddTop extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;
                // frame__x = 'frame__'+this.props.num+'__wind';
        context.methods.setAppState({
            // ['frame_' + this.props.num + '__window']: true,
            winds: state.winds+1,
            // [frame__x]: {
            //     ...state[frame__x],
            //     wind: true
            // }
            ['frame__'+this.props.num+'__wind']: true
        });
    }
    render() {
        return (
            <div>
                <div className='add' onClick={this.click}></div>
            </div>
        )
    }
}
