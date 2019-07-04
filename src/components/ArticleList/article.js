import React,{Component} from 'react';

export default class Article extends Component {
    constructor(props){
        super()
    }
        // console.log(props.articleList);
        // props.articleList.map(article=>console.log(article))
        //article是我们要的数据=》一篇文章的相关信息
       
       render(){
        return (
            <div className="article">
          <h4>{this.props.articleList[0].title}</h4>
          <span><i className="iconfont icon-75"></i>{this.props.articleList[0].date}</span>
          <ul>
            <li className="fix-icon">
              <i className="iconfont icon-biaoqian"></i>
            </li>
            {/* 渲染标签 */}
            {
                this.props.articleList[0].tags.map(tag=><li>{tag}</li>)
            }
          </ul>
          <p>{this.props.articleList[0].shortcut}</p>
          <p>
          {this.props.articleList[0].articleContent}
          </p>
        </div>
        )
       }
    }
