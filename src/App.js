import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import { useState } from "react";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // Bem naming covention
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                </Route>
              </Switch>
              {/* React-Router =>Chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
