// app file of my new project

import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
        <div className="App">
          <Header />
          <BrowserRouter>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/user/login">
              <Login />
            </Route>
            <Route path="/user/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
          </BrowserRouter>
          <Footer/>
        </div>
  );
}

export default App;
