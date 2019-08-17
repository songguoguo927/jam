//心情卡片页面，加入Lunbo组件进行组合  
import React from 'react';
import Lunbo from '../../components/Lunbo'
// import {Link } from "react-router-dom";
import Card from '../../components/Card'
// import light from './images/灯.png'

import './index.css';
//Parsing error: Only expressions, functions or classes are allowed as the `default` export.
const Moodcard=(props)=>{
        return (  
          <>     
          <Lunbo color = "#337ab7"/>
          <div className="main-content">
            {/* <aside>  准备抽离aside成另一个页面
              <div id="sidenav" className="">
                <img src={light} className="icon_img" alt=""/>佛系更新
                <div className="list-group">
                  <Link to="/" className="active">日推</Link>
                  <Link to="/">电影-《她》</Link>
                  <Link to="/">日推音乐</Link>
                  <Link to="/">综艺-《奇葩说》</Link>
                  <Link to="/">日推美食</Link>
                  <Link to="/">日推书籍</Link>
                  <Link to="/">芝士力量</Link>
                  <Link to="/">听不腻</Link>
                  <Link to="/">影荒N刷</Link>
                  <Link to="/">fun</Link>
                </div>
              </div>
            </aside> */}
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