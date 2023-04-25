import List from "./List";
import Button from "./Button";

const NavWithModal = () => {
  const [modal, setModal] = React.useState(false);
  const routes = ['Home', 'About Us', 'Contact', 'Blog', 'Careers']; 

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  }

  const Logo = () => (
    <ReactBootstrap.Navbar.Brand><ReactBootstrap.Image className='logo' alt='logo' src='./src/images/logo.svg' /></ReactBootstrap.Navbar.Brand>
  );

  return (
    <header className='header'>
      <ReactBootstrap.Nav className='d-block d-sm-none'>
        {!modal &&
          <ReactBootstrap.Nav.Item className='d-flex justify-content-between align-items-center p-3'>
            <Logo />
            <ReactBootstrap.Image className='icon' alt='hamburger icon' src='./src/images/icon-hamburger.svg' onClick={toggleModal} />
          </ReactBootstrap.Nav.Item>
        }
        {modal && 
          <div className='mod'>
            <ReactBootstrap.Modal.Dialog>
              <ReactBootstrap.Modal.Header className='d-flex justify-content-between align-items-center p-3'>
                <ReactBootstrap.Modal.Title><Logo /></ReactBootstrap.Modal.Title>
                <ReactBootstrap.Image className='icon' alt='close icon' src='./src/images/icon-close.svg' onClick={toggleModal} />
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body>
                <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column justify-content-center align-items-center mt-3 mx-auto p-3'>
                  <List target={routes} hash='head-routes' BS__options='p-2' />
                </ReactBootstrap.Nav.Item>
              </ReactBootstrap.Modal.Body>
            </ReactBootstrap.Modal.Dialog>
          </div>
        }
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav className='desk d-none d-sm-flex justify-content-between align-items-center px-4 py-2'>
        <Logo />
        <ReactBootstrap.Nav.Item as='ul' className='d-inline-flex'>
          <List target={routes} hash='head-routes' BS__options='p-2' />
        </ReactBootstrap.Nav.Item>
        <Button />
      </ReactBootstrap.Nav>
    </header>
  )
}

export default NavWithModal;