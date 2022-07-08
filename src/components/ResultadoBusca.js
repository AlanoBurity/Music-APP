import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from './ArtistCard';

class ResultadoBusca extends React.Component {
  render() {
    const { listOfReturnedAlbums } = this.props;
    if (listOfReturnedAlbums.length === 0) {
      return (<h1>Nenhum álbum foi encontrado</h1>);
    }
    return (
      <div>
        { listOfReturnedAlbums.map((album, index) => (
          <ArtistCard
            key={ index }
            artitsName={ album.artitsName }
            collectionName={ album.collectionName }
            collectionId={ album.collectionId }
          />
        ))}
      </div>
    );
  }
}

ResultadoBusca.propTypes = {
  listOfReturnedAlbums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultadoBusca;
