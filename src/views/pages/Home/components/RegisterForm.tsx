import React, { useContext, useState } from 'react';

import { Form , Button} from 'react-bootstrap';

import register from '../../../../services/user';

const RegisterForm: React.FC = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ CPF, setCPF ] = useState("");
    const [ RG, setRG ] = useState("");
    const [ city, setCity ] = useState("");
    const [ Street, setStreet ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ state, setState ] = useState("");
    const [ name, setName ] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        register(email, password, CPF, RG, city, Street, number, state, name);
    }

    return (
        <div className="register">
            <h1>Registrar</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="seu@mail.com" onChange={(event) => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Sua senha" onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="Seu CPF" onChange={(event) => setCPF(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="Seu RG" onChange={(event) => setRG(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Sua cidade" onChange={(event) => setCity(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rua</Form.Label>
                    <Form.Control type="text" placeholder="Sua rua" onChange={(event) => setStreet(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="text" placeholder="Seu Numero" onChange={(event) => setNumber(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Seu Estado" onChange={(event) => setState(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu Nome" onChange={(event) => setName(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Registrar
                </Button>
            </Form>
        </div>
    );
}

export default RegisterForm;