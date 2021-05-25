import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/cardComponents";

class  App  extends Component{

  constructor(){
      super();
      this.state = {
        monsters:[],
        searchField:''
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
                <input type="search"
                       placeholder="Search for monsters"
                       onChange={event => {
                           this.setState({searchField:event.target.value},()=>{
                               console.log(this.state)
                           });
                       }}/>
                <CardList monsters={this.state.monsters}/>
            </div>
        );
    }
}

export default App;
