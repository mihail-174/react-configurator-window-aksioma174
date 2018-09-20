import React, { Component } from 'react';
import Wf from '../components/Wf';

export default class Modal extends Component {
    constructor() {
        super();
        this.close = this.close.bind(this);
    }
    close(e) {
        e.preventDefault();
        const {context} = this.props,
        state = context.state;
        context.methods.setAppState({
            modal: !state.modal
        })
    }
    render() {
        const {context} = this.props,
        state = context.state;
        return (
            <div className={state.modal?'modal active':'modal '}>
                <div className='modal__overlay' onClick={this.close}></div>
                <div className='modal__inner'>
                    <div className='modal__close' onClick={this.close}></div>
                    <div className='modal__ttl'>Отправить данные</div>
                    <div className='modal__cont'>
                        <Wf context={context} />
                    </div>
                </div>
            </div>
        )
    }
}
