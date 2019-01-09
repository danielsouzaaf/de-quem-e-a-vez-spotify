import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const payers = {
  'dsa': { name: 'Daniel'},
  'mvb': { name: 'Barcos'},
  'aks': { name: 'Karol'},
  'lfm': { name: 'Luís'},
  'meg': { name: 'Duda'},
  'mlm': { name: 'Mari'}
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              <h1>{this.state.payer.name}</h1>
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
