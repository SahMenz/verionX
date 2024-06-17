import logo from '../../assets/images/logo.svg'

function Navigation() {
  return (
    <div className="d-flex">
        <img src={logo} alt="" />
        <div>
          <div>
            <a href="#" className='small-txt lh-19 fw-600 text-decoration-none'>Home</a>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Navigation