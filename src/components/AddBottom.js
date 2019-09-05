import React, { Component } from 'react';

export default class AddBottom extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props;
        const state = context.state;
        if ( state.frame__1__type==='window' && state.frame__2__type==='window' && state.frame__3__type==='window' ) {
            document.querySelector('.markup-height .t input').removeAttribute('disabled');
        }
        context.methods.setAppState({
            height: state.height_wind + state.height_door,
            frame__1__type: 'window',
            frame__2__type: 'window',
            frame__3__type: 'window',
            ['frame__'+this.props.num+'__type']: 'door',
            ['frame__'+this.props.num+'__open_horizontal']: 'left'
        });
        document.querySelectorAll('.frames__frame').forEach(function(item, i, arr) {
            item.classList.remove('door');
            item.classList.add('window');
        });
        document.querySelector(".frames__frame-" + this.props.num).classList.add('door');
        document.querySelector(".frames__frame-" + this.props.num).classList.remove('window');
    }
    render() {
        return (
            <div className='add' onClick={this.click}></div>
        )
    }z
}
