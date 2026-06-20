import { createContext, useState } from "react";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export let userContext = createContext();

function App() {
  let [user, setUser] = useState({
    uName: "Aadhi",
    age: 22,
    email: "aadhi@gmail.com",
  });
  // console.log(userContext);

  return (
    <userContext.Provider value={{ user }}>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
