import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {userId: '', pin: '', errMsg: ''}

  postUserLoginData = async () => {
    const {userId, pin} = this.state
    const userDetails = {
      user_id: userId,
      pin,
    }

    const url = 'https://apis.ccbp.in/ebank/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  changePassword = event => {
    this.setState({pin: event.target.value})
  }

  changeUserId = event => {
    this.setState({userId: event.target.value})
  }

  clickLogin = event => {
    event.preventDefault()
    this.postUserLoginData()
  }

  render() {
    const {errMsg} = this.state
    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-color">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            className="img-login"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.clickLogin}>
            <h1 className="heading">Welcome Back!</h1>
            <label className="label" htmlFor="userId">
              User ID
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter User ID"
              id="userId"
              onChange={this.changeUserId}
            />
            <label className="label" htmlFor="pin">
              PIN
            </label>
            <input
              type="password"
              className="input"
              placeholder="Enter PIN"
              id="pin"
              onChange={this.changePassword}
            />
            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="error-msg">{errMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
