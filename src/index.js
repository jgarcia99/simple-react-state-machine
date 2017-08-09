import "babel-polyfill"
import React, { Component } from 'react'
import ReactDom from 'react-dom'

require('./style.css')

class StateMachine extends Component {
    constructor(props)  {
        super(props);
        this.state = { input: '', rows: [], old:'', myValue: ''};
        this.handleChange = this.handleChange.bind(this);
    };
    
    transition() {
        if (this.state.input === '-1') {
            var oldState = this.state;
            var valuesArray = [];
            oldState.rows.push();
            this.setState(oldState) 
        } else if( (this.state.input >= 0) && (this.state.input <= 2) ) {
            var nextState = this.state;
            this.state.myValue = this.refs.myInput.value;
            nextState.rows.push(this.state.old);
            this.setState(nextState);
        }  else {
            alert('Must be the numbers 0, 1, or 2');
            return false;
        }        
    }

    componentDidUpdate(prevState, prevProps) {
        console.log(prevState);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
        console.log(`input value ${event.target.value}`);
    }
    
    render() {
        return (
            <div>
                 <h1>React State Machine.</h1>
                 <p>Enter a value (0, 1, or 2) to transition to the next state, and display the current state of the object. Enter -1 to exit the state machine.</p>

                 <input type="text" ref="myInput" value={this.state.input} onChange={this.handleChange} />
                 <table>
                    <tbody>                                       
                        <tr>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        {this.state.rows.map( (row,index) => 
                            
                            <tr key={index}>
                                <td>Old State:{this.state.myValue}</td>
                                <td>2</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>)
                        }                       
                    </tbody>
                 </table>

                <button onClick={() => this.transition()}>
                    Go to next state
                </button>
            </div>
        );
    }
}

const content = document.getElementById('app')
ReactDom.render(<StateMachine />, content)