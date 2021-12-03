import React from "react";
//components & pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyle";
//router
import { Route } from "react-router-dom";

//path={["/game/:id", "/"]} => if the path is as indicated in the "" -> render out the <Home/>

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <footer>
        <div>
          Page logo (icon) made by{" "}
          <a
            href="https://www.flaticon.com/authors/kliwir-art"
            title="kliwir art"
          >
            kliwir art
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
