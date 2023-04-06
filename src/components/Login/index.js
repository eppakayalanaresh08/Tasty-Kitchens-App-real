import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: false,
    errorMsg: '',
  }

  renderSuccess = JwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JwtToken, {expires: 30})
    history.push('/')
  }

  failureRender = errorMsg => {
    this.setState({errorMsg, error: true})
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const updateUser = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(updateUser),
    }
    const fetchData = await fetch(url, options)
    const data = await fetchData.json()

    if (fetchData.ok === true) {
      this.renderSuccess(data.jwt_token)
    } else {
      console.log(data)
      this.failureRender(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderForm = () => {
    const {username, password, errorMsg, error} = this.state

    return (
      <form onSubmit={this.onClickSubmit} className="container-form">
        <img
          src="https://res.cloudinary.com/dgcprz6er/image/upload/v1680791578/Vector1x_rbwn4d.jpg"
          alt="website logo"
          className="website-logo"
        />
        <p className="kitchens-tasty">Tasty Kitchens</p>
        <h1 className="login-heading">Login</h1>
        <div className="container-userName">
          <label htmlFor="USERNAME" className="user-label">
            USERNAME
          </label>
          <input
            type="text"
            id="USERNAME"
            value={username}
            onChange={this.onChangeUserName}
            className="input-Element"
          />
        </div>
        <div className="container-password">
          <label htmlFor="PASSWORD" className="user-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="PASSWORD"
            value={password}
            onChange={this.onChangePassword}
            className="input-Element"
          />
        </div>
        <button type="submit" className="button-login">
          Login
        </button>
        {error && <p className="msg-error">{errorMsg}</p>}
      </form>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="from-card-container">{this.renderForm()}</div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dgcprz6er/image/upload/v1680789716/naresh/Rectangle_14561x_z7un9y.png"
            alt="website login"
          />
        </div>
      </div>
    )
  }
}

export default Login
