import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/home" component={Home} />
      <Route exact path="/" component={Landing} />
      <Route path="/newrecipe" component={CreateRecipe} />
    </div>
  );
}

export default App;
