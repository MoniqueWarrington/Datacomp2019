import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

class Information extends React.Component {
    render() {
        return (
            <Jumbotron style={{height:'100%', marginBottom: '0px'}}>
              <h1>
                  {this.props.title}
              </h1>
              <p>
                  {this.props.message}
              </p>
            </Jumbotron>
          );
    }
}

export default Information;