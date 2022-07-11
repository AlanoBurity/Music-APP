import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      musicsList: [],
      favoriteMusicsList: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchSongList(id);
    this.favoriteMusics();
  }

    fetchSongList = async (id) => {
      const resultsMusic = await getMusics(id);
      this.setState({
        loading: false,
        musicsList: resultsMusic,
      });
    }

    favoriteMusics = async () => {
      const resultfavoriteMusics = await getFavoriteSongs();
      this.setState({
        favoriteMusicsList: resultfavoriteMusics,
      });
    }

    render() {
      const { musicsList, favoriteMusicsList, loading } = this.state;
      return (

        <div data-testid="page-album">
          <Header />
          {loading === true
            ? <Loading />
            : (
              <div className="album-container">
                <div className="album-info">
                  <h3 data-testid="album-name">{musicsList[0].collectionName}</h3>
                  <img src={ musicsList[0].artworkUrl100 } alt="artwork" />
                  <span data-testid="artist-name">{musicsList[0].artistName}</span>
                </div>
                <div className="tracks-info">
                  {musicsList.map((music, index) => (
                    index > 0 && <MusicCard
                      id={ music.trackId }
                      key={ music.trackId }
                      music={ music }
                      favoriteMusicsList={ favoriteMusicsList }
                      favoriteMusics={ this.favoriteMusics }
                    />
                  ))}
                </div>
              </div>
            )}
        </div>

      );
    }
}
Album.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Album;
