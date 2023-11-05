import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
const Header =() => {
    return (
        <>
        <h1>
        <Badge bg="secondary" as={Button}>
          Heading Button
        </Badge>
        </h1>
        <Button>Login</Button>
        </>
    ) 
}

export default Header