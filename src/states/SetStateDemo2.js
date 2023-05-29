import React, { Component } from 'react';
import shoes from '../images/fashion-shoes-sneakers.jpg';


export default class SetStateDemo2 extends Component {

    state = {
        count: 1,
        amount: 100,
      };
    
      increment = () => {

        // this.setState({
        //   count: this.state.count + 1,
        // },()=> this.setState({amount: 100 * this.state.count}));
      
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }),()=> this.setState({amount: 100 * this.state.count}) );

        
      };

      incrementFive = () => {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
      }

      

  render() {
    return (
      <>
         {console.log("UI Rendering " + this.state.count)}
        

        <img src={shoes} alt="Dummy" style={{width: '150px'}} />
        <h1>Number of Products: {this.state.count}</h1>
        <h1>Number of Products: {this.state.amount}</h1>
        <button className="btn btn-success text-white" onClick={this.incrementFive}>
          Add 5 
        </button>
      </>
    )
  }
}
