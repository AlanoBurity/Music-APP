import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Route path="/" component={ Home } />
        <Route path="/Search" component={ Search } />
        <Route path="/Album/:id" render={ (props) => <Album { ...props } /> } />
        <Route path="/Favorites" component={ Favorites } />
      </BrowserRouter>
    );
  }
}

export default App;
