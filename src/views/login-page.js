import React, { useContext } from "react";
import firebase from "firebase";
import { Button } from "react-bootstrap";
import { AuthContext } from "../scripts/auth";
import Footer from "../components/footer";

const LoginApp = ({ history, previousRoute }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser && typeof previousRoute === "undefined") {
    history.push("/home");
  } else if (currentUser && typeof previousRoute !== "undefined") {
    history.push(previousRoute);
  }

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <div className="bg">
      <div className="wrapper">
        <div className="center text-center landing-txt">
          <h1>Welcome to Shahrukh's Chat App</h1>
          <Button
            onClick={signInWithGoogle}
            variant="outline-dark"
            className="w-50 mt-2"
            id="button-landing"
          >
            Sign in with Google
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LoginApp;
