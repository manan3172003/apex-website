import {useState, useEffect} from 'react';
import {Navbar, Container, Nav,} from 'react-bootstrap';
import logo from '../assets/logo1.png'
import fblogo from '../assets/fb-logo.png'
import iglogo from '../assets/insta-logo.png'


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            if (window.scrollY >= 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src= {logo} alt="logo" width="50" height="50" className="d-inline-block align-top" />
            <h2>ApexTravels</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills </Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects </Nav.Link>            
            </Nav>
            <span className="navbar-text">
                <div className='social-icon'>
                    <a href="#"><img src={fblogo} alt="" height= {'30px'} width={'30px'}/></a>
                    <a href="#"><img src={iglogo} alt=""height= {'30px'} width={'30px'}/></a>
                </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
        

        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
