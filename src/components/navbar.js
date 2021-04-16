import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import firebase from "firebase";

const Navigation = ({ history }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>ChatRoom</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/ChatRoom/#/home">Home</Nav.Link>
          <Nav.Link href="/ChatRoom/#/room/All-Chat">All-Chat</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            onClick={() => {
              firebase.auth().signOut();
              window.location.replace("/ChatRoom/");
            }}
          >
            Sign Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
