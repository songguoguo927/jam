//解决点击路由跳转屏幕仍留在上一个屏幕位置的问题
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);