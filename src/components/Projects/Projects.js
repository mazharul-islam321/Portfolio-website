import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import air from "../../images/air-drone.PNG";
import tour from "../../images/tour-world.PNG";
import madicha from "../../images/madichaPNG.PNG";
import learn from "../../images/learn-code.PNG";

const Projects = () => {
    return (
        <div id="projects">
            <h2 className="my-5">projects</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={air} />
                            <Card.Body>
                                <Card.Title>Air-Drone</Card.Title>
                                <Card.Text>
                                    "Drones overall will be more impactful than
                                    I think people recognize, in positive ways
                                    to help society."
                                </Card.Text>
                                <a
                                    target="_black"
                                    href="https://air-drone.web.app/"
                                >
                                    <Button>Live Preview</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={tour} />
                            <Card.Body>
                                <Card.Title>Tour-World</Card.Title>
                                <Card.Text>
                                    “Travel is fatal to prejudice, bigotry, and
                                    narrow-mindedness, and many of our people
                                    need it sorely on these accounts. Broad...
                                </Card.Text>
                                <a
                                    target="_black"
                                    href="https://tour-world-7fcb7.web.app/"
                                >
                                    <Button>Live Preview</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={madicha} />
                            <Card.Body>
                                <Card.Title>Medicha</Card.Title>
                                <Card.Text>
                                    Medical research involves research in a wide
                                    range of fields, such as biology, chemistry,
                                    pharmacology and toxicology ...
                                </Card.Text>
                                <a
                                    target="_black"
                                    href="https://medicha-d19f5.web.app/"
                                >
                                    <Button>Live Preview</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={learn} />
                            <Card.Body>
                                <Card.Title>Learn-Code</Card.Title>
                                <Card.Text>
                                    Whether you're a beginner just starting out
                                    or an experienced developer looking for
                                    courses to enhance your skills and reach
                                    higher levels ...
                                </Card.Text>
                                <a
                                    target="_black"
                                    href="https://determined-einstein-21b832.netlify.app/"
                                >
                                    <Button>Live Preview</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
