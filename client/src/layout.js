//layout.js规划整个页面布局，头部，lunbo，尾部固定不动；中间部分根据路由进行填充相应的内容
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout(props) {
  return (
    <div className="container-all">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
