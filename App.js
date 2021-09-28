import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OpenPage from "./components/OpenPage";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar HandleClick={HandleClick} />
            <Sidebar isOpen={isOpen} HandleClick={HandleClick} />
            <OpenPage />
          </Route>
          <Route exact path="/home">
            <Navbar HandleClick={HandleClick} />
            <Sidebar isOpen={isOpen} HandleClick={HandleClick} />
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/search">
            <Navbar HandleClick={HandleClick} />
            <Sidebar isOpen={isOpen} HandleClick={HandleClick} />
            <Search />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
