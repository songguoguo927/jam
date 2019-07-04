import React,{Component} from 'react';
import bottomArrow from "./bottom-arrow.png";
import './index.css';

import jamLogo from './jam.png'
export default class Header extends Component {
render(){
    return  (
      
    <div className="container">
      
        <header className="navbar header">
          <section className="navbar-section">
            <a href="/" className="navbar-brand logo">
              <img width="66px" src={jamLogo} alt="" />
            </a>

            <ul className="main-nav">
              <li className="hover-menu">
                <span
                  className="navbar-menu"
                  
                >
                  <span>🏫总站</span>
                  <img
                    className="bottom-arrow"
                    src={bottomArrow}
                    alt=""
                  />
                </span>

                <div className="menu-list" id="js-menu-list">
                  <div className="columns menu-list-content">
                    <div className="column col-9">
                      <div id="menu-category">
                        <h4 className="menu-filter">
                          Categories
                        </h4>
                        <ul className="nav-category">
                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/blockchain"
                              title="Landing page design inspiration for Blockchain related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Blockchain
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/blog"
                              title="Landing page design inspiration for Blog related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Blog
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/book"
                              title="Landing page design inspiration for Book related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Book
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/business"
                              title="Landing page design inspiration for Business related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Business
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/coming-soon"
                              title="Landing page design inspiration for Coming Soon related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Coming Soon
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/community"
                              title="Landing page design inspiration for Community related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Community
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/creative"
                              title="Landing page design inspiration for Creative related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Creative
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/culture"
                              title="Landing page design inspiration for Culture related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Culture
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/design-tools"
                              title="Landing page design inspiration for Design Tools related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Design Tools
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/development-tools"
                              title="Landing page design inspiration for Development Tools related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Development Tools
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/education"
                              title="Landing page design inspiration for Education related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Education
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/entertainment"
                              title="Landing page design inspiration for Entertainment related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Entertainment
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/event"
                              title="Landing page design inspiration for Event related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Event
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/fashion"
                              title="Landing page design inspiration for Fashion related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Fashion
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/finance"
                              title="Landing page design inspiration for Finance related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Finance
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/food-drinks"
                              title="Landing page design inspiration for Food Drinks related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Food &amp; Drinks
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/furniture-interiors"
                              title="Landing page design inspiration for Furniture Interiors related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Furniture &amp; Interiors
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/gradient"
                              title="Landing page design inspiration for Gradient related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Gradient
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/health-fitness"
                              title="Landing page design inspiration for Health Fitness related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Health &amp; Fitness
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/hosting"
                              title="Landing page design inspiration for Hosting related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Hosting
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/illustration"
                              title="Landing page design inspiration for Illustration related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Illustration
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/insurance"
                              title="Landing page design inspiration for Insurance related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Insurance
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/isometric"
                              title="Landing page design inspiration for Isometric related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Isometric
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/magazine"
                              title="Landing page design inspiration for Magazine related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Magazine
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/minimal"
                              title="Landing page design inspiration for Minimal related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Minimal
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/miscellaneous"
                              title="Landing page design inspiration for Miscellaneous related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Miscellaneous
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/outdoors-travel"
                              title="Landing page design inspiration for Outdoors Travel related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Outdoors &amp; Travel
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/pattern"
                              title="Landing page design inspiration for Pattern related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Pattern
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/photography"
                              title="Landing page design inspiration for Photography related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Photography
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/portfolio"
                              title="Landing page design inspiration for Portfolio related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Portfolio
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/product-management"
                              title="Landing page design inspiration for Product Management related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Product Management
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/productivity"
                              title="Landing page design inspiration for Productivity related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Productivity
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/prototype"
                              title="Landing page design inspiration for Prototype related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Prototype
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/real-estate"
                              title="Landing page design inspiration for Real Estate related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Real Estate
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/software"
                              title="Landing page design inspiration for Software related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Software
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/technology"
                              title="Landing page design inspiration for Technology related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Technology
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className=""
                              href="/category/typography"
                              title="Landing page design inspiration for Typography related sites, featuring only the best designs examples. Get inspired for your next design project."
                            >
                              Typography
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="column col-3">
                      <h4 className="menu-filter">
                        Colors
                      </h4>

                      <ul className="nav-color">
                        <li className="nav-item">
                          <a
                            className="aqua"
                            href="/color/aqua"
                            title="Landing page design inspiration for aqua related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            aqua
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="black"
                            href="/color/black"
                            title="Landing page design inspiration for black related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            black
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="blue"
                            href="/color/blue"
                            title="Landing page design inspiration for blue related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            blue
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="brown"
                            href="/color/brown"
                            title="Landing page design inspiration for brown related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            brown
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="gray"
                            href="/color/gray"
                            title="Landing page design inspiration for gray related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            gray
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="green"
                            href="/color/green"
                            title="Landing page design inspiration for green related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            green
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="maroon"
                            href="/color/maroon"
                            title="Landing page design inspiration for maroon related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            maroon
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="multiple colors"
                            href="/color/multiple-colors"
                            title="Landing page design inspiration for multiple colors related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            multiple colors
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="navy"
                            href="/color/navy"
                            title="Landing page design inspiration for navy related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            navy
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="olive"
                            href="/color/olive"
                            title="Landing page design inspiration for olive related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            olive
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="orange"
                            href="/color/orange"
                            title="Landing page design inspiration for orange related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            orange
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="pink"
                            href="/color/pink"
                            title="Landing page design inspiration for pink related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            pink
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="purple"
                            href="/color/purple"
                            title="Landing page design inspiration for purple related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            purple
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="red"
                            href="/color/red"
                            title="Landing page design inspiration for red related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            red
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="teal"
                            href="/color/teal"
                            title="Landing page design inspiration for teal related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            teal
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="ultra violet"
                            href="/color/ultra-violet"
                            title="Landing page design inspiration for ultra violet related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            ultra violet
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="white"
                            href="/color/white"
                            title="Landing page design inspiration for white related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            white
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="yellow"
                            href="/color/yellow"
                            title="Landing page design inspiration for yellow related sites, featuring only the best designs examples. Get inspired for your next design project."
                          >
                            yellow
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </li>

              <li>
                <a href="/learn/" className="navbar-menu">Learn 技术</a>
              </li>

              <li>
                <a href="/book/" className="navbar-menu">Books 书单</a>
              </li>

              <li>
                <a href="/freebies/" className="navbar-menu">🔥最新freestyle</a>
              </li>

              <li>
                <a href="/article/" className="navbar-menu">文章</a>
              </li>

              <li>
                <a
                  href="learn"
                  className="navbar-menu"
                  target="_blank"
                  title="The Best Resources For fronter In One Place"
                  >Resources 学习</a
                >
              </li>
            </ul>

            <form action="/search/" className="input-group input-inline search">
              <input
                className="form-input"
                type="search"
                placeholder="Search"
                autoComplete="off"
                name="q"
              />
              <i className="bg-search"></i>
            </form>
          </section>
        </header>

    </div>
    )
}
}