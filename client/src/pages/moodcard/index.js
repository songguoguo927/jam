//心情卡片页面，加入Lunbo组件进行组合  
import React from 'react';
import Lunbo from '../../components/Lunbo'
import Card from '../../components/Card'

import './index.css';
//Parsing error: Only expressions, functions or classes are allowed as the `default` export.
const Moodcard=(props)=>{
        return (  
          <>     
          <Lunbo color = "#337ab7"/>
          <div className="main-content">          
            <div className="cardSection">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>           
          </div>   
          </> 
        )   
}
export default Moodcard;