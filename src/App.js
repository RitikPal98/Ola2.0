import "./App.css";
import Header from "./components/Header";
import BannerMain from "./components/BannerMain";
import Services from "./components/services/Services";
import Details from "./components/details/Details";
import Fleet from "./components/Fleet/Fleet";
import BannerBottom from "./components/BannerBottom";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookNow from "./pages/booknow/BookNow";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/booknow">
            <BookNow />
          </Route>
          <Route path="/">
            <Header />
            <BannerMain />
            <Services />
            <Details />
            <Fleet />
            <BannerBottom />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
