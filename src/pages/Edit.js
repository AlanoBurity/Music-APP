import React from 'react';
import Header from '../components/Header';

class Edit extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          <h1>edit</h1>
        </div>
      </>
    );
  }
}

export default Edit;
