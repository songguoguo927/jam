import React, { Component } from "react";
import bottomArrow from "./bottom-arrow.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./index.css";

import jamLogo from "./jam.png";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarMenu: [
        { path: "/skill/", title: "Learn 技能", exact: false, component: "" },
        { path: "/books/", title: "Books 书单", exact: false, component: "" },
        { path: "/moodcard/", title: "心情卡片", exact: false, component: "" },
        { path: "/article/", title: "文章", exact: true, component: "" },
        {
          path: "/resource/",
          title: "Resources 学习",
          exact: true,
          component: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <header className="navbar header">
          <section className="navbar-section">
            <Link to="/" className="navbar-brand logo">
              <img width="66px" src={jamLogo} alt="" />
            </Link>

            <ul className="main-nav">
              <li className="hover-menu">
                <span className="navbar-menu">
                  <span>🏫总站</span>
                  <img className="bottom-arrow" src={bottomArrow} alt="" />
                </span>

                <div className="menu-list" id="js-menu-list">
                  <div className="columns menu-list-content">
                    <div className="column col-9">
                      <div id="menu-category">
                        <h4 className="menu-filter">Categories</h4>
                        <ul className="nav-category">
                          <li className="nav-item">
                            <Link
                              className=""
                              to="/category/blockchain"
                              title="Landing page design inspiration for Blockchain related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Blockchain
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className=""
                              to="/category/blog"
                              title="Landing page design inspiration for Blog related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Blog
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className=""
                              to="/category/book"
                              title="Landing page design inspiration for Book related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Book
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className=""
                              to="/category/business"
                              title="Landing page design inspiration for Business related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Business
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="column col-3">
                      <h4 className="menu-filter">Colors</h4>

                      <ul className="nav-color">
                        <li className="nav-item">
                          <Link
                            className="aqua"
                            to="/color/aqua"
                            title="Landing page design inspiration for aqua related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            aqua
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            className="black"
                            to="/color/black"
                            title="Landing page design inspiration for black related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            black
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {this.state.navbarMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path} className="navbar-menu">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <form action="/search/" className="input-group input-inline search">
              <input
                className="form-input"
                type="search"
                placeholder="Search"
                autoComplete="off"
                name="q"
              />
              <i className="bg-search" />
            </form>
          </section>
        </header>
      </div>
    );
  }
}
