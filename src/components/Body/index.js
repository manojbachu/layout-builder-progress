// Write your code here

const Body = () => {
  const renderNavbarLeftMenu = () => (
    <div className="navbar-left-menu">
      <p className="sub-heading">Left Navbar Menu</p>
      <p className="text">Item 1</p>
      <p className="text">Item 2</p>
      <p className="text">Item 3</p>
    </div>
  )

  return <div className="body">{renderNavbarLeftMenu()}</div>
}

export default Body
