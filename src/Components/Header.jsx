import { useContext } from "react";
import { userContext } from "../App";

function Header(props) {
  // console.log(props);
  let {
    user: { uName },
  } = useContext(userContext);

  return (
    <header>
      <h1>ToDo List - {uName}</h1>
      <p
        style={{
          backgroundColor: "white",
          color: "red",
          width: "28px",
          height: "26px",
          borderRadius: "50%",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {uName.slice(0, 1)}
      </p>
    </header>
  );
}

export default Header;
