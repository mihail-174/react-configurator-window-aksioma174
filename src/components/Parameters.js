import React, { Component } from 'react';

export default class Parameters extends Component {
    constructor(props) {
        super(props);
        this.mosquitoClick = this.mosquitoClick.bind(this);
        this.horizontalClick = this.horizontalClick.bind(this);
        this.verticalClick = this.verticalClick.bind(this);
        this.close = this.close.bind(this);
    }
    close(e) {
        e.currentTarget.parentNode.classList.remove('active');
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
        switch ( parseInt(e.currentTarget.getAttribute('data-index'), 0) ) {
            case 0:
                open='none';
                document.querySelector(".frames__frame-" + windowId).classList.add('frames__frame_open-x-none')
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
            ['frame__' + this.props.num + '__open_horizontal']: open,
            ['frame__' + this.props.num + '__open_horizontal__value']: value
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
        return (
            <div className='parameters'>
                <div className='parameters__close' onClick={this.close}></div>
                <div className='parameters__title'>Параметры</div>
                <div className='parameters__field parameters__field_horizontal'>
                    <div className='parameters__label'>Гор. открытие:</div>
                    <div className='parameters__cont'>
                        {
                            state.frame__1__type === 'window'
                            &&
                            <label className='parameters__item parameters__item_none active' htmlFor={'radio-h-1-frame-' + this.props.num}>
                                <input onChange={(e)=>this.horizontalClick(e, 0, this.props.num)} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='0' id={'radio-h-1-frame-' + this.props.num} defaultChecked='true' type="radio" />
                            </label>
                        }
                        <label className='parameters__item parameters__item_left' htmlFor={'radio-h-3-frame-' + this.props.num}>
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
                <div className='parameters__field parameters__field_mosquito'>
                    <div className='parameters__label'>Москитная сетка:</div>
                    <div className='parameters__cont'>
                        <label className='parameters__item parameters__item_mosquito' htmlFor={'field_mosquito-1-frame-' + this.props.num}>
                            <input onChange={this.mosquitoClick} className='parameters__input' id={'field_mosquito-1-frame-' + this.props.num} data-index='0' defaultChecked="" type="checkbox" />
                        </label>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.querySelector(".frames__frame-" + this.props.num).classList.add('frames__frame_open-x-none')
    }

}
