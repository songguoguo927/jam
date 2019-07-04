import React,{Component} from 'react';
import Aside from '../Aside/aside'
import ArticleList from '../ArticleList';
import './index.css';
export default class Main extends Component {
    render(){
        return(
            <div className="main">
      <Aside />
      <div className="content">
        <ArticleList />
       
        <div className="block-pagination-wrap">
          <div
            className="simple-pagination"
          >
            <span className="total">共 93 页</span>
            <ul>
              <li className="disabled"><a href="#page-2" className="page-link next"><i className="iconfont icon-mjiantou-copy"></i></a></li>
              <li className="active"><span className="current">1</span></li>
              <li><a href="#page-2" className="page-link">2</a></li>
              <li><a href="#page-3" className="page-link">3</a></li>
              <li><a href="#page-4" className="page-link">4</a></li>
              <li><a href="#page-5" className="page-link">5</a></li>
              <li className="jjj"><span className="ellipse clickable">…</span></li>
              <li><a href="#page-92" className="page-link">92</a></li>
              <li><a href="#page-93" className="page-link">93</a></li>
              <li><a href="#page-2" className="page-link next"><i className="iconfont icon-arrow-rt"></i></a></li>
            </ul>
          </div>
        </div>
      
    </div>
        
        </div>
        )
    }
}