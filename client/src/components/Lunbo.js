//Lunbo组件样式结构一体化
import React from "react";
import styled from "styled-components";
const Lunb = styled.div.attrs(props => ({
  color: props.color || "rebeccapurple"
}))`
  min-width: 378px;
  background-size: cover;
  height: calc(50vmin);
  color: #fff;
  text-align: center;
  font-weight: 600;
  position: relative;
  background: ${props => props.color};
  opacity: 0.8;
`;

const LunbTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Lunbo = props => {
  // console.log(props.color)
  return (
    <Lunb color={props.color}>
      <LunbTitle>
        <p>恭喜你 发现一枚宝藏up</p>
        <p>愿你不枉此行</p>
        <a href="jiaru">赶紧加入收藏夹</a>
      </LunbTitle>
    </Lunb>
  );
};
export default Lunbo;
