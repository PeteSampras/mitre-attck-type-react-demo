import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state={
      monsters:[],
      searchField:''
    };
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/enterprise-attack.json')
    .then(res=>res.json())
    .then(users=>this.setState({monsters: users.objects}))
  };

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters=monsters.filter(monster => monster.name && 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>MITRE ATT&CK Types</h1>
        <SearchBox 
          placeholder='search types'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>        
        </CardList>
      </div>
    );
  };
}

export default App;
