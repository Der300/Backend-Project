import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import InputField from "../../components/InputField";
import styles from "../../styles/pages/auth.module.css";
import { validateInput } from "../../utils/validateInput";
import { confirmTypeInput } from "../../utils/confirmTypeInput";
import { REGISTER_FIELDS } from "../../utils/authConstants";

const Register = () => {
    const [inputs, setInputs] = useState(REGISTER_FIELDS);
    const [errors, setErrors] = useState(REGISTER_FIELDS);
    const handleInput = (type, value) => {
        setErrors(prev => ({ ...prev, [type]: validateInput(confirmTypeInput(type), value) }));
        setInputs(prev => ({ ...prev, [type]: value }));
    }
    return (
        <>
            <Container style={{ height: '100vh' }}>
                <Row className="h-100 justify-content-center primary align-items-center">
                    <Col md='4' className={styles.wrapper}>
                        <h2 className={styles.title}>Register</h2>
                        <Form>
                            {
                                Object.keys(REGISTER_FIELDS).map((key, index) => (
                                    <InputField key={index}
                                        idInput={key}
                                        placeholder=''
                                        autoComplete='true'
                                        type={confirmTypeInput(key)}
                                        value={inputs[key]}
                                        onChange={(e) => handleInput(key, e.target.value.replace(/^\s+/, ''))}//khong cho nguoi dung nhap khoang trang dau
                                        required
                                        autoFocus={index === 0 ? true : false}
                                        isInvalid={!!errors[key]}
                                        error={errors[key]}
                                    />

                                ))
                            }
                            <div className="d-flex justify-content-around align-items-center">
                                <Button variant="primary" type="submit" className="w-25">
                                    Register
                                </Button>
                                <a href="" className="text-decoration-none">
                                    <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                                    <span className="ms-2">Login</span>
                                    </a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Register;