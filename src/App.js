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

const monthsName = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
    'outubro', 'novembro', 'dezembro'];

const Item = ({currentMonth, month}) => {
  const payer = payers[months[month]];

  return (
      <div className={month === currentMonth ? 'App-item-current' : 'App-item'}>
          {payer.name} - {monthsName[month]}
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
            <h1>Quem paga o Spotify esse mês?</h1>
          <img src={this.state.payer.avatar} className="App-logo" alt="logo" />
          <p>
            Lista de pagantes do ano
              {months.map((payerId, month) =>
                  <Item
                      currentMonth={this.state.month}
                      month={month}
                      key={month}
                  />
              )}
          </p>
        </header>

      </div>
    );
  }
}

export default App;
