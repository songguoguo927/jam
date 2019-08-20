import React, { Component } from "react";
import Recommand from "./recommand";
const Aside=function (props){
 
    const datas = [
      {
        type: "category",
        title: "分类",
        contents: [
          {
            name: "web前端",
            nums: "52"
          },
          {
            name: "node",
            nums: "4"
          },
          {
            name: "移动端",
            nums: "42"
          },
          {
            name: "服务端",
            nums: "12"
          },
          {
            name: "计算机网络",
            nums: "92"
          },
          {
            name: "算法",
            nums: "62"
          }
        ]
      },
      {
        type: "time",
        title: "归档",
        contents: [
          {
            name: "2019",
            nums: "34"
          },
          {
            name: "2018",
            nums: "33"
          },
          {
            name: "2017",
            nums: "84"
          }
        ]
      },
      {
        type: "link",
        title: "链接",
        contents: [
          { name: "react官方文档",nums:null },
          { name: "MDN" ,nums:null},
          { name: "youtube",nums:null }
        ]
      }
    ];
    const asideParts = datas.map(data => {
      //   console.log(data);
      return (
        <div className={`aside-part ${data.type}`} key={data.type}>
          <h3>{data.title}</h3>

          <ul>
            {data.contents.map(content => {
                // console.log(content)
                // const haveNums = `${content.nums}`
                //TODO 做个判断，当content中nums为空 则不渲染对应的nums
                return(            
              <li key={content.name}>
                <a href="jjj">{content.name}</a>
              <span className="nums"> {`${content.nums}`==null ?  '' :`(${content.nums})` }</span> 
              </li>
                )
            }
            )}
          </ul>
        </div>
      );
    });
    return (
      <div className="aside">
        <div className="follow-me">
          关注我：
          <i className="iconfont icon-github" />
          <a href="https://github.com/songguoguo927/">Github</a>
        </div>
        {asideParts}        
        <Recommand />
      </div>
    );
  }

export default  Aside;