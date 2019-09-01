import React, { Component } from 'react';

export default class Remove extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;

        let heightDoor = 0;
        if ( state['frame__' + [this.props.num] + '__type'] === 'door') {
            heightDoor = state.height_door;
        } else {
            heightDoor = 0;
        }
        context.methods.setAppState({
            winds: state.winds-1,
            // width: state.width - state['frame__' + this.props.num + '__width'],
            ['frame__'+this.props.num+'__type']: 'window',
            ['frame__'+this.props.num]: false,
            height: state.height - heightDoor
        });
        if ( state.winds-1 === 2 ) {
            context.methods.setAppState({
                frame__1__width: Math.ceil(state.width / 2),
                frame__2__width: Math.ceil(state.width / 2)
            });
        }
        if ( state.winds-1 === 3 ) {
            context.methods.setAppState({
                frame__1__width: Math.ceil(state.width / 3),
                frame__2__width: Math.ceil(state.width / 3),
                frame__3__width: Math.ceil(state.width / 3)
            });
        }
        if ( e.currentTarget.classList.contains('add') ) {
            e.currentTarget.parentNode.parentNode.classList.remove('window');
            e.currentTarget.classList.remove('add');
            e.currentTarget.classList.add('del');
        }

        if ( state.winds-1 === 1 ) {
            document.querySelector('.frames__frame-1 .frames__w input').setAttribute('disabled', 'disabled');
            context.methods.setAppState({
                frame__1__width: state.width
            });
        }


    }
    render() {
        return (
            <div className='del' onClick={this.click}></div>
        )
    }
}
