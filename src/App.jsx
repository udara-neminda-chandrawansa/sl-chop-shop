import "./App.css";
import { Route, Switch } from "wouter";
import Nav from "./components/Nav";
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
    </>
  );
}

export default App;
