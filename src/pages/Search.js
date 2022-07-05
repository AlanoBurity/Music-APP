import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  testeArtist = () => {
    const number = 2;
    const { artist } = this.state;
    if (artist.length >= number) {
      return false;
    }
    return true;
  }

  bttnDisabled = () => {
    if (this.testeArtist()) {
      return true;
    }
    return false;
  }

  render() {
    const { artist } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <form>
            <input
              data-testid="search-artist-input"
              type="text"
              name="artist"
              value={ artist }
              onChange={ this.handleChange }
              placeholder="Nome do Artista"
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ this.bttnDisabled() }
            >
              Pesquisar
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
