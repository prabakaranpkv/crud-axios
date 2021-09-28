import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./create/Create";
import Read from "./read/Read";
import Update from "./update/Update";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Profile List</h1>
        <Route exact path="/" component={Create}>
          {/* <Create /> */}
        </Route>
        <Route exact path="/" component={Read}>
          {/* <Read /> */}
        </Route>
        <Route path="/update" component={Update}>
          {/* <Update /> */}
        </Route>
      </div>
    </Router>
  );
}

export default App;
