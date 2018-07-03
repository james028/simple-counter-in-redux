import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
  render() {
    return (
      <div>
        <input 
        value={this.props.getValue}
        onChange={this.props.onChangeValue}        
        />
        <div>{this.props.getValue}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        getValue: state.inpValue
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onChangeValue: (e) => {
            dispatch({type: 'GET_VALUE', text: e.target.value});
        }
    }
}

//export default Input;
export default connect(mapStateToProps, mapDispatchToProps)(Input);
