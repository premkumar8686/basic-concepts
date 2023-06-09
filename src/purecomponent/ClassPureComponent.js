import React from 'react'
import { PureComponent } from 'react'

export default class ClassPureComponent extends PureComponent {
    
    state = {
      name: 'Prem',
    }

    update = () => {
        this.setState({
            name: 'Prem',
        })
    }

  render() {
    console.log('Render 1...')
    return (
      <>
        {console.log('Render...')}
        <h1>{this.state.name}</h1>
        <button onClick={this.update}>Update</button>
      </>
    )
  }
}

