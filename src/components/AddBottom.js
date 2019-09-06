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

            frame__1__horizontal_name: 'none',
            frame__2__horizontal_name: 'none',
            frame__3__horizontal_name: 'none',

            frame__1__horizontal: 0,
            frame__2__horizontal: 0,
            frame__3__horizontal: 0,

            ['frame__'+this.props.num+'__type']: 'door',
            ['frame__' + this.props.num + '__horizontal_name']: 'left',
            ['frame__' + this.props.num + '__horizontal']: 1,
            ['frame__' + this.props.num + '__mosquito']: false
        });
        document.querySelectorAll('.frames__frame').forEach(function(item, i, arr) {
            item.classList.remove('door');
            item.classList.add('window');
            item.querySelector(".parameters__item_none").removeAttribute('style');
            item.querySelector(".parameters__field_mosquito").removeAttribute('style');
        });
        document.querySelector(".frames__frame-" + this.props.num).classList.add('door');
        document.querySelector(".frames__frame-" + this.props.num).classList.remove('window');
        document.querySelector(".frames__frame-" + this.props.num).querySelector(".parameters__item_none").style.display = 'none';
        document.querySelector(".frames__frame-" + this.props.num).querySelector(".parameters__field_mosquito").style.display = 'none';
    }
    render() {
        return (
            <div className='add' onClick={this.click}></div>
        )
    }z
}
