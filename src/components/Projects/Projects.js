import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useAuth from "../../hooks/useAuth";

const Projects = () => {
    const [projects] = useAuth();

    // console.log(projects);
    return (
        <div id="projects">
            <h2 className="my-5">projects</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {projects.map((project) => (
                        <Col key={project.id}>
                            <Card>
                                <Card.Img variant="top" src={project.img} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.desc}</Card.Text>
                                    <p>-{project.point1}</p>
                                    <p>-{project.point2}</p>
                                    <p>-{project.point3}</p>
                                    <a
                                        target="_black"
                                        href={project.url}
                                        className="me-2"
                                    >
                                        <Button>Live Preview</Button>
                                    </a>
                                    <Link to={`/details/${project.id}`}>
                                        <Button>Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
