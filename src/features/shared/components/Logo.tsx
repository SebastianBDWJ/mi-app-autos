import "../../../styles/layout/logo.css"

const Logo = () => {
  return (
    <div className="logo">
      <span className="logo__mark" aria-hidden="true">S</span>
      <span className="logo__wordmark">
        <span className="logo__name">Sebastian</span>
        <small className="logo__descriptor">Motors</small>
      </span>
    </div>
  )
}

export default Logo