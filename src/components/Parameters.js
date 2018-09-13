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
        const {context} = this.props,
                state = context.state;

        // console.clear();
        // console.log( e.currentTarget );
        // console.log( e.currentTarget.checked );
        // console.log( this.props.num );

        context.methods.setAppState({
            ['frame__' + this.props.num + '__mosquito']: e.currentTarget.checked
        });
    }
    horizontalClick(e) {
        const {context} = this.props,
                state = context.state;

        // console.clear();
        // console.log( e.currentTarget );
        // console.log( e.currentTarget.getAttribute('data-index') );
        // console.log( this.props.num );

        let list = e.currentTarget.parentNode.parentNode.querySelectorAll(".parameters__item");
        [].forEach.call(list, function(el) {
            el.classList.remove('active');
        });
        e.currentTarget.parentNode.classList.add('active');

        context.methods.setAppState({
            ['frame__' + this.props.num + '__open_horizontal']: parseInt(e.currentTarget.getAttribute('data-index'), 0)
        });
    }
    verticalClick(e) {
        const {context} = this.props,
                state = context.state;

        // console.clear();
        // console.log( e.currentTarget );
        // console.log( e.currentTarget.getAttribute('data-index') );
        // console.log( this.props.num );

        context.methods.setAppState({
            ['frame__' + this.props.num + '__open_vertical']: e.currentTarget.checked
        });

        // let list = e.currentTarget.parentNode.parentNode.querySelectorAll(".parameters__item");
        // [].forEach.call(list, function(el) {
        //     el.classList.remove('active');
        // });
        // e.currentTarget.parentNode.classList.add('active');
        //
        // context.methods.setAppState({
        //     ['frame__' + this.props.num + '__open_vertical']: parseInt(e.currentTarget.getAttribute('data-index'), 0)
        // });
    }
    render() {
        return (
            <div className='parameters'>
                <div className='parameters__close' onClick={this.close}></div>
                <div className='parameters__title'>Параметры</div>
                <div className='parameters__field parameters__field_horizontal'>
                    <div className='parameters__label'>Гор. открытие:</div>
                    <div className='parameters__cont'>
                        <label className='parameters__item parameters__item_none active' htmlFor={'radio-h-1-frame-' + this.props.num}>
                            <input onChange={this.horizontalClick} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='0' id={'radio-h-1-frame-' + this.props.num} defaultChecked='true' type="radio" />
                        </label>
                        <label className='parameters__item parameters__item_right' htmlFor={'radio-h-2-frame-' + this.props.num}>
                            <input onChange={this.horizontalClick} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='1' id={'radio-h-2-frame-' + this.props.num} defaultChecked='' type="radio" />
                        </label>
                        <label className='parameters__item parameters__item_left' htmlFor={'radio-h-3-frame-' + this.props.num}>
                            <input onChange={this.horizontalClick} className='parameters__input' name={'radio-horizontal-frame-' + this.props.num} data-index='2' id={'radio-h-3-frame-' + this.props.num} defaultChecked='' type="radio" />
                        </label>
                    </div>
                </div>
                <div className='parameters__field parameters__field_vertical'>
                    <div className='parameters__label'>Верт. открытие:</div>
                    <div className='parameters__cont'>
                        <input onChange={this.verticalClick} defaultChecked="" type="checkbox" />
                    </div>
                </div>
                <div className='parameters__field parameters__field_mosquito'>
                    <div className='parameters__label'>Москитная сетка:</div>
                    <div className='parameters__cont'>
                        <input onChange={this.mosquitoClick} defaultChecked="" type="checkbox" />
                    </div>
                </div>
            </div>
        )
    }
}


/*

<label className='parameters__item parameters__item_none active' htmlFor={'radio-g-1-frame-' + this.props.num}>
    <input onChange={this.verticalClick} className='parameters__input' name={'radio-vertical-frame-' + this.props.num} id={'radio-g-1-frame-' + this.props.num} defaultChecked='true' data-index='0' type="radio" />
</label>
<label className='parameters__item parameters__item_top' htmlFor={'radio-g-2-frame-' + this.props.num}>
    <input onChange={this.verticalClick} className='parameters__input' name={'radio-vertical-frame-' + this.props.num} id={'radio-g-2-frame-' + this.props.num} defaultChecked='' data-index='1' type="radio" />
</label>

*/
