import React, { Component } from 'react';

export default class RemoveBottom extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props;
        const state = context.state;
        context.methods.setAppState({
            ['frame__' + this.props.num+'__type']: 'window',
            height: state.height - state.height_door,
            // ['frame__'+this.props.num+'__open_horizontal']: 'none',
            ['frame__' + this.props.num + '__horizontal_name']: 'none',
            ['frame__' + this.props.num + '__horizontal']: 0
        });

        document.querySelector('.markup-height .t input').setAttribute('disabled', 'disabled');

        e.currentTarget.parentNode.parentNode.classList.remove('door');
        e.currentTarget.parentNode.parentNode.classList.add('window');
        document.querySelector(".frames__frame-" + this.props.num).querySelector(".parameters__item_none").removeAttribute('style');
        document.querySelector(".frames__frame-" + this.props.num).querySelector(".parameters__field_mosquito").removeAttribute('style');
    }
    render() {
        return (
            <div className='del' onClick={this.click}></div>
        )
    }

    componentDidMount() {}

}
