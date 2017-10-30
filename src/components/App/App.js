import React, { Component } from 'react';
import Person from '../Person';
import Results from '../Results';

import users from '../../users.json';
import venues from '../../venues.json';

import {
  getVenuesInfo,
  getUsersData,
  getVenuesData,
} from '../../utils'

import './App.css';

class App extends Component {
  state = {
    users: getUsersData(users),
    venues: getVenuesData(venues),
    findResults: null,
  };

  onFindClick = () => {
    const {
      venues,
      users,
    } = this.state;

    this.setState({
      findResults: getVenuesInfo(venues, users.filter(u => u.active))
    });
  };

  onUserSelect = (user) => {
    const { users, findResults } = this.state;
    const index = users.indexOf(user);
    this.setState({
      users: [
        ...users.slice(0, index),
        {...user, active: !user.active},
        ...users.slice(index + 1),
      ],
      findResults: null,
    });
  };

  isActive = (user) => this.state

  renderUsers = () => this.state.users.map((u, i) => (
    <Person
      key={u.name + i}
      data={u}
      onClick={() => this.onUserSelect(u)}
      isActive={() => this.isActive(u)}
    />
  ));

  render() {
    const {
      users,
      findResults,
    } = this.state;
    const activeUsers = users.filter(u => u.active);
    const isActive = Boolean(activeUsers.length);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Who will go?</h1>
        </header>

        <div className="content">
          <div className="persons-list">
            {this.renderUsers(users)}
          </div>

          <button
            className={`find-button ${!isActive ? 'find-button_disabled' : ''}`}
            disabled={!isActive}
            onClick={this.onFindClick}
          >
            Find venues
          </button>

          <Results data={findResults} usersNumber={activeUsers.length} />
        </div>
      </div>
    );
  }
}

export default App;
