import React, { Component } from 'react'

export default class Demo1 extends Component {

  myTime = new Date().toLocaleTimeString();
 
  constructor(props) {
    super(props)
  
    this.state = {
        currentTime: this.myTime,
    }
  }
  

  callTime = () => {

    this.updatedTime = new Date().toLocaleTimeString();

    console.log(this.updatedTime);
    console.log('====================================');

    this.setState({
        currentTime: this.updatedTime
    })
  }

  componentDidMount() {
   this.t = setInterval(this.callTime, 1000);
  }

  componentWillUnmount()
  {
     clearInterval(this.t);
  }

  render() {

    return (
      <>
        <center>
         <h1>{this.state.currentTime}</h1>
        </center>
      </>
    )
  }
}
