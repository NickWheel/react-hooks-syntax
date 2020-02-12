import React, { PureComponent } from 'react';

export default class index extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      myInput: {
        a: ''
      }
    }
    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler(event){
    this.setState({
      myInput:{
        a: event.target.value
      }
    });
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // By this lifecicle method you can turn off updates of your state
  //   if(Number(nextState.myInput) > 10) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    console.log(this.state.myInput.a)
    return (
      <>
        <input type="text" onChange={this.inputHandler} />
        <h1>{this.state.myInput.a}</h1>

      </>
    )
  }
}
