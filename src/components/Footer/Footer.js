import React from 'react';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LinkedinIcon from '../../static/img/LinkedinIcon.svg'
import GithubIcon from '../../static/img/GithubIcon.svg'
import ContactDetails from './ContactDetails'
class Footer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <footer>
                <style type="text/css">
                    {`
                        .list-group-item-transparent {
                            background-color: rgba(0,0,0,0)
                        }
                    `}
                </style>

                <Jumbotron style={{marginBottom: '0rem', marginTop: '2rem'}}>
                    <Container>
                        <Row>
                            <Col>
                                <ContactDetails 
                                    name="Aidan Harris" 
                                    email="aidanharris1001@gmail.com" 
                                    linkedIn="https://www.linkedin.com/in/aidanharris/"
                                    gitHub="https://github.com/AidanTheDeveloper"/>
                            </Col>
                            <Col>
                            <ContactDetails 
                                    name="Monique Warrington" 
                                    email="niquewarrington@gmail.com"
                                    linkedIn="https://www.linkedin.com/in/monique-warrington/"
                                    gitHub="https://github.com/MoniqueWarrington" />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </footer>
        )
    }
}

export default Footer;