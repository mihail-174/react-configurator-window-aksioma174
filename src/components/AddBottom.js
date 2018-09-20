import React, { Component } from 'react';

export default class AddBottom extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;

        document.querySelectorAll('.frames__frame').forEach(function(item, i, arr) {
            item.classList.remove('door');
            context.methods.setAppState({
                height: state.height_wind + state.height_door,
                frame__1__type: 'window',
                frame__2__type: 'window',
                frame__3__type: 'window',
                // ['frame__'+this.props.num+'__height_door']: state.height_door,
                // frame__1__door: false,
                // frame__2__door: false,
                // frame__3__door: false
            });
        });
        context.methods.setAppState({
            // ['frame__'+this.props.num+'__door']: true,
            ['frame__'+this.props.num+'__type']: 'door'
        });
        e.currentTarget.parentNode.parentNode.classList.add('door');
    }
    render() {
        return (
            <div className='add' onClick={this.click}></div>
        )
    }
}
