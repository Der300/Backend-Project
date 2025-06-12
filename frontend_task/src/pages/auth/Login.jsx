import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import styles from "../../styles/pages/auth.module.css";
import InputField from "../../components/InputField";
import { useAuth } from "../../contexts/AuthContext";
import { LOGIN_FIELDS } from "../../utils/authConstants";
import InputValueToObject from "../../utils/InputValueToObject";

const Login = () => {
    const { login } = useAuth();
    const [inputs, setInputs] = useState(LOGIN_FIELDS);

    const handleInput = (type, value) => {
        setInputs(prev => ({ ...prev, [type]: value }));
    }

    const handleSubmit = async (e) => {
        let user = InputValueToObject(e, LOGIN_FIELDS);
        // try {
        //     await login(user);
        // } catch (error) {
        //     //  alert(error.response?.data?.message);
        //     console.log(`loi ne: ${error}`);

        // }
    };

    return (
        <>
            <Container style={{ height: '100vh' }}>
                <Row className="h-100 justify-content-center primary align-items-center">
                    <Col md='4' className={styles.wrapper}>
                        <h2 className={styles.title}>Login</h2>
                        <Form onSubmit={handleSubmit}>
                            {/*  action={}  method={} */}
                            {
                                Object.keys(LOGIN_FIELDS).map((key, index) => (
                                    <InputField key={index}
                                        idInput={key}
                                        placeholder=''
                                        autoComplete='true'
                                        value={inputs[key]}
                                        type={key}
                                        onChange={(e) => handleInput(key, e.target.value)}
                                        required
                                        autoFocus={index === 0 ? true : false}
                                    />
                                ))
                            }
                            <div className="d-flex justify-content-around align-items-center">
                                <Button variant="primary" type="submit" className="w-25">
                                    Login
                                </Button>
                                <a href="" className="text-decoration-none">Forgotten password?</a>
                            </div>
                            <div className="text-center mt-4">
                                <a className="w-50 btn btn-success">Create new account</a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;