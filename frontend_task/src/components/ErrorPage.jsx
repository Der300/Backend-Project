import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Row } from "react-bootstrap";

const ErrorPage = ({ message, imageName = 'NotFound', backTo = '/' }) => {
    return (
        <>
            <Container style={{ height: '100vh' }}>
                <Row className="h-100 justify-content-center align-items-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`/images/${imageName}.jpg`} alt={`Image ${imageName}`} />
                        <Card.Body className="text-center">
                            <Card.Text className="fw-bold">{message}</Card.Text>
                            <a href={backTo} className="btn btn-secondary rounded-4">
                                <FontAwesomeIcon
                                    style={{ verticalAlign: 'middle', marginBottom: '1px', transform: 'rotate(180deg)' }}
                                    icon={faRightFromBracket}>
                                </FontAwesomeIcon>
                                <span className="ms-2">Back to home</span>
                            </a>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}

export default ErrorPage;