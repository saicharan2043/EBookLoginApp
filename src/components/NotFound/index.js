import './index.css'

const NotFound = () => (
  <div className="bg-color-notfound">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      className="img-notfound"
      alt="not found"
    />
    <h1 className="heading-not">Page Not Found</h1>
    <p className="description">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
