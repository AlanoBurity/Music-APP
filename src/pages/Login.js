import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      Logins: true,
      loading: false,
    };
  }

  handleClick = () => {
    const { user } = this.state;
    this.setState({
      Logins: false,
      loading: true,
    }, async () => {
      await createUser({ name: user });
      this.setState({
        loading: false,
      });
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  isBttnDisabled = () => {
    if (this.testeInput()) {
      return true;
    }
    return false;
  }

  testeInput = () => {
    const number = 3;
    const { user } = this.state;
    if (user.length >= number) {
      return false;
    }
    return true;
  }

  render() {
    const { user, loading, Logins } = this.state;
    const telaLoading = <Loading />;
    const forms = (
      <div data-testid="page-login">
        <form className="form">
          <input
            type="text"
            data-testid="login-name-input"
            name="user"
            value={ user }
            onChange={ this.handleChange }
          />
          <br />
          <button
            type="submit"
            name="bttn"
            data-testid="login-submit-button"
            onClick={ this.handleClick }
            disabled={ this.isBttnDisabled() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
    if (Logins) return forms;
    return loading ? telaLoading : <Redirect to="/search" />;
  }
}

export default Login;
