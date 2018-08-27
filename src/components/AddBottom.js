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
                ['frame_1__door']: false,
                ['frame_2__door']: false,
                ['frame_3__door']: false
            });
        });
        context.methods.setAppState({
            ['frame_' + this.props.num + '__door']: true
        });
        e.currentTarget.parentNode.parentNode.classList.add('door');

    }
    render() {
        const {context} = this.props,
                state = context.state;
        return (
            <div className='add' onClick={this.click}></div>
        )
    }
}
