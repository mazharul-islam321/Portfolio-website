import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Details = () => {
    const { id } = useParams();
    const [projects] = useAuth();
    const value = projects.find((project) => project.id === parseInt(id));

    return (
        <div className="py-4">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={value?.img} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={value?.img1} alt="" />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={6}>
                        <img className="w-100" src={value?.img2} alt="" />
                    </Col>

                    <Col xs={12} md={6}>
                        <h2>{value?.name}</h2>
                        <h5>{value?.desc}</h5>
                        <p>-{value?.point1}</p>
                        <p>-{value?.point2}</p>
                        <p>-{value?.point3}</p>
                        <p>-{value?.point4}</p>
                        <p>-{value?.point5}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;
