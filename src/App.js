import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/cardComponents";

class  App  extends Component{

  constructor(){
      super();
      this.state = {
        monsters:[]
      }
  }


    componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users=> this.setState({monsters:users}))

  }

    render() {

        return (
            <div className="App">
                <CardList name="Jack1">
                {
                  this.state.monsters.map(i => <h1 key={i.id}>{i.name}</h1>)
                }
                </CardList>
            </div>
        );
    }
}

export default App;
