import React from "react";

 const Article =function (props) { 
  // props.articleList.map(article=>console.log(article))
  //article是我们要的数据=》一篇文章的相关信息
    return (
      // <div>{this.props.articleItem.title}</div>
      // console.log(this.props.articleItem)
      <div className="article">
        <h4>{props.articleItem.title}</h4>
        <span>
          <i className="iconfont icon-75" />
          {props.articleItem.date}
        </span>
        <ul>
          <li className="fix-icon">
            <i className="iconfont icon-biaoqian" />
          </li>
          {/* 渲染标签 */}
          {props.articleItem.tags.map((tag,index) => (
            <li key={index}>{tag}</li>
          ))}8
        </ul>
        <p>{props.articleItem.shortcut}</p>
        <p>{props.articleItem.articleContent}</p>
      </div>
    );
  }
  export default Article
