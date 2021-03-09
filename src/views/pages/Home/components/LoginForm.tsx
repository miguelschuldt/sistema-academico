import React, { useContext, useState } from 'react';

import { Form , Button} from 'react-bootstrap';

import { AuthContext } from '../../../../contexts/AuthContext';

const Loginform: React.FC = () => {

    const { authenticate } = useContext(AuthContext);

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        authenticate(email, password);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="seu@mail.com" onChange={(event) => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Sua senha" onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Loginform;