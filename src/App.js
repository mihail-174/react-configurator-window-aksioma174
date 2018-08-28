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

    frame__1__width: 100,
    frame__1__wind: true,
    frame__1__door: false,

    frame__2__width: 100,
    frame__2__wind: true,
    frame__2__door: false,

    frame__3__width: 100,
    frame__3__wind: false,
    frame__3__door: false,

    // frame__2: {
    //     width: 100,
    //     wind: true,
    //     door: false
    // },
    // frame__3: {
    //     width: 100,
    //     wind: false,
    //     door: false
    // },

    // frame_1__width: 650,
    // frame_1__height: 1400,
    // frame_2__width: 750,
    // frame_2__height: 1400,
    // frame_3__width: 850,
    // frame_3__height: 1400,

    // frame_1__window: true,
    // frame_2__window: true,
    // frame_3__window: false,

    // frame_1__door: false,
    // frame_2__door: false,
    // frame_3__door: false
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
    }
    setAppState(newState) {
      this.setState(newState);
    }

    // <div className='markup-height'>
    // </div>
    //
    // <div className='sf-t-w'>
    //     <input type='text' defaultValue={this.state.frame_1__width} />
    // </div>
    //
    //
    //
    //

    onChangeWidth(e) {
        // const {context} = this.props;
        this.setState({
            width: parseInt( e.currentTarget.value, 0 ),
            frame__1__width: e.currentTarget.value/this.state.winds,
            frame__2__width: e.currentTarget.value/this.state.winds,
            frame__3__width: e.currentTarget.value/this.state.winds
        });
        console.log( e.currentTarget.value/this.state.winds );

    }
    onChangeHeight(e) {
        const {context} = this.props;
        this.setState({
            height: parseInt( e.currentTarget.value, 0 )

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
                            <input type='text' onChange={this.onChangeHeight} defaultValue={this.state.height} />
                        </div>
                        <div>
                            <div className='t'>
                                <input type='text' defaultValue='1400' />
                            </div>
                            {
                                this.state.frame_1__door
                                ||
                                this.state.frame_2__door
                                ||
                                this.state.frame_3__door
                                ?
                                <div className='b'>
                                    <input type='text' defaultValue='800' />
                                </div>
                                :
                                ''
                            }
                        </div>
                    </div>

                        <div className='frames'>

                            <div className='markup-width'>


{(this.state.frame__1__wind?this.state.frame__1__width:0) + (this.state.frame__2__wind?this.state.frame__2__width:0) + (this.state.frame__3__wind?this.state.frame__3__width:0)}

                                <input type='text' onChange={this.onChangeWidth} defaultValue={
                                    (this.state.frame__1__wind?this.state.frame__1__width:0) +
                                    (this.state.frame__2__wind?this.state.frame__2__width:0) +
                                    (this.state.frame__3__wind?this.state.frame__3__width:0)
                                } />

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


                        {/*

                            { this.state.winds >= 3 && <Frame3 context={context} /> }


                        <div className='frames__frame window'>
                            <div className='frames__t'>
                                <AddTop context={context} />
                            </div>
                            <div className='frames__b'>
                                <AddBottom context={context} />
                            </div>
                        </div>
                        */}


                        {/*<div className='frames'>
                            <div className='frames__frame door'>
                                <div className='frames__t'>w__t</div>
                                <div className='frames__b'>w__b</div>
                            </div>
                            <div className='frames__frame window'>
                                <div className='frames__t'>w__t</div>
                                <div className='frames__b'>w__b</div>
                            </div>
                        </div>*/}

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
