import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            fadeTitleIn: false,
            fadeSubtitleIn: false
        };
        this.onTitleFadeIn = this.onTitleFadeIn.bind(this);
    }

    componentDidMount() {
        this.setState({ fadeTitleIn: true })
    }

    onTitleFadeIn() {
        this.setState({ fadeSubtitleIn: true })
    }
    fadeInStyle = {
        'transitionDuration': '.75s'
    }
    render() {
        return (
            <Jumbotron>
                <Fade in={this.state.fadeTitleIn} style={this.fadeInStyle} onEntered={this.onTitleFadeIn}>
                    <h1>Monique Warrington & Aidan Harris</h1>
                </Fade>
                <Fade in={this.state.fadeSubtitleIn} style={this.fadeInStyle} >
                    <div id="example-fade-text">
                        Two Software Developers trying to make a difference!
                </div>
                </Fade>
            </Jumbotron>
        )
    }
}

export default Header