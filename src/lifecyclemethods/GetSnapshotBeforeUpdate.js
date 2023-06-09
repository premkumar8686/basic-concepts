import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdate extends Component {


    state = {
        Name: 'Previous Name',
    }

    updateState = () => {
        this.setState({
            Name: 'Updated Name',
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log(prevState.Name);
        return prevState.Name;
    }

    componentDidUpdate()
    {
        console.log(this.state.Name);
    }

  render() {
    return (
      <>
        <h1>{this.state.Name}</h1>
        <button className='btn btn-success' onClick={this.updateState}>Update State</button>
      </>
    )
  }
}

