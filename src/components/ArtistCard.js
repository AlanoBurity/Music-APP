import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class ArtistCard extends React.Component {
  render() {
    const { collectionId, collectionName, artistName } = this.props;
    return (
      <section>
        <h1>{ artistName }</h1>
        <p>{ collectionName }</p>
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
};

export default ArtistCard;
