import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const clickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const JwtToken = Cookies.get('jwt_token')
  if (JwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <div className="bg-color-home">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          className="log"
          alt="website logo"
        />
        <button className="logout-btn" type="button" onClick={clickLogout}>
          Logout
        </button>
      </div>
      <h1 className="heading-home">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        className="card-img"
        alt="digital card"
      />
    </div>
  )
}

export default Home
