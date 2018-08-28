import React, { Component } from 'react';

export default class AddBottom extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;
                // frame__x = 'frame__'+this.props.num;

        document.querySelectorAll('.frames__frame').forEach(function(item, i, arr) {
            item.classList.remove('door');
            context.methods.setAppState({
                // frame__1: {
                //     ...state.frame__1,
                //     door: false
                // },
                // frame__2: {
                //     ...state.frame__2,
                //     door: false
                // },
                // frame__3: {
                //     ...state.frame__3,
                //     door: false
                // }
                // frame_1__door: false,
                // frame_2__door: false,
                // frame_3__door: false
                frame__1__door: false,
                frame__2__door: false,
                frame__3__door: false
            });
        });
        context.methods.setAppState({
            // ['frame_' + this.props.num + '__door']: true
            // [frame__x]: {
            //     ...state[frame__x],
            //     door: true
            // }
            ['frame__'+this.props.num+'__door']: true
        });
        e.currentTarget.parentNode.parentNode.classList.add('door');

    }
    render() {
        return (
            <div className='add' onClick={this.click}></div>
        )
    }
}
