import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { FullArticlePage } from "./pages/FullArticlePage";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/NewsPage" component={NewsPage} />
          <Route exact path="/FullArticlePage" component={FullArticlePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
