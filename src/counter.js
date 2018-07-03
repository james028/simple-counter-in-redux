import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Counter !</h2>
        <div>Count: {this.props.counter}</div>
        <button onClick={this.props.clickToIncrement}>Increment</button>
        <button onClick={this.props.clickToDecrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        counter: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickToIncrement: () => {
            const action = {type: 'INCREMENT'};
            dispatch(action);
        },
        clickToDecrement: () => {
            const action = {type: 'DECREMENT'};
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
