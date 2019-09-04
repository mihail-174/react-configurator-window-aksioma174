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
            // width: state.width + state['frame__' + this.props.num + '__width'],
            ['frame__'+this.props.num]: true,
            ['frame__'+this.props.num+'__type']: 'window'
        });
        if ( state.winds+1 === 2 ) {
            context.methods.setAppState({
                frame__1__width: Math.ceil(state.width / 2),
                frame__2__width: Math.ceil(state.width / 2)
            });
        }
        if ( state.winds+1 === 3 ) {
            context.methods.setAppState({
                frame__1__width: Math.ceil(state.width / 3),
                frame__2__width: Math.ceil(state.width / 3),
                frame__3__width: Math.ceil(state.width / 3)
            });
        }
    }
    render() {
        return (
            <div>
                <div className='add' onClick={this.click}></div>
            </div>
        )
    }
}
