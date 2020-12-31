import React, { Component } from "react";
import Title from "./common/title";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
export default class Footer extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Popular Categories",
        info:
          "Lorem ipsum odor amet, consectetuer adipiscing elit Ac purus in massa",
      },
      {
        icon: <FaHiking />,
        title: "Trending Searches",
        info:
          "Lorem ipsum odor amet, consectetuer adipiscing elit Ac purus in massa",
      },
      {
        icon: <FaShuttleVan />,
        title: "Discount",
        info:
          "Lorem ipsum odor amet, consectetuer adipiscing elit Ac purus in massa",
      },
      {
        icon: <FaExternalLinkSquareAlt />,
        title: "Follow us",
        links: [<FaInstagram />, <FaFacebook />, <FaTwitter />],
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                {item.icon ? (
                  <span style={{ color: "white" }}>{item.icon}</span>
                ) : (
                  <div></div>
                )}
                <h6 style={{ color: "white" }}>{item.title}</h6>
                {item.info ? (
                  <p style={{ color: "white" }}>{item.info}</p>
                ) : (
                  <div style={{ color: "white" }}>
                    {/* FIXME: links to be added later */}
                    {item.links.map((link) => (
                      <span style={{ margin: "10px" }}>{link}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
