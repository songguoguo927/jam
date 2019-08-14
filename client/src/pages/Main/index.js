//main.js负责组织aside和articlelist的内容渲染 整合
import React, { Component } from "react";
import Aside from "../../components/Aside/aside";
import ArticleList from "../../components/ArticleList";
import { Link} from 'react-router-dom';
import "./index.css";
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      pageNums:{
          totalPages:5
        }
      
    }
    
  }
  //传递有几页，生成该长度的数组，数组的第一项从2开始
  //需求：最多展示5个，多余的用。。。TODO
  generateArr(nums){
    let arr =[]
    for(let i =2;i<nums+1;i++){
      arr.push(i)
    }
    return arr
  }
  
  render() {
    
    return (
      <div className="main">
        <Aside />
        <div className="content">
          <ArticleList />

          <div className="block-pagination-wrap">
            <div className="simple-pagination">
              <span className="total">{`共${this.state.pageNums.totalPages}页`}</span>
              <ul>
                <li className="disabled">
                  <Link to="#page-2" className="page-link next">
                    <i className="iconfont icon-mjiantou-copy" />
                  </Link>
                </li>
                <li className="active">
                  <span className="current">1</span>
                </li>
                {
                  this.generateArr(this.state.pageNums.totalPages).map((item,index)=>{
                    return <li key={index}><Link to={`/articlelist/${item}`} className="page-link">{item}</Link></li>
                  })
                }
                
                {/*
                <li className="jjj">
                  <span className="ellipse clickable">…</span>
                </li> */}
                
                <li>
                  <Link to="#page-2" className="page-link next">
                    <i className="iconfont icon-arrow-rt" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
