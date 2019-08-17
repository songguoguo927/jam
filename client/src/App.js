//App.js用于集合 整个应用上的组件;同时根据不同的路由渲染出中间部分不同的页面
import React, { Component } from "react";
import Layout from "./layout";
import Main from "./pages/Main";
import Moodcard from "./pages/moodcard";
import Error from './pages/404';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
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
    return (
      <Router>
      <div className="App" style={{ minWidth: `378px` }}>
        {/* <p className="APP-intro">{this.state.apiResponse}</p> */}
        <Layout>
        <Route path="/" exact component={Main}></Route>
        <Route path="/moodcard/" exact component={Moodcard}></Route>
        <Route path="/books/" exact component={Error}></Route>
        <Route path="/article/" exact component={Error}></Route>
        <Route path="/resource/" exact component={Error}></Route>
        <Route path="/skill/" exact component={Error}></Route>
        </Layout>
      </div>
    </Router>

    );
  }
}

export default App;
