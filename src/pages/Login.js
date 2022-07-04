import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            value={ user }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  user: PropTypes.string.isRequired,
};
export default Login;
