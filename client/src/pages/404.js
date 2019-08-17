//将目前所有路由跳转后，还未开发的页面跳转到该页
import React from 'react';
import styled from 'styled-components';
const Error = styled.div`
color:rebeccapurple;
opacity: 0.8;
font-weight:500;
text-align:center;
min-height: calc(80vmin);
line-height: calc(80vmin);
`;
const NotFound = () => {
    return ( 
        <Error>不好意思哦，您要访问的页面正处于紧急开发中哦</Error>
     );
}
 
export default NotFound;