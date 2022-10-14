import './App.css';
import { Component } from 'react';
import 'tachyons';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

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

  // search field string
  onSearchChange = (event) => {
    this.setState({searchField:event.target.value});
  }

  // renders the main app
  render(){
    const {robots,searchField} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    }) 
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
