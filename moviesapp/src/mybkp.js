import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table style = {{
            backgroundColor:'#000',
            display:'block',
            color:'#fff'
        }}>
          <tbody>
              <tr>
                  <td><img src={logo} className="App-logo" alt="logo" width="50"/></td>
                  <td><h2>MoviesDB Search</h2></td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
