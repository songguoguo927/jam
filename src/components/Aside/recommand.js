import React,{Component} from 'react';
import Image1 from './Image/music.jpg';
import Image2 from './Image/movie.jpg';
import Image3 from './Image/book.jpg';
import Image4 from './Image/zongyi.jpg';
export default class Recommand extends Component {
    render(){
      const datas = [
        {
          type:'music',
          itemName:'邓紫棋《光年之外》',
          itemImg:Image1
        },
        {
          type:'movie',
          itemName:'《调音师》',
          itemImg:Image2
        },
        {
          type:'book',
          itemName:'《javascript高级程序设计》',
          itemImg:Image3
        },
        {
          type:'zongyi',
          itemName:'向往的生活》',
          itemImg:Image4
        }
      ];
      const recommandItems = datas.map(data =>
       
        {
          console.log(data)
          return (
            <div className={`recommand-item ${data.type}`}>
            <img src={data.itemImg} alt="haibao" />
            <span>{data.itemName}</span>
          </div>
          )
        }
        );
        return (
            <div className="recommand aside-part">
          推荐板:音乐一首--电影一部--书一本--综艺最近<a href="jjj" className="more"
            >more ></a
          >
          {recommandItems}
          <div className="recommand-item music">
            <img src={Image1} alt="haibao" />
            <span>邓紫棋《光年之外》</span>
          </div>
          <div className="recommand-item movie">
            <img src={Image2} alt="haibao" />
            <span>《调音师》</span>
          </div>
          <div className="recommand-item book">
            <img src={Image3} alt="haibao" />
            <span>《javascript高级程序设计》</span>
          </div>
          <div className="recommand-item zongyi">
            <img src={Image4} alt="haibao" />
            <span>《向往的生活》</span>
          </div>
        </div>
  
        )
    }
}