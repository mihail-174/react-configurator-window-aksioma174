import React, { Component } from 'react';

export default class AddTop extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(e) {
        const {context} = this.props,
                state = context.state;
        // console.log( e.currentTarget )

        // let num = 1;
        // switch ( state.winds + 1 ) {
        //     case 2:
        //         num = 2;
        //         break;
        //     case 3:
        //         num = 3;
        //         break;
        //     default:
        //         num = 1;
        //         break;
        // }
        // console.log( num )

        context.methods.setAppState({
            'winds': state.winds+1,
            ['frame_' + this.props.num + '__window']: true
            // ['frame_' + num]: {
            //     wind: true,
            //     door: false
            // }
        });

        // if ( e.currentTarget.classList.contains('add') ) {
            // e.currentTarget.parentNode.parentNode.classList.remove('none');
            // e.currentTarget.parentNode.parentNode.classList.add('window');
            // e.currentTarget.classList.remove('add');
            // e.currentTarget.classList.add('del');
        // }

    }
    render() {
        const {context} = this.props;
        return (
            <div>
                <div className='add' onClick={this.click}></div>
            </div>
        )
    }
}


// { context.state.winds < 3 && <div className='add' onClick={this.click}></div> }
