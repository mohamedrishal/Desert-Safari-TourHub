import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import { FaWhatsapp, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';
import './header.css'; // Assuming the CSS is in header.css

const Header = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleToggle = () => setIsToggled(!isToggled);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`header ${scrollPosition > 50 ? 'scrolled' : ''} ${isToggled ? 'toggled' : ''}`}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img width={"160px"} className='logo' src={Logo} alt="Deset Safari Logo" />
                    </Navbar.Brand>
                    <div className='d-flex align-items-center ms-auto gap-2 order-lg-2'>
                        <div className='watsp-lg gap-2 contact-icon'>
                           <a></a> <span>+971 501151643</span>
                            <FaWhatsapp className='fs-5' />
                            {/* https://api.whatsapp.com/send?phone=+971501151643&text=Hello, more information! */}
                        </div>
                        <div className='nav-icon watsp-sm nav-item align-items-center justify-content-center rounded-circle'>
                            <FaWhatsapp style={{ fontSize: '1.6rem' }} />
                        </div>
                        <div className='nav-icon nav-item d-flex align-items-center justify-content-center rounded-circle'>
                            <FaInstagram style={{ fontSize: '1.6rem' }} />
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggle' onClick={handleToggle}>
                            {isToggled ? <FaTimes /> : <FaBars />}
                        </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className='order-lg-1'>
                        <Nav className="mx-auto d-flex gap-3">
                            <Nav.Link style={{ borderRadius: '20px' }} href="#home" className='fw-medium nav-item px-3'>HOME</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#link" className='fw-medium nav-item px-3'>DESERT SAFARI</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#home" className='fw-medium nav-item px-3'>BUGGY TOURS</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#link" className='fw-medium nav-item px-3'>ABOUT US</Nav.Link>
                            <Nav.Link style={{ borderRadius: '20px' }} href="#home" className='fw-medium nav-item px-3'>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
