import React from "react";
import firebase from "firebase";
import { Form, Button } from "react-bootstrap";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
  }
  async componentDidMount() {
    try {
      firebase
        .database()
        .ref(`/room/${this.props.roomID}`)
        .on("value", (snapshot) => {
          var chat = [];
          snapshot.forEach((snap) => {
            chat.push(snap.val());
          });
          this.setState({ chat });
        });
    } catch (error) {
      alert(error);
    }
  }
  async sendMessage(e) {
    e.preventDefault();
    try {
      const value = document.getElementById("text").value;
      if (value !== "") {
        await firebase.database().ref(`/room/${this.props.roomID}`).push({
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
      console.log(error);
      alert(error);
    }
  }
  render() {
    return (
      <div>
        <section className="text-center pt-5" id="room-header">
          <h1>Welcome to the Chat Room</h1>
          <Button
            className="w-50"
            variant="outline-dark"
            onClick={() => {
              try {
                navigator.clipboard.writeText(window.location.href);
                alert("Link to ChatRoom copied!");
              } catch (error) {
                alert(error);
              }
            }}
          >
            Share Room
          </Button>
          <Button
            className="w-50"
            variant="outline-dark"
            onClick={() => {
              if (this.props.roomID !== "All-Chat") {
                firebase
                  .database()
                  .ref(`/room/${this.props.roomID}`)
                  .remove()
                  .then(() => {
                    firebase
                      .database()
                      .ref(
                        `/user/${this.props.currentUser["uid"]}/rooms/${this.props.roomID}`
                      )
                      .remove()
                      .then(() => {
                        alert("Room deleted!");
                        window.location.replace("/ChatRoom/#/home");
                      });
                  })
                  .catch((error) => {
                    alert(error);
                  });
              } else {
                alert("All-Chat cannot be deleted!");
              }
            }}
          >
            Delete Room
          </Button>
        </section>
        <section className="mt-5 ">
          <div className="message-form ">
            <div className="inner-msgs">
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
          </div>
          <Form
            onSubmit={this.sendMessage}
            className="sticky-bottom msg-box mt-2"
          >
            <Form.Group>
              <Form.Control type="text" placeholder="Enter message" id="text" />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </section>
      </div>
    );
  }
}
export default ChatRoom;
