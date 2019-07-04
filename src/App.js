import React from 'react';
import Layout from './layout';
import Main from './components/Main';

function App() {
  return (
    <div className="App" style={{minWidth:`378px`}}>
     
     <Layout>
     <Main />
     </Layout>
      
    </div>
  );
}

export default App;
