import './App.css';
import { Component } from 'react';
import 'tachyons';
import CardList from '../components/CardList';

// main app class which is the first one to be build and rendered
class App extends Component {

  // this allows us to set state so that state fields can be set or updated dynamically
  constructor(){
    super();
    this.state = {
      "robots": [],
      "searchField" : ""
    }
  }

  // runs when app is rendered
  componentDidMount(){
    // fetch robots info using api endpoint then update the robots state
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}))
  }

  searchOnChange(){

  }

  // renders the main app
  render(){
    return (
      <div>
        <h1>RoboFriends</h1>
          <SeachField searchField={searchOnChange}/>
        <CardList robots={this.state.robots}/>
      </div>
    );
  }
}

export default App;
