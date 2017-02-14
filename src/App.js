import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { parse as parseUrl } from 'url'

class App extends Component {
  render() {
    debugger // @TODO why is `parseUrl` not in the debugger scope?
    // the runtime has it as something _else_, like _url.parse, so you
    // cannot do `parseUrl` in the console
    var parsed = parseUrl(window.location.href)
    return (
      <div className="App">
        <h1>Parsed window.location.href</h1>
        <pre>
          {JSON.stringify(parsed, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
