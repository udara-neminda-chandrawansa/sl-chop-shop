import "./App.css";
import { Route, Switch } from "wouter";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Nav inLanding={true}></Nav>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/contact" component={Contact} />

        {/* Default route in a switch */}
        <Route><div className="flex items-center justify-center h-[50dvh] bg-[#F6CE15] text-[#334462] font-bold">404: No such page!</div></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
