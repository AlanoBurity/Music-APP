import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Route path="/" component={ Login } />
        <Route path="/Search" component={ Search } />
        <Route path="/Album/:id" render={ (props) => <Album { ...props } /> } />
        <Route path="/Favorites" component={ Favorites } />
        <Route path="/Profile" component={ Profile } />
        <Route path="/Profile/Edit" component={ Edit } />
        <Route path="*" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
