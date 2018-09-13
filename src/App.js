import React, { Component } from 'react';
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import AddTop from './components/AddTop';
import './style/App.css';
const Context = React.createContext()

let initialState = {
    winds: 2,
    width: 1300,
    height: 1400,
    height_wind: 1400,
    height_door: 800,

    frame__1__width: 650,
    frame__1__wind: true,
    frame__1__door: false,
    frame__1__open_horizontal: 0,
    frame__1__open_vertical: false,
    frame__1__mosquito: false,

    frame__2__width: 650,
    frame__2__wind: true,
    frame__2__door: false,
    frame__2__open_horizontal: 0,
    frame__2__open_vertical: false,
    frame__2__mosquito: false,

    frame__3__width: 650,
    frame__3__wind: false,
    frame__3__door: false,
    frame__3__open_horizontal: 0,
    frame__3__open_vertical: false,
    frame__3__mosquito: false
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
        // const {context} = this.props;

        // let persentWind = 0,
        //     persentDoor = 0;
        // persentWind = this.state.height_wind * 100 / e.currentTarget.value;
        // persentDoor = this.state.height_door * 100 / e.currentTarget.value;

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
        // const {context} = this.props;
        let heightDoor = 0;
        if ( this.state.frame__1__door || this.state.frame__2__door || this.state.frame__3__door ) {
            heightDoor = this.state.height_door;
        }
        this.setState({
            height: parseInt( e.currentTarget.value, 0 ) + heightDoor,
            height_wind: parseInt( e.currentTarget.value, 0 )
        });
    }
    onChangeHeightDoor(e) {
        // const {context} = this.props;
        this.setState({
            height: this.state.height_wind + parseInt( e.currentTarget.value, 0 ),
            height_door: parseInt( e.currentTarget.value, 0 )
        });
    }

    render() {
        return (
           <Context.Provider value={{ state: this.state, methods: {setAppState: (value) => this.setState(value)}}}>
            <Context.Consumer>{context => (
                <div>
                    <div className="App">

                        <div className='markup-height'>
                            <div className='l'>
                                <input type='text' onChange={this.onChangeHeight} value={this.state.height} />
                            </div>
                            <div>
                                <div className='t'>
                                    <input type='text' onChange={this.onChangeHeightWind} value={this.state.height_wind} />
                                </div>
                                {
                                    this.state.frame__1__door
                                    ||
                                    this.state.frame__2__door
                                    ||
                                    this.state.frame__3__door
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

                        <div className='result'>
                            Общая ширина: {this.state.width} <br/>
                            Общая высота: {this.state.height} <br/>
                            Высота окна: {this.state.height_wind} <br/>
                            Высота двери: {this.state.height_door} <br/><br/>

                            Первая створка: <br/>
                            — Ширина створки: {this.state.frame__1__wind?this.state.frame__1__width:'нет'}<br/>
                            — Дверь: {this.state.frame__1__door?'да':'нет'} <br/>
                            — Горизонтальное открытие:
                                                    {this.state.frame__1__open_horizontal===0 && 'нет'}
                                                    {this.state.frame__1__open_horizontal===1 && 'вправо'}
                                                    {this.state.frame__1__open_horizontal===2 && 'влево'} <br/>
                            — Вертикальное открытие: {this.state.frame__1__open_vertical?'да':'нет'} <br/>
                            — Москитная сетка: {this.state.frame__1__mosquito?'да':'нет'} <br/>
                            <br/><br/>

                            Вторая створка: <br/>
                            — Ширина створки: {this.state.frame__2__wind?this.state.frame__2__width:'нет'}<br/>
                            — Дверь: {this.state.frame__2__door?'да':'нет'} <br/>
                            — Горизонтальное открытие:
                                                    {this.state.frame__2__open_horizontal===0 && 'нет'}
                                                    {this.state.frame__2__open_horizontal===1 && 'вправо'}
                                                    {this.state.frame__2__open_horizontal===2 && 'влево'} <br/>
                            — Вертикальное открытие: {this.state.frame__2__open_vertical?'да':'нет'} <br/>
                            — Москитная сетка: {this.state.frame__2__mosquito?'да':'нет'} <br/>
                            <br/><br/>

                            Третья створка: <br/>
                            — Ширина створки: {this.state.frame__3__wind?this.state.frame__3__width:'нет'}<br/>
                            — Дверь: {this.state.frame__3__door?'да':'нет'} <br/>
                            — Горизонтальное открытие:
                                                    {this.state.frame__3__open_horizontal===0 && 'нет'}
                                                    {this.state.frame__3__open_horizontal===1 && 'вправо'}
                                                    {this.state.frame__3__open_horizontal===2 && 'влево'} <br/>
                            — Вертикальное открытие: {this.state.frame__3__open_vertical?'да':'нет'} <br/>
                            — Москитная сетка: {this.state.frame__3__mosquito?'да':'нет'}
                        </div>

                    </div>
                    <pre>
                        {JSON.stringify(this.state, "", 4)}
                    </pre>

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
