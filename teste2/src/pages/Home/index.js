import React, { Component } from 'react';
import './styles.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Software from '../../assets/est-soft.png';
import Interface from '../../assets/est-inter2.png';
import Funcionalidades from '../../assets/est-func.png';


class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="soft">
                    <div className="Colum">
                        <Jumbotron className="infoJb">
                            <h1 className="text-light titlI">Software</h1>
                            <p className="text-light textI">
                            Desenvolvido para ser <a className="infoT">Intuitivo</a>, <a className="infoT">Preciso</a> e
                            <a className="infoT"> Gratuito</a> o <a className="infoT">Statistic Wolves </a>
                            é um sistema fácil e prático, que realiza análises estatísticas de maneira simplificada 
                            e precisa. E o melhor de tudo, é <a className="infoT">Gratuito</a>
                            </p>
                            <p className="text-light">
                                <Button variant="info" className="btn-info">Comece Já</Button>
                            </p>
                        </Jumbotron>
                    </div>
                    <div className="img-soft">
                    <img
                        src={Software}
                        width="650"
                        height="550"
                        className="d-inline-block align-top"
                    />
                    </div>
                </div>
                <div className="interface">
                    <div className="Colum-inter">
                        <div className="info-inter">
                            <Jumbotron className="infoJb-inter">
                                <h1 className=" titlI">Interface</h1>
                                <p className=" textI">
                                    O Statistic Wolves possui uma interface fácil, simples, estável e descomplicada, 
                                    visando a facilidade de uso. Além de conter alguns botões explicativos para 
                                    facilitar ainda mais!
                                </p>
                            </Jumbotron>
                        </div>
                        <div className="img-inter">
                            <img
                                src={Interface}
                                width="500"
                                height="450"
                                className="d-inline-block align-top"
                            />
                        </div>
                    </div>
                </div>
                <Container className="funcionalidades">
                    <div className="Colum-func">
                        <div className="info-func">
                            <Jumbotron className="infoJb-func">
                                <h1 className="text-light titlI">Funcionalidades</h1>
                                <p className="text-light textI">
                                    O principal intuito do projeto é facilitar a vida de alunos e profissionais,
                                    e para isso contamos com 3 sessões que possuem aplicações simples e estáveis
                                    que retornam resultados precisos.
                                </p>
                            </Jumbotron>
                        </div>
                        <div className="img-func">
                            <img
                                src={Funcionalidades}
                                width="580"
                                height="480"
                                className="d-inline-block align-top"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;