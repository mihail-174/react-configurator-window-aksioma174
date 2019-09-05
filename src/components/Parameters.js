import React, { Component } from 'react';

function keyExists(key, search) {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    for (var i = 0; i < search.length; i++) {
        if (search[i] === key) {
            return true;
        }
    }
    return key in search;
}

export default class Parameters extends Component {
    constructor(props) {
        super(props);
        this.mosquitoClick = this.mosquitoClick.bind(this);
        this.horizontalClick = this.horizontalClick.bind(this);
        this.verticalClick = this.verticalClick.bind(this);
        this.close = this.close.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    close(e) {
        e.currentTarget.parentNode.classList.remove('active');
    }
    onChange(e, index) {
        // console.log(e.currentTarget);
        const {context} = this.props;
        const state = context.state;
        // console.log(index);
        context.methods.setAppState({
            parametersWindow2: {
                ...state.parametersWindow2,
                checked: e.currentTarget.checked
            }
        });
    }
    mosquitoClick(e) {
        const {context} = this.props;
        e.currentTarget.parentNode.classList.toggle('active');
        document.querySelector(".frames__frame-" + this.props.num).classList.toggle('frames__frame_mosquito');
        context.methods.setAppState({
            ['frame__' + this.props.num + '__mosquito']: e.currentTarget.checked
        });
    }
    horizontalClick(e, value, windowId) {
        const {context} = this.props;
        let list = e.currentTarget.parentNode.parentNode.querySelectorAll(".parameters__item");
        [].forEach.call(list, function(el) {
            el.classList.remove('active');
        });
        e.currentTarget.parentNode.classList.add('active');
        let open='';
        document.querySelector(".frames__frame-" + windowId).classList.remove('frames__frame_open-x-none', 'frames__frame_open-x-left', 'frames__frame_open-x-right')
        // document.querySelector(".frames__frame-" + windowId).classList.remove('frames__frame_open-x-none')
        switch ( parseInt(e.currentTarget.getAttribute('data-index'), 0) ) {
            case 0:
                open='none';
                document.querySelector(".frames__frame-" + windowId).classList.add('frames__frame_open-x-none');
                // setTimeout(function(){
                //     document.querySelector(".frames__frame-" + windowId).classList.remove('frames__frame_open-x-left', 'frames__frame_open-x-right')
                // }, 500);
                break;
            case 1:
                open='right';
                document.querySelector(".frames__frame-" + windowId).classList.add('frames__frame_open-x-right')
                break;
            case 2:
                open='left';
                document.querySelector(".frames__frame-" + windowId).classList.add('frames__frame_open-x-left')
                break;
            default:
        }
        context.methods.setAppState({
            ['frame__' + this.props.num + '__open_horizontal']: open
        });
    }
    verticalClick(e) {
        const {context} = this.props;
        e.currentTarget.parentNode.classList.toggle('active');
        document.querySelector(".frames__frame-" + this.props.num).classList.toggle('frames__frame_open-y-top');
        context.methods.setAppState({
            ['frame__' + this.props.num + '__open_vertical']: e.currentTarget.checked
        });
    }
    render() {
        const {context} = this.props;
        const state = context.state;
        const parameters = state.parametersWindow.map((item, index)=> {
            return (
                <div key={index} className={'parameters__field parameters__field_' + item.systemName}>
                    <div className='parameters__label'>{item.name}</div>
                    <div className='parameters__cont'>
                        {
                            item.type === 'radio'
                            &&
                                state.parametersWindow[index].value.map((item2, index2)=> {
                                    return (
                                        <label
                                            key={index2}
                                            className={"parameters__item parameters__item_" + item2.name + (item2.checked ? ' active':'')}
                                            htmlFor={'frame-' + this.props.num + '_' + item.systemName + '-radios-' + index2}
                                        >
                                            <input
                                                className='parameters__input'
                                                name={'frame-' + this.props.num + '_' + item.systemName + '-radios'}
                                                id={'frame-' + this.props.num + '_' + item.systemName + '-radios-' + index2}
                                                defaultChecked={item2.checked}
                                                type={item.type}
                                            />
                                        </label>
                                    )
                                })
                        }
                        {
                            item.type === 'checkbox'
                            &&
                                state.parametersWindow[index].value.map((item2, index2)=> {
                                    return (
                                        <label
                                            key={index}
                                            className={"parameters__item parameters__item_" + item2 + (item.checked ? ' active':'')}
                                            htmlFor={'frame-' + this.props.num + '_' + item.systemName + '-checkbox-' + index2}
                                        >
                                            <input
                                                className='parameters__input'
                                                name={'frame-' + this.props.num + '_' + item.systemName + '-radios'}
                                                id={'frame-' + this.props.num + '_' + item.systemName + '-checkbox-' + index2}
                                                defaultChecked={item.checked}
                                                type={item.type}
                                                onChange={ (e) => this.onChange(e, index) }
                                            />
                                        </label>
                                    )
                                })
                        }
                    </div>
                </div>
            )
        });
        return (
            <div className='parameters'>
                <div className='parameters__close' onClick={this.close}></div>
                <div className='parameters__title'>Параметры</div>
                {parameters}
            {/*
                <div className='parameters__field parameters__field_horizontal'>
                    <div className='parameters__label'>Гор. открытие:</div>
                    <div className='parameters__cont'>
                        {
                            state['frame__' + this.props.num + '__type'] === 'window'
                            &&
                            <label className='parameters__item parameters__item_none active' htmlFor={'radio-h-1-frame-' + this.props.num}>
                                <input onChange={(e)=>this.horizontalClick(e, 0, this.props.num)} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='0' id={'radio-h-1-frame-' + this.props.num} defaultChecked='true' type="radio" />
                            </label>
                        }
                        <label className={state['frame__' + this.props.num + '__type'] === 'window' ? 'parameters__item parameters__item_left' : 'parameters__item parameters__item_left active'} htmlFor={'radio-h-3-frame-' + this.props.num}>
                            <input onChange={(e)=>this.horizontalClick(e, 1, this.props.num)} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='2' id={'radio-h-3-frame-' + this.props.num} defaultChecked='' type="radio" />
                        </label>
                        <label className='parameters__item parameters__item_right' htmlFor={'radio-h-2-frame-' + this.props.num}>
                            <input onChange={(e)=>this.horizontalClick(e, 2, this.props.num)} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='1' id={'radio-h-2-frame-' + this.props.num} defaultChecked='' type="radio" />
                        </label>
                    </div>
                </div>
                <div className='parameters__field parameters__field_vertical'>
                    <div className='parameters__label'>Верт. открытие:</div>
                    <div className='parameters__cont'>
                        <label className='parameters__item parameters__item_top' htmlFor={'field_vertical-1-frame-' + this.props.num}>
                            <input onChange={this.verticalClick} className='parameters__input' id={'field_vertical-1-frame-' + this.props.num} data-index='0' defaultChecked="" type="checkbox" />
                        </label>
                    </div>
                </div>
                {
                    state['frame__' + this.props.num + '__type'] === 'window'
                    &&
                    <div className='parameters__field parameters__field_mosquito'>
                        <div className='parameters__label'>Москитная сетка:</div>
                        <div className='parameters__cont'>
                            <label className='parameters__item parameters__item_mosquito' htmlFor={'field_mosquito-1-frame-' + this.props.num}>
                                <input onChange={this.mosquitoClick} className='parameters__input' id={'field_mosquito-1-frame-' + this.props.num} data-index='0' defaultChecked="" type="checkbox" />
                            </label>
                        </div>
                    </div>
                }
                */}
            </div>
        )
    }

    componentDidMount() {
        document.querySelector(".frames__frame-" + this.props.num).classList.add('frames__frame_open-x-none');
    }

}
