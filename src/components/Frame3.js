import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';
import AddTop from './AddTop';

export default class Frame3 extends Component {
    render() {
        const {context} = this.props,
                state = context.state;

        return (
            <div className={ state.frame_3__door ? 'frames__frame frames__frame-3 door' : 'frames__frame frames__frame-3 window' }>
                <div className="num">{this.props.num}</div>
                <div className='frames__t'>
                    <Remove num={this.props.num} context={context} />
                </div>
                <div className='frames__b'>
                    {
                        state['frame_'+this.props.num+'__door']
                        ?
                        <RemoveBottom num={this.props.num} context={context} />
                        :
                        <AddBottom num={this.props.num} context={context} />
                    }
                </div>
            </div>
        )
    }
}