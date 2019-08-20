import React from "react";
import weix from "./weix.png";
import "./index.css";
import styled from "styled-components";
const FooterWrap = styled.div`
  min-width: 378px;
  color: #999;
  background-color: #333;
  box-shadow: inset 0px -1px 0px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  height: 290px;
  font-size: 13px;
  display: flex;
  align-items: center;

  .footer-container {
    margin: 0 auto;
  }
  .contact {
    word-spacing: 20px;
  }
`;
const Footer =  function Footer() {
    return (
      <FooterWrap>
        <div className="footer-container">
          <div className="introduce">
            about me
            <div className="weixin">
              <img src={weix} alt="" className="weix" width="50" />
              <p>欢迎进行技术交流</p>
            </div>
            <h3>jam-garden emotion-hole</h3>
            <p className="jam">学习 记录 生活</p>
            <p className="hole">
              Here you can express their feelings on the troubles, we can solve
              all problems you emotionally. Here you can meet all kinds of love,
              you can see that the emotional world of rich and colorful.
            </p>
          </div>
          <div className="contact">
            <i className="bg-weixin" />
            <span>逢凉野性</span> <i className="bg-weibo" />
            <span>橘紫</span> <i className="bg-bilibili" />
            <span>夏夏虾</span>
            <i className="bg-wangyiyun" />
            <span>jiam927</span>
          </div>
          <p>
            &copy; jiam<i className="bg-heart" /> {new Date().getFullYear()}
          </p>
        </div>
      </FooterWrap>
    );
  
}

export default Footer;
