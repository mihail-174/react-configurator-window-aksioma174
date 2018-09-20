import React, { Component } from 'react';

export default class AddTop extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;

        context.methods.setAppState({
            winds: state.winds+1,
            width: state.width + state['frame__' + this.props.num + '__width'],
            ['frame__'+this.props.num]: true,
            ['frame__'+this.props.num+'__type']: 'window'
        });
    }
    render() {
        return (
            <div>
                <div className='add' onClick={this.click}></div>
            </div>
        )
    }
}
