

// Breakpoints and its classes
// classes: sm, md, lg, xl, xxl

import Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Stack  from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Layout(){
    return (
        <Container>
           <Row className='bg-danger '>
            <Col className='bg-secondary'> 1 of 12  </Col>
            <Col> 2 of 12  </Col>
            <Col className='bg-secondary'> 3 of 12  </Col>
            <Col> 4 of 12  </Col>
            <Col className='bg-secondary'> 5 of 12  </Col>
            <Col> 6 of 12  </Col>
            <Col className='bg-secondary'> 7 of 12  </Col>
            <Col> 8 of 12  </Col>
            <Col className='bg-secondary'> 9 of 12  </Col>
            <Col> 10 of 12  </Col>
            <Col className='bg-secondary'> 11 of 12  </Col>
            <Col> 12 of 12  </Col>
           </Row>
           <Row className='bg-primary'>
            <Col className='bg-success'> 1 of 10  </Col>
            <Col> 2 of 10  </Col>
            <Col className='bg-success'> 3 of 10  </Col>
            <Col> 4 of 10  </Col>
            <Col className='bg-success'> 5 of 10  </Col>
            <Col> 6 of 10  </Col>
            <Col className='bg-success'> 7 of 10  </Col>
            <Col> 8 of 10  </Col>
            <Col className='bg-success'> 9 of 10  </Col>
            <Col> 10 of 10  </Col>
           </Row>
           <Row className='bg-info'>
            <Col className='bg-light '> 1 of 8  </Col>
            <Col> 2 of 8  </Col>
            <Col className='bg-light '> 3 of 8  </Col>
            <Col> 4 of 8  </Col>
            <Col className='bg-light '> 5 of 8  </Col>
            <Col> 6 of 8  </Col>
            <Col className='bg-light '> 7 of 8  </Col>
            <Col> 8 of 8  </Col>
           </Row>
           <Row className='bg-warning'>
            <Col className='bg-secondary '> 1 of 6  </Col>
            <Col> 2 of 6  </Col>
            <Col className='bg-secondary '> 3 of 6  </Col>
            <Col> 4 of 6  </Col>
            <Col className='bg-secondary '> 5 of 6  </Col>
            <Col> 6 of 6  </Col>
           </Row>
           <Row className='bg-danger'>
            <Col className='bg-info '> 1 of 4  </Col>
            <Col> 2 of 4  </Col>
            <Col className='bg-info '> 3 of 4  </Col>
            <Col> 4 of 4  </Col>
           </Row>
           <Row className='bg-primary'>
            <Col className='bg-light '> 1 of 2  </Col>
            <Col> 2 of 2  </Col>
           </Row>
           <br />
           <p>Responsive grid examples</p>
           <Row className='bg-info'>
                <Col sm={8}>sm-8</Col>
                <Col sm={4}>sm-4</Col>
           </Row>
           <Row className='bg-primary'>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
           </Row>
           <Row className='bg-secondary'>
            <Col xs={12} md={8}> xs=12 md=8</Col>
            <Col xs={6} md={4}> xs=6 md=4</Col>
           </Row>

            <Stack direction='horizontal' gap={3}>
                <Form.Control className='me-auto bg-info' placeholder='Add your item here...' />
                <Button variant="secondary">
                    Submit
                </Button>
                <div className='vr' />
                    <Button variant="outline-danger">Reset</Button>
            </Stack>
        </Container>

        

        
    );
}

export default Layout;