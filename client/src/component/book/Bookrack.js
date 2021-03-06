import React,{Component} from 'react';
import { List,Carousel,Badge,ActionSheet,NavBar,Icon,Grid } from 'antd-mobile';
import "../../assets/sass/bookrack.scss";
import octicons from 'octicons';

const Item = List.Item;
const Brief = Item.Brief;
let wrapProps;
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
                },
                {
                    id:5,
                    href:'#',
                    imgurl:"./img/banner5.jpg",   
                }
            ],
            emptyBooklist:
            {
                id:8,
                img: './img/default_add_bookrack.jpg',
                title: '',
                author:'',
                status:''
            },           
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
                    id:9,
                    img: './img/cover1.jpg',
                    title: '你好，旧时光',
                    author:'八月长安',
                    status:'连载'
                },
                {
                    id:10,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },,
                {
                    id:11,
                    img: './img/cover1.jpg',
                    title: '你好，旧时光',
                    author:'八月长安',
                    status:'连载'
                },
                {
                    id:12,
                    img: './img/cover2.jpg',
                    title: '微微一笑很倾城',
                    author:'顾漫',
                    status:'完结'
                },,
                {
                    id:13,
                    img: './img/cover1.jpg',
                    title: '你好，旧时光',
                    author:'八月长安',
                    status:'连载'
                }
            ],
            //动作面板
            open: true,
            clicked:'none',
            //滚动吸顶
            navTop:false,
            //改变布局
            isHorizontal:false,
            bookgrid:[]    
        }
        this.$carousel = null;
        this.offsetTop = 0;
        this.ele = null;
        this.sTop = 0;
    } 
    componentWillMount(){
        //添加书籍应放在书单的最后
        //var booklist = this.state.booklist;
        // booklist.push(this.state.emptyBooklist);
        //this.st=etState({
        //     booklist:booklist
        // })
    }
    componentDidMount(){           
        let that = this;
        this.ele = document.querySelector('.am-tabs-pane-wrap');
        this.$carousel = this.refs.carousel;
           
        if(this.$carousel){
          this.offsetTop = this.$carousel.offsetTop;
          this.ele.addEventListener('scroll',this.handleScroll.bind(that));
        }
        var bookgrid = [];
        this.state.booklist.map(item=>{   
            bookgrid.push({
                icon:item.img,
                text:item.title
            });
        });
        this.setState({
            bookgrid:bookgrid
        })
    }

    handleScroll(){
        var sTop = this.ele.scrollTop;
        if(sTop >= this.offsetTop){
            this.setState({
                navTop:true
            })
        }    
        if(sTop < this.offsetTop){
            this.setState({
                navTop:false
            })
        }
      }
    //操作
    showActionSheet = (id) => {
        const BUTTONS = ['批量管理', '删除', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
        (buttonIndex) => {
            this.setState({ clicked: BUTTONS[buttonIndex] });
            //删除
            if(buttonIndex === 1){
                this.state.booklist.map((item,idx)=>{
                    if(item.id === id){
                        this.state.booklist.splice(idx,1);
                    }
                })
            }
        });
    }
    //改变布局
    changeLayout(){
        let currentStatus = this.state.isHorizontal;
        this.setState({
            isHorizontal: !currentStatus
        });
    }
    changeToDiscover(){
        let {history} = this.props;
        history.replace('/discover');
    }
    getNavtop(){
        this.offsetTop = this.refs.carousel.offsetTop;       
    }
    render(){
        return (
        <div id="bookrack" >
            {/* 轮播图 */}
            {
                this.state.navTop ? 
                    <header>               
                        <NavBar className="am-navbar-navtop"
                            mode="light"
                            rightContent={[
                                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                                <div className="format-list" key="1" dangerouslySetInnerHTML={{__html:octicons.grabber.toSVG()}} onClick={this.changeLayout.bind(this)}/>
                            ]}                   
                            >               
                            <span>书架</span>
                        </NavBar>
                    </header>  :
                    <header>    
                        <NavBar
                            mode="light"
                            rightContent={[
                                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                                <div className="format-list" key="1" dangerouslySetInnerHTML={{__html:octicons.grabber.toSVG()}} onClick={this.changeLayout.bind(this)}/>
                            ]}                   
                        >      
                        </NavBar>                       
                    </header>
            }            
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
                {this.state.isHorizontal === false ?
                    <div className="booklist" 
                    ref="carousel"
                    onLoad={this.getNavtop.bind(this)}
                    >
                    <List>
                    {
                        
                        this.state.booklist.map(item=>{
                            return <Item 
                                key={item.id}
                                multipleLine
                                thumb = { item.title!=''?
                                <div className="bookcover"><Badge text="5">
                                        <img src={item.img}  alt=""/>
                                    </Badge></div>:<div className="bookcover" onClick={this.changeToDiscover.bind(this)}><img src={item.img} alt="" /></div>}
                                // onClick={() => {}}
                                >
                                {item.title != '' ? <div className="bookinfo clearfix">
                                    <div className="info fl">
                                        <div className="title">{item.title}</div>
                                            <Brief>{item.author}
                                                <span>|</span>
                                                {item.status}
                                            </Brief>
                                        </div>
                                        <span className="operate fr"><Icon type="ellipsis" size="lg" onClick={this.showActionSheet.bind(this,item.id)}></Icon></span>
                                    </div> : <div className='bookinfo'><Brief><div className="title">添加你喜欢的书籍</div></Brief></div>}                        
                                </Item>
                            })
                        }
                    </List>
                </div> :
                <div className="bookgrid">{
                        <Grid data={this.state.bookgrid} columnNum="3" hasLine={false} square={false} className="not-square-grid" />
                    }
                </div>
                }
            </main>
            <footer>
                <p>已收藏{this.state.booklist.length-1}本<span>|</span>总容量170本</p>
            </footer>
        </div>
        )
    }
}
export default Bookrack;