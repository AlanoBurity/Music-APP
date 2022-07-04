import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header datatestid="header-component">
        <div>
          <h2>TRYBETUNES</h2>
        </div>
        <nav>
          <Link to="/search" data-testid="link-to-search">Músicas</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
