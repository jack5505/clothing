import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/cardComponents";
import {SearchBox} from "./components/search-box/SearchBoxComponent";

class  App  extends Component{
    /**
     * Our app component and the method in which we can do it is to define it in our constructor because our
     constructor is the code that runs first before anything gets called.
     */
  constructor(){
      super();
      this.state = {
        monsters:[],
        searchField:''
      }

      /**
       * The reason for this is because JavaScript by default, doesn't set its scope of this on functions.
       * @type {any}
       */
      this.handleChange = this.handleChange.bind(this)
  }


    componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users=> this.setState({monsters:users}))
    }

    handleChange(e){
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters,searchField} = this.state;
        const  filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        // const email = monsters.filter(monster => monster.email.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
