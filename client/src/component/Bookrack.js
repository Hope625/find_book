import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {List,Carousel,Badge,ActionSheet,NavBar,Icon } from 'antd-mobile';
import "../assets/sass/bookrack.scss";
import octicons from "octicons";
import { Tabs } from 'rmc-tabs/lib/Tabs.base';
const Item = List.Item;
const Brief = Item.Brief;
class Bookrack extends Component{
    constructor(props){    
        super();  
        this.state = {
            //轮播图         
            carouselImgs:[
                {
                    id:1,
                    href:'#',
                    imgurl:"./img/banner1.jpg",
                },
                {
                    id:2,
                    href:'#',
                    imgurl:"./img/banner2.jpg",   
                },
                {
                    id:3,
                    href:'#',
                    imgurl:"./img/banner3.jpg",   
                },
                {
                    id:4,
                    href:'#',
                    imgurl:"./img/banner4.jpg",   
                }
            ],
            booklist:[
                {
                    id:1,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },
                {
                    id:2,
                    img: './img/cover1.jpg',
                    title: '你好，旧时光',
                    author:'八月长安',
                    status:'连载'
                },
                {
                    id:3,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },
                {
                    id:5,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },
                {
                    id:6,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },
                {
                    id:7,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },
                {
                    id:0,
                    img: './img/default_add_bookrack.jpg',
                    title: '',
                    author:'',
                    status:''
                }
            ],
            open: true,
            clicked:'none'    
        }
    } 
    //操作
    // showActionSheet = (id) => {
    //     const BUTTONS = ['批量管理', '删除', '取消'];
    //     ActionSheet.showActionSheetWithOptions({
    //         options: BUTTONS,
    //         cancelButtonIndex: BUTTONS.length - 1,
    //         destructiveButtonIndex: BUTTONS.length - 2,
    //         maskClosable: true,
    //         'data-seed': 'logId',
    //         wrapProps,
    //     },
    //     (buttonIndex) => {
    //         this.setState({ clicked: BUTTONS[buttonIndex] });
    //         if(buttonIndex === 1){
    //             data.map((item,idx)=>{
    //                 if(item.id===id){
    //                     data.splice(idx,1);
    //                 }
    //             });
    //         }
    //     });
    // }
    render(){
        return (
        <div id="bookrack">
            {/* 轮播图 */}
            <header>
                {
                    
                }
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >               
                    <span>书架</span>
                </NavBar>         
            </header> 
            
            <main>
                <Carousel
                    autoplay={true}
                    infinite
                    >
                    {this.state.carouselImgs.map(img => (
                        <a
                            key={img.id}
                            href={img.href}
                            >
                            <img
                                src={img.imgurl} alt=""
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>   
                {/* 书架 */}
                <List >
                {
                    this.state.booklist.map(item=>{
                        return <Item 
                            key={item.id}
                            // arrow="horizontal"
                            multipleLine
                            thumb = { item.title!=''?
                            <div className="bookcover"><Badge text="5">
                                    <img src={item.img} />
                                </Badge></div>:<div className="bookcover"><img src={item.img} /></div>}
                            onClick={() => {}}
                            >
                            {item.title != '' ? <div className="bookinfo clearfix">
                                <div className="info fl">
                                    <div className="title">{item.title}</div>
                                    <Brief>{item.author}
                                        <span>|</span>
                                        {item.status}
                                    </Brief>
                                    </div>
                                    <div className="operate fr"><Icon type="ellipsis" size="lg"></Icon></div>
                                </div> : <div className='bookinfo'><Brief><div className="title">添加你喜欢的书籍</div></Brief></div>}                        
                            </Item>
                        })
                }
                </List>
            </main>
            <footer>
                <p>已收藏{this.state.booklist.length-1}本<span>|</span>总容量170本</p>
            </footer>
        </div>
        )
    }
}
export default Bookrack;