import React,{ Component } from 'react';
import weix from './weix.png';
import './index.css';

class Footer extends Component {
    render(){
        return  (<footer>
        <div className="footer-container">
            <div className="introduce">
                about me
                <div className="weixin">
                    <img src={weix} alt="" className="weix" width="50" />
                  <p>欢迎进行技术交流</p>
                </div>
                <h3>jam-garden emotion-hole</h3>
                <p className="jam">学习 记录 生活</p>
                <p className="hole">Here you can express their feelings on the troubles, we can solve all problems you emotionally. Here you can meet all kinds of love, you can see that the emotional world of rich and colorful.</p>
              </div>
              <div className="contact">
                <i className="bg-weixin"></i><span>逢凉野性</span> <i className="bg-weibo"></i
                ><span>橘紫</span> <i className="bg-bilibili"></i><span>夏夏虾</span>
                <i className="bg-wangyiyun"></i><span>jiam927</span>
              </div>
              <p>&copy; jiam<i className="bg-heart"></i> {new Date().getFullYear()}</p>
        </div>     
      </footer>)
    }
}

export default Footer;