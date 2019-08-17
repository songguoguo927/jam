import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  border-radius: 4px;
  border: 1px solid #eee;
  overflow: hidden;
  margin-right: 10px;
  padding: 20px;
  background:white;
  height: 200px;
  position:relative;
  :hover{
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
  }
  p.title{
    font-weight:300;
  }
  p.content{
    font-size: 0.8em;
    text-indent: 5px;
    margin-top: 20px;
    text-align: left;
  }
  /* 应用于Wrapper组件里的className为time的html标签 */
  .time{
    color: gray;
    font-size: 1em;
    position:absolute;
    right:10px;
    bottom:8px;
  }
`;


const Card = props => {
  //将来准备将数据传进来
  return (
    <CardWrap>
      <p className="title">first day</p>
      <p className="content">英语还没打卡(完蛋),先溜了.</p>
      <div className="time">2018.11.05</div>
    </CardWrap>
  );
};

export default Card;
