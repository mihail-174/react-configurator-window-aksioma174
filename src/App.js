import React, { Component } from 'react';
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import AddTop from './components/AddTop';
import Modal from './components/Modal';
import './style/App.css';
const Context = React.createContext()

let initialState = {
    winds: 2,
    width: 1300,
    height: 1400,
    height_wind: 1400,
    height_door: 800,

    frame__1: true,
    frame__1__type: 'window',
    frame__1__width: 650,
    // frame__1__height_door: 0,
    // frame__1__wind: true,
    // frame__1__door: false,
    frame__1__open_horizontal: 'нет',
    frame__1__open_vertical: false,
    frame__1__mosquito: false,

    frame__2: true,
    frame__2__type: 'window',
    frame__2__width: 650,
    // frame__2__height_door: 0,
    // frame__2__wind: true,
    // frame__2__door: false,
    frame__2__open_horizontal: 'нет',
    frame__2__open_vertical: false,
    frame__2__mosquito: false,

    frame__3: false,
    frame__3__type: 'window',
    frame__3__width: 650,
    // frame__3__height_door: 0,
    // frame__3__wind: false,
    // frame__3__door: false,
    frame__3__open_horizontal: 'нет',
    frame__3__open_vertical: false,
    frame__3__mosquito: false,

    modal: false
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.setAppState = this.setAppState.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeHeightWind = this.onChangeHeightWind.bind(this);
        this.onChangeHeightDoor = this.onChangeHeightDoor.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    setAppState(newState) {
      this.setState(newState);
    }
    onChangeWidth(e) {
        this.setState({
            width: parseInt( e.currentTarget.value, 0 ),
            frame__1__width: e.currentTarget.value/this.state.winds,
            frame__2__width: e.currentTarget.value/this.state.winds,
            frame__3__width: e.currentTarget.value/this.state.winds
        });
    }
    onChangeHeight(e) {
        let heightWind = 0,
            heightDoor = 0;
        heightWind = e.currentTarget.value * 63.63636363636363 / 100;
        heightDoor = e.currentTarget.value * 36.36363636363637 / 100;
        this.setState({
            height: parseInt( e.currentTarget.value, 0 ),
            height_wind: heightWind,
            height_door: heightDoor
        });
    }
    onChangeHeightWind(e) {
        let heightDoor = 0;
        if ( this.state.frame__1__type==='door' || this.state.frame__2__type==='door' || this.state.frame__3__type==='door' ) {
            heightDoor = this.state.height_door;
        }
        this.setState({
            height: parseInt( e.currentTarget.value, 0 ) + heightDoor,
            height_wind: parseInt( e.currentTarget.value, 0 )
        });
    }
    onChangeHeightDoor(e) {
        this.setState({
            height: this.state.height_wind + parseInt( e.currentTarget.value, 0 ),
            height_door: parseInt( e.currentTarget.value, 0 )
        });
    }
    openModal(e) {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
           <Context.Provider value={{ state: this.state, methods: {setAppState: (value) => this.setState(value)}}}>
            <Context.Consumer>{context => (
                <div className="app">
                    <div className="app__hd">
                        <h2 className='app__title'>Калькулятор окон</h2>
                    </div>
                    <div className="app__cont">

                        <div className='markup-height'>
                            <div className='l'>
                                <input type='text' onChange={this.onChangeHeight} value={this.state.height} />
                            </div>
                            <div>
                                <div className='t'>
                                    <input type='text' onChange={this.onChangeHeightWind} value={this.state.height_wind} />
                                </div>
                                {
                                    this.state.frame__1__type==='door' || this.state.frame__2__type==='door' || this.state.frame__3__type==='door'
                                    ?
                                    <div className='b'>
                                        <input type='text' onChange={this.onChangeHeightDoor} value={this.state.height_door} />
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        </div>

                        <div className='frames'>

                            <div className='markup-width'>
                                <input type='text' onChange={this.onChangeWidth} value={this.state.width} />
                            </div>

                            <div className='frames__cont'>
                                { this.state.winds > 0 && <Frame1 num={1} context={context} /> }
                                { this.state.winds > 1 && <Frame2 num={2} context={context} /> }
                                { this.state.winds > 2 && <Frame3 num={3} context={context} /> }
                            </div>

                        </div>

                        { context.state.winds < 3 &&
                            <div className='action'>
                                <div className='action__top'>
                                    <AddTop num={this.state.winds+1} context={context} />
                                </div>
                            </div>
                        }

                    </div>

                    <div className="app__ft">
                        <div className='app__text'><span>*</span> Мы посчитаем стоимость окна и перезвоним в течение 1 часа</div>
                        <div className='app__btn' onClick={this.openModal}>Посчитать</div>
                    </div>

                    <Modal context={context} />

                    {
                        <pre>
                        {JSON.stringify(this.state, "", 4)}
                        </pre>
                    }



                    <div className='result'>
                        <div className='result__frame'>
                            Общая ширина: {this.state.width} <br/>
                            Общая высота: {this.state.height} <br/>
                        </div>

                        <div className='result__frame'>
                            Cтворка 1: <br/>
                            — Тип: {this.state.frame__1__type==='window'?'окно':'дверь'}<br/>
                            — Ширина: {this.state.frame__1?this.state.frame__1__width:'0'}<br/>
                            — Высота: {this.state.frame__1__type==='door'?this.state.height_wind + this.state.height_door:this.state.height_wind} <br/>
                            — Высота окна: {this.state.height_wind} <br/>
                            — Высота двери: {this.state.frame__1__type==='door'?this.state.height_door:'0'} <br/>
                            — Горизонтальное открытие: {this.state.frame__1__open_horizontal} <br/>
                            — Вертикальное открытие: {this.state.frame__1__open_vertical?'да':'нет'} <br/>
                            — Москитная сетка: {this.state.frame__1__mosquito?'да':'нет'} <br/>
                            <br/><br/>
                        </div>

                        <div className='result__frame'>
                            Cтворка 2: <br/>
                            — Тип: {this.state.frame__2__type==='window'?'окно':'дверь'}<br/>
                            — Ширина: {this.state.frame__2?this.state.frame__2__width:'0'}<br/>
                            — Высота: {this.state.frame__2__type==='door'?this.state.height_wind + this.state.height_door:this.state.height_wind} <br/>
                            — Высота окна: {this.state.height_wind} <br/>
                            — Высота двери: {this.state.frame__2__type==='door'?this.state.height_door:'0'} <br/>
                            — Горизонтальное открытие: {this.state.frame__2__open_horizontal} <br/>
                            — Вертикальное открытие: {this.state.frame__2__open_vertical?'да':'нет'} <br/>
                            — Москитная сетка: {this.state.frame__2__mosquito?'да':'нет'} <br/>
                            <br/><br/>
                        </div>

                        <div className='result__frame'>
                            Cтворка 3: <br/>
                            — Тип: {this.state.frame__3__type==='window'?'окно':'дверь'}<br/>
                            — Ширина: {this.state.frame__3?this.state.frame__3__width:'0'}<br/>
                            — Высота: {this.state.frame__3__type==='door'?this.state.height_wind + this.state.height_door:this.state.height_wind} <br/>
                            — Высота окна: {this.state.height_wind} <br/>
                            — Высота двери: {this.state.frame__3__type==='door'?this.state.height_door:'0'} <br/>
                            — Горизонтальное открытие: {this.state.frame__3__open_horizontal} <br/>
                            — Вертикальное открытие: {this.state.frame__3__open_vertical?'да':'нет'} <br/>
                            — Москитная сетка: {this.state.frame__3__mosquito?'да':'нет'}
                        </div>
                    </div>

                </div>
            )}</Context.Consumer>
            </Context.Provider>
        );
    }

    componentDidMount() {
        this.setState({
            ...initialState,
            data: this.props.data
        })
    }
}

export default App;


/*
Створка 1:
- тип: окно
- ширина: 650
- высота: 1400
- горизонтальное открытие: нет
- вертикальное открытие: нет
- москитная сетка: нет

Створка 2:
- тип: окно
- ширина: 650
- высота: 1400
- горизонтальное открытие: нет
- вертикальное открытие: нет
- москитная сетка: нет
________________________________________
Створка 1:
- тип: окно
- ширина: 650
- высота: 1400
- горизонтальное открытие: нет
- вертикальное открытие: нет
- москитная сетка: нет

Створка 2:
- тип: дверь
- ширина: 650
- высота: 2200 [окно:1400, дверь: 800]
- горизонтальное открытие: вправо
- вертикальное открытие: нет
- москитная сетка: нет
*/
