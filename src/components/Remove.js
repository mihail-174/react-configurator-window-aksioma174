import React, { Component } from 'react';

export default class Remove extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;

        context.methods.setAppState({
            winds: state.winds-1,
            width: state.width - state['frame__' + this.props.num + '__width'],
            ['frame__'+this.props.num+'__wind']: false,
            ['frame__'+this.props.num+'__door']: false
        });
        if ( e.currentTarget.classList.contains('add') ) {
            e.currentTarget.parentNode.parentNode.classList.remove('window');
            e.currentTarget.classList.remove('add');
            e.currentTarget.classList.add('del');
        }
    }
    render() {
        return (
            <div className='del' onClick={this.click}></div>
        )
    }
}
