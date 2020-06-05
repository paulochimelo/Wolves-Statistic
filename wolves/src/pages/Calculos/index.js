import React, { Component } from 'react';
//import Link from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './style.css';

class Calculos extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="Tit">Experimente nossos cálculos</h1>
                <div className="Tipos">
                    <Row className="Colum">
                        <Col className="Descritiva">
                            <Card className="card" border="info" style={{ width: '22rem' }}>
                                <Card.Header className="tit-cal">
                                    <h3>Descritiva</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="subtit">Funcionalidades</Card.Title>
                                    <Card.Text className="info-cal">
                                        Nos permite compreender determinada destribuição através da descrição 
                                        dos resultados e do resumo dos dados!
                                    </Card.Text>
                                    <Button variant="outline-info" className="btnC">Calcular</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Probabilidade">
                            <Card  className="card" border="info" style={{ width: '22rem' }}>
                                <Card.Header className="tit-cal">
                                    <h3>Probabilidade</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="subtit">Funcionalidades</Card.Title>
                                    <Card.Text className="info-cal">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info" className="btnC">Calcular</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Co-E-Re">
                            <Card className="card" border="info" style={{ width: '22rem' }}>
                                <Card.Header className="tit-cal">
                                    <h3>Correlação e Regreção</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="subtit">Funcionalidades</Card.Title>
                                    <Card.Text className="info-cal">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info" className="btnC">Calcular</Button>
                                </Card.Body>
                            </Card> 
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Calculos;