import React, { Component } from 'react';
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import AddTop from './components/AddTop';
import Modal from './components/Modal';
import './style/App.css';
const Context = React.createContext()

let initialState = {
    winds: 1,
    width: 1300,
    height: 1400,
    height_wind: 1400,
    height_door: 800,

    frame__1: true,
    frame__1__type: 'window',
    frame__1__width: 650,
    frame__1__open_horizontal: 'нет',
    frame__1__open_vertical: false,
    frame__1__mosquito: false,

    frame__2: true,
    frame__2__type: 'window',
    frame__2__width: 650,
    frame__2__open_horizontal: 'нет',
    frame__2__open_vertical: false,
    frame__2__mosquito: false,

    frame__3: false,
    frame__3__type: 'window',
    frame__3__width: 650,
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
        this.heightFrame = React.createRef();
        this.heightWind = React.createRef();
        this.widthWind = React.createRef();
    }
    setAppState(newState) {
      this.setState(newState);
    }
    onChangeWidth(e) {
        this.setState({
            width: parseInt( e.currentTarget.value, 0 )
            // frame__1__width: Math.ceil(e.currentTarget.value/this.state.winds),
            // frame__2__width: Math.ceil(e.currentTarget.value/this.state.winds),
            // frame__3__width: Math.ceil(e.currentTarget.value/this.state.winds)
        });
        if (  this.state.winds === 1 ) {
            this.setState({
                frame__1__width: parseInt( e.currentTarget.value, 0 )
            });
        }
        if (  this.state.winds === 2 ) {
            this.setState({
                frame__1__width: Math.ceil(e.currentTarget.value/this.state.winds),
                frame__2__width: Math.ceil(e.currentTarget.value/this.state.winds)
            });
        }
        if (  this.state.winds === 3 ) {
            this.setState({
                frame__1__width: Math.ceil(e.currentTarget.value/this.state.winds),
                frame__2__width: Math.ceil(e.currentTarget.value/this.state.winds),
                frame__3__width: Math.ceil(e.currentTarget.value/this.state.winds)
            });
        }
    }
    onChangeHeight(e) {
        // let heightWind = 0,
        //     heightDoor = 0;
        // heightWind = e.currentTarget.value * 63.63636363636363 / 100;
        // heightDoor = e.currentTarget.value * 36.36363636363637 / 100;

        if ( this.state.frame__1__type === 'window' && this.state.frame__2__type === 'window' && this.state.frame__2__type === 'window' ) {
            this.setState({
                height: parseInt( e.currentTarget.value, 0 ),
                height_wind: parseInt( e.currentTarget.value, 0 )
            });
        }
        if ( this.state.frame__1__type === 'door' || this.state.frame__2__type === 'door' || this.state.frame__2__type === 'door' ) {
            this.setState({
                height: parseInt( e.currentTarget.value,0 ),
                height_wind: Math.ceil( ( 63.63636363636364 * parseInt( e.currentTarget.value,0 ) ) / 100 ),
                height_door: Math.ceil( ( 36.36363636363636 * parseInt( e.currentTarget.value,0 ) ) / 100 )

                // height_door: parseInt( e.currentTarget.value, 0 ) - parseInt( this.state.height_wind, 0 )
                // height_wind: Math.ceil( (63.63636363636363 * this.state.height ) / 100)
            });
        }
    }
    onChangeHeightWind(e) {
        this.setState({
            height_wind: parseInt( e.currentTarget.value, 0 ),
            height_door: this.state.height - parseInt( e.currentTarget.value, 0 )
        });
    }
    onChangeHeightDoor(e) {
        this.setState({
            height_door: parseInt( e.currentTarget.value, 0 ),
            height_wind: this.state.height - parseInt( e.currentTarget.value, 0 )
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
                <div className="app__inner">
                    <div className="app__hd">
                        <h2 className='app__title'>Калькулятор окон</h2>
                    </div>
                    <div className="app__cont">

                        <div className='markup-height'>
                            <div className='l'>
                                <input ref={this.heightFrame} type='text' onChange={this.onChangeHeight} value={this.state.height} />
                            </div>
                            <div>
                                <div className='t'>
                                    <input ref={this.heightWind} type='text' onChange={this.onChangeHeightWind} value={this.state.height_wind} />
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
                                <input ref={this.widthWind} type='text' onChange={this.onChangeWidth} value={this.state.width} />
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

                </div>

                {
                    <pre>
                    {JSON.stringify(this.state, "", 4)}
                    </pre>
                }

                </div>
            )}</Context.Consumer>
            </Context.Provider>
        );
    }

    componentDidMount() {
        if ( this.state.frame__1__type==='window' && this.state.frame__2__type==='window' && this.state.frame__3__type==='window' ) {
            this.heightWind.current.setAttribute('disabled', 'disabled');
        }
        this.setState({
            ...initialState,
            data: this.props.data
        });
        if ( this.state.winds === 1 ) {
            this.setState({
                frame__1__width: this.state.width
            });
        }
    }

}

export default App;
