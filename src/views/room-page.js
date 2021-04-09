import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import ChatRoom from "../components/chatroom";
import { AuthContext } from "../scripts/auth";

const RoomApp = (props) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg">
      <Navigation />
      <Container className="wrapper">
        <ChatRoom
          roomID={props.match.params.roomID}
          currentUser={currentUser}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default RoomApp;
