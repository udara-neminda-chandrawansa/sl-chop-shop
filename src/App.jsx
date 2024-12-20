import "./App.css";
import { Route, Switch } from "wouter";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";

function App() {
  return (
    <>
    <Nav inLanding={true}></Nav>
      <Switch>
        <Route path="/" component={Landing} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
