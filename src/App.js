import React, { Component } from 'react';
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import AddTop from './components/AddTop';
import './style/App.css';
const Context = React.createContext()

let initialState = {
    winds: 1,
    frame_1__width: 650,
    frame_2__width: 650,
    frame_3__width: 650,
    frame_1__window: true,
    frame_2__window: false,
    frame_3__window: false,
    frame_1__door: false,
    frame_2__door: false,
    frame_3__door: false,
    width: 650,
    height: 1400
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.setAppState = this.setAppState.bind(this);
    }
    setAppState(newState) {
      this.setState(newState);
    }
    render() {
        return (
           <Context.Provider value={{ state: this.state, methods: {setAppState: (value) => this.setState(value)}}}>
            <Context.Consumer>{context => (
                <div>
                    <div className="App">

                        <div className='size-top'>
                            <div className='width-main'>
                                <input type='text' defaultValue={this.state.width} />
                            </div>
                            <div className='width-frames'>
                                <div className='width-frame'>
                                    <input type='text' defaultValue={this.state.frame_1__width} />
                                </div>
                                <div className='width-frame'>
                                    <input type='text' defaultValue={this.state.frame_1__width} />
                                </div>
                            </div>
                        </div>

                        <div className='size-left'>
                            <div className='width-main'>
                                <input type='text' defaultValue={this.state.height} />
                            </div>
                            <div className='width-frames'>
                                <div className='width-frame'>
                                    <input type='text' defaultValue='1400' />
                                </div>
                                <div className='width-frame'>
                                    <input type='text' defaultValue='800' />
                                </div>
                            </div>
                        </div>

                        <div className='frames'>

                            { this.state.winds > 0 && <Frame1 num={1} context={context} /> }
                            { this.state.winds > 1 && <Frame2 num={2} context={context} /> }
                            { this.state.winds > 2 && <Frame3 num={3} context={context} /> }

                            { context.state.winds < 3 &&
                                <div className='action'>
                                    <div className='action__top'>
                                        <AddTop num={this.state.winds+1} context={context} />
                                    </div>
                                </div>
                            }


                        </div>



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
