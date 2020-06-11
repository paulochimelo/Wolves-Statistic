import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './styles.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="form">
                    <div className="div-form">
                        <Form className="form-login">
                            <h1>Faça Login</h1>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="form-tit">Endereço de Email</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu email" className="input-form"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="form-tit">Senha</Form.Label>
                                <Form.Control type="password" placeholder="Insira sua senha" className="input-form"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Lembrar senha" className="check-form"/>
                            </Form.Group>
                            <Button variant="outline-info" className="btnH">Entrar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;