import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class ArtistCard extends React.Component {
  render() {
    const { collectionId, collectionName, artistName, artworkUrl100 } = this.props;
    return (
      <section>
        <h1>{ artistName }</h1>
        <p>{ collectionName }</p>
        <img src={ artworkUrl100 } alt={ artistName } />
        <NavLink
          data-testid={ `link-to-album-${collectionId}` }
          to={ `album/${collectionId}` }
        >
          {collectionId}
        </NavLink>
      </section>
    );
  }
}
ArtistCard.propTypes = {
  collectionId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
};

export default ArtistCard;
