import React, { Component } from 'react';
import Remove from './Remove';
import RemoveBottom from './RemoveBottom';
import AddBottom from './AddBottom';

export default class Frame1 extends Component {
    render() {
        const {context} = this.props,
                state = context.state;

        return (
            <div className={ state.frame_1__door ? 'frames__frame frames__frame-1 door' : 'frames__frame frames__frame-1 window' }>
                <div className="num">{this.props.num}</div>
                <div className='frames__t'>
                    {
                        state.frame_2__window || state.winds===1
                        ?
                        ''
                        :
                        <Remove num={this.props.num} context={context} />
                    }
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
