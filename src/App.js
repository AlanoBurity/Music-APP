import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Route path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
