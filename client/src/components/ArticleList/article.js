//用于渲染具体每个文章简介卡片的内容
import React from "react";

 const Article =function (props) { 
  //article是我们要的数据=》一篇文章的相关信息
  const {title,date,tags,shortcut } = props.articleItem;
    return (
      <div className="article">
        <h4>{title}</h4>
        <span><i className="iconfont icon-75" />{date}</span>
        <ul>
          <li className="fix-icon">
            <i className="iconfont icon-biaoqian" />
          </li>
          {
            tags.map((tag,index) => (
            <li key={index}>{tag}</li>
            ))
          }
        </ul>
        <p>{shortcut}</p>
        {/* TODO希望实现点击每个文章卡片的时候，传递对应的文章编号，并跳转页面，显示到具体的文章页 */}
        {/* <p>{props.articleItem.articleContent}</p> */}
      </div>
    );
  }
  export default Article;
