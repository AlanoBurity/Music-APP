import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import MusicCard from './components/MusicCard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main className="main">
          <section className="login">
            <Route path="/" component={ Login } />
            <Route path="/Search" component={ Search } />
            <Route path="/Album/:id" render={ (props) => <Album { ...props } /> } />
            <Route path="/Favorites" component={ Favorites } />
            <Route path="/Profile" component={ Profile } exact />
            <Route path="/Profile/Edit" component={ ProfileEdit } />
            <Route path="/MusicCard" component={ MusicCard } />
            <Route path="*" component={ NotFound } />
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
