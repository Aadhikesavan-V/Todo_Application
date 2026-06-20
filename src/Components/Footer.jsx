import { Component } from "react";
import { userContext } from "../App";

class Footer extends Component {
  render() {
    let date = new Date();
    return (
      <footer>
        <h2>Footer</h2>{" "}
        <userContext.Consumer>
          {({ user }) => {
            return (
              <h4>
                {user.uName} - {date.getFullYear()}
              </h4>
            );
          }}
        </userContext.Consumer>
      </footer>
    );
  }
}

export default Footer;
