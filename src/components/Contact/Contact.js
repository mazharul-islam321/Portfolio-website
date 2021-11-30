import React from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_a7s27bp",
                "template_wacrwka",
                e.target,
                "user_Bkx9Povhs7QnvKWX6ytKR"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div id="contact">
            <h2 className="my-5">Contact</h2>
            <Container>
                <Form onSubmit={sendEmail}>
                    <div className="form-field mb-4">
                        <Form.Control
                            className="form-width"
                            size="md"
                            name="to_name"
                            type="text"
                            placeholder="Name"
                        />
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className=" mx-4 form-width"
                        >
                            <Form.Control
                                name="user_email"
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
                        <Form.Control
                            className="form-width"
                            size="md"
                            type="text"
                            name="from_name"
                            placeholder="subject"
                        />
                    </div>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Message"
                    >
                        <Form.Control
                            name="message"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "130px" }}
                        />
                    </FloatingLabel>
                    <Button
                        className="mt-4"
                        type="submit"
                        variant="warning"
                        size="lg"
                    >
                        SUBMIT
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;
