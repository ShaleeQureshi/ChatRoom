import React, { useContext, useEffect } from "react";
import { Container, Form, Button, Table, Row, Col } from "react-bootstrap";
import firebase from "firebase";
import { AuthContext } from "../scripts/auth";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const HomeApp = ({ history }) => {
  useEffect(() => {
    readData();
  });
  const { currentUser } = useContext(AuthContext);

  const readData = () => {
    firebase
      .database()
      .ref(`/user/${currentUser["uid"]}/rooms`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        try {
          for (var i = 0; i < Object.keys(data).length; i++) {
            addRow(Object.values(data)[i].room);
          }
        } catch (error) {
          addRow("You don't have any chats yet :(");
        }
      });
  };
  const addRow = (chatName) => {
    const newRow = document
      .getElementsByTagName("table")[0]
      .insertRow(document.getElementsByTagName("table")[0].rows.length);
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = chatName;
  };
  const createRoom = (e) => {
    e.preventDefault();
    const val = document.getElementById("roomID").value;
    firebase
      .database()
      .ref(`/user/${currentUser["uid"]}/rooms/${val}`)
      .update({
        room: val,
      })
      .then(() => {
        history.push(`/room/${val}`);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="bg">
      <Navbar />
      <Container className="wrapper">
        <Row className="mt-5">
          <Col sm={8}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Chats</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Col>
          <Col sm={4}>
            <Form onSubmit={createRoom}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Start Chatting</Form.Label>
                <Form.Control type="text" id="roomID" />
              </Form.Group>
              <Button variant="success" type="submit">
                Let's Go
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default HomeApp;
