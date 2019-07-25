import React, { Component } from "react";

export default class Article extends Component {
  constructor(props) {
    super();
  }

  // props.articleList.map(article=>console.log(article))
  //article是我们要的数据=》一篇文章的相关信息

  render() {
    return (
      // <div>{this.props.articleItem.title}</div>
      // console.log(this.props.articleItem)
      <div className="article">
        <h4>{this.props.articleItem.title}</h4>
        <span>
          <i className="iconfont icon-75" />
          {this.props.articleItem.date}
        </span>
        <ul>
          <li className="fix-icon">
            <i className="iconfont icon-biaoqian" />
          </li>
          {/* 渲染标签 */}
          {this.props.articleItem.tags.map((tag,index) => (
            <li key={index}>{tag}</li>
          ))}8
        </ul>
        <p>{this.props.articleItem.shortcut}</p>
        <p>{this.props.articleItem.articleContent}</p>
      </div>
    );
  }
}
