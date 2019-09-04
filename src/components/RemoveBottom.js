import React, { Component } from 'react';

export default class RemoveBottom extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;

        context.methods.setAppState({
            ['frame__' + this.props.num+'__type']: 'window',
            height: state.height - state.height_door
        });

        // if ( state.frame__1__type==='window' && state.frame__2__type==='window' && state.frame__3__type==='window' ) {
            document.querySelector('.markup-height .t input').setAttribute('disabled', 'disabled');
        // }

        e.currentTarget.parentNode.parentNode.classList.remove('door');
        e.currentTarget.parentNode.parentNode.classList.add('window');
    }
    render() {
        return (
            <div className='del' onClick={this.click}></div>
        )
    }
}
