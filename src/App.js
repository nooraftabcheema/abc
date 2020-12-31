import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Customers from "./components/Customers";
import NotFound from "./components/not-found";
import Login from "./components/login";
import Register from "./components/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home";
import ContactUs from "./components/contactus";
import About from "./components/about";
import auth from "./services/authService";
import Logout from "./components/common/logout";
class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="">
        <ToastContainer />
        <Navbar user={user} />
        <main className="container-fluid">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
