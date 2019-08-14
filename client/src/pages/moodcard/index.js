import React,{Component} from 'react';
import {Link } from "react-router-dom";

import './index.css';
export default class Moodcard extends Component{
    render(){
        return (       
          <div className="main-content">
            <aside>
              <div id="sidenav" className="">
                <img src="images/灯.png" className="icon_img" alt=""/>佛系更新
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
            </aside>
            <section>
              <div id="moodCard-container">
                <div className="item1 dailyMood">
                  <div className="title">
                    <h1>first day</h1>
                    <hr/>
                  </div>
                  <div className="moodCard-content">
                    <p>英语还没打卡(完蛋),先溜了.</p>
                  </div>
                  <div className="moodCard-tag">
                    <span
                      ><img
                        src="images/note.png"
                        className="icon_img"
                        alt=""
                      />2018.11.05</span
                    >
                  </div>
                </div>
    
               
              </div>
            </section>
          </div>    
        )
    }
}