import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebse.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="options">
          <Link className="option" to="/shop">
            CONTACT
          </Link>
        </div>
        {this.state.currentUser ? (
          <div className="options">
            <Link className="option" onClick={() => auth.signOut()}>
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="options">
            <Link className="option" to="/signin">
              Sign In
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default Header;
