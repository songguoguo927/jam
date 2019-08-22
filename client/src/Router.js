//App.js用于集合 整个应用上的组件;同时根据不同的路由渲染出中间部分不同的页面==》更名为Router.js
import React, { Component } from "react";
import Layout from "./layout";
import Main from "./pages/Main";
import Error from "./pages/404";
import ScrollToTop from './ScolltoTop'
import {
  BrowserRouter as BRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { asyncComponent, load } from "./utils";
class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    };
  }
  // callAPI(){
  //   fetch("http://localhost:9001/testAPI")
  //   .then(res=>res.text())
  //   .then(res=>this.setState({apiResponse:res}))
  // }
  // componentDidMount(){
  //   this.callAPI()
  // }
  render() {
    const isProd = process.env.REACT_APP_ENV === 'production';
    return (
      <BRouter basename={isProd ? '/jam' : '/'}>
        <ScrollToTop>
        <div className="App" style={{ minWidth: `378px` }}>
          {/* <p className="APP-intro">{this.state.apiResponse}</p> */}
          <Layout>
            <Switch>
            <Redirect from="/index.html" to="/" />
            <Route path="/" exact component={Main} />
            <Route
              path="/moodcard"
              exact
              component={asyncComponent(() => load("./pages/moodcard"))}
            />
            <Route path="/books" exact component={Error} />
            <Route path="/article" exact component={Error} />
            <Route
              path="/resource"
              exact
              component={asyncComponent(() => load("./pages/Resource"))}
            />
            <Route path="/skill" exact component={Error} />
            <Route path="*" exact component={Error} />
            <Redirect to="/" />
            </Switch>
          </Layout>
        </div>
        </ScrollToTop>
      </BRouter>
    );
  }
}

export default Router;
