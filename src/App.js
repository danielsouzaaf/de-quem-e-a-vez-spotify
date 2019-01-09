import React, { Component } from 'react';
import './App.css';

import DsaAvatar from './avatars/dsa.jpg';
import MvbAvatar from './avatars/mvb.jpg';
import AksAvatar from './avatars/aks.jpg';
import LfmAvatar from './avatars/lfm.jpg';
import MegAvatar from './avatars/meg.jpg';
import MlmAvatar from './avatars/mlm.jpg';


const payers = {
  'dsa': { name: 'Daniel', avatar: DsaAvatar},
  'mvb': { name: 'Barcos', avatar: MvbAvatar},
  'aks': { name: 'Karol', avatar: AksAvatar},
  'lfm': { name: 'Luís', avatar: LfmAvatar},
  'meg': { name: 'Duda', avatar: MegAvatar},
  'mlm': { name: 'Mari', avatar: MlmAvatar}
};

const months = ['dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm', 'dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm'];

const Item = ({currentMonth, month}) => {
  const payer = payers[months[month]];

  return (
      <div className={month === currentMonth ? 'App-item-current' : 'App-item'}>
          {payer.name}
      </div>
  );
};

const currentDate = new Date();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        month: currentDate.getMonth(),
        payer: payers[months[currentDate.getMonth()]]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.payer.avatar} className="App-logo" alt="logo" />
          <p>
              <h1>{this.state.payer.name} - {currentDate.toLocaleString('pt-BR', {month: 'long'} )}</h1>
            A <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          {months.map((payerId, month) =>
            <Item
                currentMonth={this.state.month}
                month={month}
                key={month}
              />
          )}
      </div>
    );
  }
}

export default App;
