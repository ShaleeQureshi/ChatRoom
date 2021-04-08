import React from "react";
import firebase from "firebase";
import { Container, Button, Form } from "react-bootstrap";
import Footer from "../components/footer";

class RoomApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      queryError: null,
    };
  }

  async componentDidMount() {
    this.setState({ queryError: null });
    try {
      firebase
        .database()
        .ref("/chat")
        .on("value", (snapshot) => {
          var chat = [];
          snapshot.forEach((snap) => {
            chat.push(snap.val());
          });
          this.setState({ chat });
        });
    } catch (error) {
      this.setState({ queryError: error.message });
    }
  }

  async sendMessage(e) {
    e.preventDefault();
    try {
      const value = document.getElementById("text").value;
      if (value !== "") {
        await firebase.database().ref("/chat").push({
          content: value,
          time: Date.now(),
          uid: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
        });

        document.getElementById("text").value = "";
      } else {
        alert("You haven't typed anything!");
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div className="bg">
        <Container className="wrapper pt-2">
          <div className="text-center mt-5">
            <div id="room-header">
              <h1>Welcome to the Chat Room</h1>
              <Button
                className="w-50"
                variant="outline-dark"
                onClick={() => {
                  firebase.auth().signOut();
                  window.location.reload();
                }}
              >
                Sign Out
              </Button>
            </div>
          </div>
          <section className="message-form">
            <div className="msgs mt-5">
              {this.state.chat.map((chat) => {
                if (chat.uid !== firebase.auth().currentUser.uid) {
                  return (
                    <span key={chat.time}>
                      <p>
                        {chat.content}
                        <br />
                        <span id="sender">Sent by: {chat.email}</span>
                      </p>
                    </span>
                  );
                } else {
                  return (
                    <span key={chat.time}>
                      <p id="sender-me">
                        {chat.content}
                        <br />
                        <span id="sender">Sent by: YOU</span>
                      </p>
                    </span>
                  );
                }
              })}
            </div>
            <Form onSubmit={this.sendMessage} className="sticky-bottom">
              <Form.Group>
                <Form.Control type="text" placeholder="Enter text" id="text" />
              </Form.Group>
              <Button variant="outline-success" type="submit" className="w-100">
                Send
              </Button>
            </Form>
          </section>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default RoomApp;
