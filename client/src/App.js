import React,{Component} from 'react';
import Layout from './layout';
import Main from './components/Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    }
  }
  callAPI(){
    fetch("http://localhost:9001/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
  }
  componentDidMount(){
    this.callAPI()
  }
 render(){
  return (
    <div className="App" style={{minWidth:`378px`}}>
     <p className="APP-intro">{this.state.apiResponse}</p>
     <Layout>
     <Main />
     </Layout>
      
    </div>
  );
 }
}

export default App;
