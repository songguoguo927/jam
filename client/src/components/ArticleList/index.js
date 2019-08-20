//此文件用于组织主页的文章卡片简介
import React,{Component} from 'react';
import Article from './article'
export default class ArticleList extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            articleList:[
                {
                    title:'react hook——你可能不是“我”所认识的useEffect',
                    tags:['布局','设计','html','css','React'],
                    date:'2019-07-04',
                    shortcut:'一大段文章---简介',
                    articleContent:` 据说，这个hook可以模拟className组件的三个生命周期 前言
                    官网已经介绍过，这里再啰嗦一次。 useEffect
                    是一个用来执行副作用hook，第一个参数传入一个函数，每一次render之后执行副作用和清除上一次副作用，该函数的返回值就是清除函数。第二个参数是一个数组，传入内部的执行副作用函数需要的依赖，当这几个依赖有一个要更新，effect里面也会重新生成一个新的副作用并执行副作用。如果没有更新，则不会执行。如果第二个参数不传，那么就是没有说明自己有没有依赖，那就是每次render该函数组件都执行。
                    很明显， useEffect 第一个参数可以模仿 didmount 、 didupdate
                    ，它的返回值可以模仿 willunmount CLASSNaclassName组件生命周期模拟
                    "模仿生命周期，useEffect第二个参数传个空数组，无依赖，只执行一次，相当于didmount。如果要区分生命周期，不传第二个参数，每次都会跑，相当于didupdate。加个mount标记一下，里面用if判断一下，即可以达到模拟生命周期的效果"
                    很多人都会想到这个办法模拟，于是我们试一下看看： let mount;
                  `
                },
                {
                    title:'第二篇文章标题--父子组件通信',
                    tags:['React','js'],
                    date:'2019-07-04',
                    shortcut:'一大段文章---简介',
                    articleContent:` 实现多篇文章 articleList中渲染多篇文章，article中渲染具体每篇文章的内容`
                }
            ]
        }
    }
    render(){
        // console.log(this.state.articleList)
        const {articleList} = this.state;
        //获取文章数据
        return (
            articleList.map((articleItem,index) => <Article articleItem={articleItem} key={index}/> )        
        )
    }
}