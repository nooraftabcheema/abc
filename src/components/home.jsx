import React, { Component } from "react";
import DropDownMain from "./dropdown";
import SearchBox from "./search";
import Hero from "./hero";
import { CarouselDemo } from "./carousel";
import Footer from "./footer";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <DropDownMain />
          </div>
          <div className="col">
            <SearchBox />
          </div>
        </div>
        <Hero />
        <CarouselDemo />
        <Footer />
      </div>
    );
  }
}

export default Home;
