import React from 'react';
import Header from '../components/Header';
import ResultadoBusca from '../components/ResultadoBusca';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artist: '',
      buttonDisabled: true,
      procuraArtista: '',
      loading: false,
    };
  }

  handleButton = () => {
    const { artist } = this.state;
    const minCaracteres = 2;
    this.setState({
      buttonDisabled: artist.length < minCaracteres,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      artist: value,
    }, this.handleButton);
  }

  handleClick = () => {
    const { artist } = this.state;
    this.setState({
      loading: true,
      procuraArtista: artist,
      artist: '',
      buttonDisabled: true,
    },
    async () => {
      this.setState({
        listOfReturnedAlbums: await searchAlbumsAPI(artist),
        loading: false,
      });
    });
  };

  render() {
    const { artist, buttonDisabled, procuraArtista, loading,
      listOfReturnedAlbums } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            data-testid="search-artist-input"
            /*  id="artist" */
            name="artist"
            type="text"
            placeholder="Nome do Artista"
            value={ artist }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            onClick={ this.handleClick }
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
          {loading ? (
            <Loading />
          ) : (
            procuraArtista && (
              <div>
                <p>
                  Resultado de álbuns de:
                  {' '}
                  {procuraArtista}
                </p>
                <ResultadoBusca listOfReturnedAlbums={ listOfReturnedAlbums } />
              </div>
            )
          )}
        </form>
      </div>
    );
  }
}

export default Search;
