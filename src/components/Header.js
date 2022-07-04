import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    }, async () => {
      const getUserName = await getUser();
      this.setState({
        user: getUserName.name,
        loading: false,
      });
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          <h2>TRYBETUNES</h2>
          {loading ? <Loading /> : <p data-testid="header-user-name">{ user }</p> }
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
