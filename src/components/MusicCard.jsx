import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  handleCheck = (trackId) => {
    const { favoriteMusicsList } = this.props;
    if (favoriteMusicsList.length > 0) {
      return favoriteMusicsList
        .some((music) => music.trackId === trackId);
    }
    return false;
  }

    handleClick = async ({ target }) => {
      const { music, favoriteMusics } = this.props;
      const isChecked = target.checked;
      this.setState({ loading: true });
      if (isChecked === false) {
        await removeSong(music);
      } else {
        await addSong(music);
      }
      await favoriteMusics();
      this.setState({ loading: false });
    }

    render() {
      const { loading } = this.state;
      const { music } = this.props;
      const { previewUrl, trackName, trackId } = music;

      return (
        <div className="track-container">
          {loading === true
            ? <Loading />
            : (
              <>
                <h1>{trackName}</h1>
                <audio data-testid="audio-component" src={ previewUrl } controls>
                  <track kind="captions" />
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <label htmlFor={ `favorite-checkbox-${trackId}` }>
                  {' '}
                  Favorita
                  <input
                    type="checkbox"
                    id={ `favorite-checkbox-${trackId}` }
                    data-testid={ `checkbox-music-${trackId}` }
                    onChange={ this.handleClick }
                    checked={ this.handleCheck(trackId) }
                  />
                </label>
              </>
            )}
        </div>
      );
    }
}

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.any),
  favoriteSongsList: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default MusicCard;
