import React, { Component } from 'react'

export default class ComponentDidMount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users: [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
              },
              {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
              }
         ]
      }
        // Dom Manipulation Not work here because DOM 
        //   const h1 = document.querySelector("h1");
        //   h1.style.backgroundColor = "red";
    }

    getUsers = async() =>
    {
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const finalData = await users.json();
        
        this.setState({
           users: [...this.state.users,...finalData]
        })
    }

    componentDidMount(){
        this.getUsers();
        // Dom Manipulation Section start
        const h1 = document.querySelector("h1");
        h1.style.backgroundColor = "red";
        h1.style.color = "white";
        // Dom Manipulation Section End
    }
    
  render() {
    return (
      <>
      <div className='container'>
        <h1 className='text-center'>Users List</h1>

        <table className='table table-striped'>
          <thead>
             <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Mail</th>
             </tr>
          </thead>

          <tbody>
            {this.state.users.map((ele, keys) => {
                return(
                    <tr key={keys}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>
                    </tr>
                )
            })}
          </tbody>

        </table>
      </div>
      </>
    )
  }
}
