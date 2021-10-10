import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Portal from "./pages/Portal/Portal";
import SignUp from "./pages/SignUp/SignUp";
import Trial from "./pages/Trial/Trial";
import Roadmap from "./pages/Products/Roadmap";
import Reactflow from "./pages/Products/Reactflow";
import Blog from "./pages/course/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle  />
      <ScrollToTop  />
      <Navbar />
      <Switch>
        <Route path="/" exact ><Home/> </Route>
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/career" component={Portal} />
        <Route path="/community" component={Trial} />
        <Route path="/blogs" component={Services} />
        {/* <Route path="/signup" component={SignUp} /> */}
        <Route path="/flow" component={Reactflow}/>  
        <Route path="/course" component={Blog}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
