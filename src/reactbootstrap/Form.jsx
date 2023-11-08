import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Form = () => {
    return (
       <Form>
        <Form.group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.group>
        <Form.group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.control type="password" placeholder="Password" />
        </Form.group>
        <Form.group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.group>
        <Button varient="primary" type="submit">
            Submit
        </Button>
       </Form>
    );
}

export default Form;