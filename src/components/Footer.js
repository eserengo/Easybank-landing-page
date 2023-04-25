import List from "./List";
import Button from "./Button";

const FooterNavs = () => {
  const routes__left = ['Home', 'About Us', 'Contact'];
  const routes__right = ['Blog', 'Careers', 'Privacy Policy'];
  const social = [
    <ReactBootstrap.Image className='icon' alt='facebook icon' src='./src/images/icon-facebook.svg' />,
    <ReactBootstrap.Image className='icon' alt='youtube icon' src='./src/images/icon-youtube.svg' />,
    <ReactBootstrap.Image className='icon' alt='twitter icon' src='./src/images/icon-twitter.svg' />,
    <ReactBootstrap.Image className='icon' alt='pinterest icon' src='./src/images/icon-pinterest.svg' />,
    <ReactBootstrap.Image className='icon' alt='instagram icon' src='./src/images/icon-instagram.svg' />,
  ];
  
  const Logo = () => (
    <ReactBootstrap.Navbar.Brand className='m-sm-2'><ReactBootstrap.Image className='logo' alt='logo' src='./src/images/foot-logo.svg' /></ReactBootstrap.Navbar.Brand>
  );

  return (
    <footer className='footer p-3'>
      <ReactBootstrap.Nav className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-sm-evenly'>
        <ReactBootstrap.Nav.Item className='d-flex flex-column align-items-center align-items-sm-start'>
          <Logo />
          <ReactBootstrap.Nav.Item as='ul' className='d-flex mt-2'>
            <List target={social} hash='social' BS__options='p-2' />
          </ReactBootstrap.Nav.Item>
        </ReactBootstrap.Nav.Item>
        <ReactBootstrap.Nav.Item className='d-flex flex-column flex-sm-row'>
          <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column align-items-center align-items-sm-start'>
            <List target={routes__left} hash='routes__left' BS__options='p-2' />
          </ReactBootstrap.Nav.Item>
          <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column align-items-center align-items-sm-start ms-sm-5'>
            <List target={routes__right} hash='routes__right' BS__options='p-2' />
          </ReactBootstrap.Nav.Item>
        </ReactBootstrap.Nav.Item>
        <ReactBootstrap.Nav.Item className='d-flex flex-column align-items-center align-items-sm-end'>
          <Button />
          <p className='copyright mt-4'>© Easybank. All Rights Reserved</p>
        </ReactBootstrap.Nav.Item>
      </ReactBootstrap.Nav>
    </footer>
  );
}

export default FooterNavs;