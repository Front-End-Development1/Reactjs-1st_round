import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col } from 'react-bootstrap';
const Footer =() => {
    return (
        <>
        <footer className='bg-dark text-align text-light py-4'>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Company</h5>
                        <ul className='list-unstyled'>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Carrers</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col >
                    <Col md={4}>
                        <h5>Our Services</h5>
                        <ul className='list-unstyled'>
                            <li>Web Design</li>
                            <li>Graphic Design</li>
                            <li>Database Design</li>
                            <li>Marketing</li>
                        </ul>
                    </Col >
                    <Col md={4}>
                        <h5>Contact With Us</h5>
                        <ul className='list-unstyled'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </Col >
                </Row>
                <hr className='my-2'/>
                <Row>
                    <Col>
                        <p>
                            &copy; {new Date().getFullYear} Your Company. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    ) 
}

export default Footer