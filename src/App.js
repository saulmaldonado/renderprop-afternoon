import React, { Component } from 'react';
import './App.css';
import CurrencyConverter  from './CurrencyConverter'
import CurrencyDisplay from './CurrencyDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <CurrencyConverter render={(currencyData, amount) => <CurrencyDisplay currencyData={currencyData} amount={amount} /> } />

      </div>
    );
  }
}

export default App;
