import React, { Component } from 'react';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        e.currentTarget.parentNode.querySelector('.parameters').classList.toggle('active');
    }
    render() {
        return (
            <div className='settings' onClick={this.click}></div>
        )
    }
}
