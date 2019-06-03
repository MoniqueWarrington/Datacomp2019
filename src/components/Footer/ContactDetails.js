import React from 'react';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LinkedinIcon from '../../static/img/LinkedinIcon.svg'
import GithubIcon from '../../static/img/GithubIcon.svg'

class ContactDetails extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <>
                <style type="text/css">
                    {`
                        .list-group-item-transparent {
                            background-color: rgba(0,0,0,0)
                        }
                    `}
                </style>
                <ListGroup variant="flush">
                    <ListGroup.Item variant="transparent">
                        {this.props.name}
                    </ListGroup.Item>
                    <ListGroup.Item variant="transparent">
                        <a href={'mailto:' + this.props.email}>{this.props.email}</a>
                    </ListGroup.Item>
                    <ListGroup.Item variant="transparent">
                        <a href={this.props.linkedIn}><img src={LinkedinIcon}/> </a>
                        <a href={this.props.gitHub}><img src={GithubIcon} /> </a>
                    </ListGroup.Item>
                </ListGroup>
            </>
        )
    }
}

export default ContactDetails;