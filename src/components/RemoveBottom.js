import React, { Component } from 'react';

export default class RemoveBottom extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props;

        context.methods.setAppState({
            ['frame__' + this.props.num + '__door']: false
        });

        e.currentTarget.parentNode.parentNode.classList.remove('door');
        e.currentTarget.parentNode.parentNode.classList.add('window');
    }
    render() {
        return (
            <div className='del' onClick={this.click}></div>
        )
    }
}
