//准备将我所知道的学习，或其他很棒的资源做一个分享页
import React from "react";
import light from "./灯.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ListGroup = styled.div`
  background: #333;
  a {
    display: block;
    color: hsla(61, 90%, 48%, 0.931);
    text-decoration: none;
    margin-bottom: -1px;
    padding: 10px 15px;
  }
  a.active {
    background: hsla(70, 71%, 58%, 0.931);
    color: black;
  }
`;
const Aside = styled.div`
  width: calc(100vmin);
    margin: 20px auto;;
`;

const Resource = () => {
  return (
    <Aside>
      <img src={light} className="icon_img" alt="" />
      佛系更新
      <ListGroup>
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
      </ListGroup>
    </Aside>
  );
};

export default Resource;
