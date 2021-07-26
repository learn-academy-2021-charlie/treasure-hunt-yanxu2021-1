import React, { Component } from 'react'

class Square extends Component{

  handleClick = () =>{
    this.props.handleGame(this.props.index)
  }

  render(){
    return(
      <>
      <div id = "square" onClick ={this.handleClick}>
        {this.props.value}
      </div>
      </>
    )
  }
}
export default Square
