import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "../Details";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ThemeContext from "../ThemeContext";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {  

  return (
    <Provider store={store}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
