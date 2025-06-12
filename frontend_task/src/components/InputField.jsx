import { Form } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/components/InputField.module.css";
import { capitalizeFirstString } from "../utils/capitalizeFirstString";

const InputField = ({ idInput, error = '', type = 'text', iconShow = faEye, iconHide = faEyeSlash, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <>
            <Form.Group className={`my-4 ${styles.wrapper} w-100`}>
                <Form.Control
                    className={styles.input}
                    name={idInput}
                    id={idInput}
                    type={showPassword === true ? "text": type}
                    {...props}
                    
                />
                <Form.Label htmlFor={idInput} className={styles.label}>{capitalizeFirstString(idInput)}</Form.Label>
                {
                    type === 'password' &&
                    <span onClick={() => setShowPassword(prev => !prev)}>
                        <FontAwesomeIcon className={styles.icon} icon={showPassword ? iconShow : iconHide}></FontAwesomeIcon>
                    </span>
                }
                <Form.Control.Feedback type="invalid" tooltip>{error}</Form.Control.Feedback>
            </Form.Group>
        </>
    );
}

export default InputField;