import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <Navbar collapseOnSelect expand="lg" bg="light" fixed="bottom">
          <Container>
            <Nav className="justify-content-center" style={{ flex: 1}}>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Copyright © 2022 by Laurel Yacuta. Made with React.
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;