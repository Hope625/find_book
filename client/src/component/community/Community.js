import React,{Component} from 'react';

import {NavBar,Tabs, NoticeBar,Icon } from 'antd-mobile';

import octicons from 'octicons';
import "../../assets/sass/community.scss"

class Community extends Component{
    constructor(props){
        super();
        let url = props.match.url;
        this.state = {
            communityTabs:[
                {
                    name:'allcontent',
                    path: url + '/allcontent',
                    text:'全部内容'
                },
                {
                    name:'booklist',
                    path: url + '/booklist',
                    text:'书单专区'
                },
                {
                    name:'comments',
                    path: url + '/comments',
                    text:'书评专区'
                },
                {
                    name:'interest',
                    path: url +'/interest',
                    text:'闲文志趣'
                }
            ],
            selectedTab: 'allcontent',
            hidden: false,
            fullScreen: false,
            activities:[
                {
                    img:"./img/newactivity1.jpg",
                    theme:"饭团十月邀请好友，赢好礼",
                    status:'进行中',
                    icon:'clock',
                    href:"#",
                    backgroundColor:"#C55058",
                },
                {
                    img:"./img/newactivity1.jpg",
                    theme:"饭团操作指南",
                    status:'长期',
                    icon:'star',
                    href:"#",
                    backgroundColor:'#C55058',
                }
            ],
            weekTitle:{
                img:'./img/week_title.jpg',
                title:'学生时期那些温暖你心的事'
			},
			recomendBooks:[
				{
					introduce:'很棒的设定，很nice的书,能看到真的是一种惊喜。',
					imgs:[
						'./img/nice1.jpg',
						'./img/nice2.jpg',
						'./img/cover1.jpg',
					],
					url:'#',
					id:1
				},
				{
					introduce:'宠文，都看过。',
					imgs:[
						'./img/chongwen1.jpg',
						'./img/chongwen2.jpg',
						'./img/cover2.jpg',
					],
					url:'#',
					id:2
				},
				{
					introduce:'很棒的设定，很nice的书,能看到真的是一种惊喜。',
					imgs:[
						'./img/nice1.jpg',
						'./img/nice2.jpg',
						'./img/cover1.jpg',
					],
					url:'#',
					id:3
				},
				{
					introduce:'宠文，都看过。',
					imgs:[
						'./img/chongwen1.jpg',
						'./img/chongwen2.jpg',
						'./img/cover2.jpg',
					],
					url:'#',
					id:4
				},
				{
					introduce:'很棒的设定，很nice的书,能看到真的是一种惊喜。',
					imgs:[
						'./img/nice1.jpg',
						'./img/nice2.jpg',
						'./img/cover1.jpg',
					],
					url:'#',
					id:5
				},
				{
					introduce:'宠文，都看过。',
					imgs:[
						'./img/chongwen1.jpg',
						'./img/chongwen2.jpg',
						'./img/cover2.jpg',
					],
					url:'#',
					id:6
				},
				{
					introduce:'很棒的设定，很nice的书,能看到真的是一种惊喜。',
					imgs:[
						'./img/nice1.jpg',
						'./img/nice2.jpg',
						'./img/cover1.jpg',
					],
					url:'#',
					id:7
				},
				{
					introduce:'宠文，都看过。',
					imgs:[
						'./img/chongwen1.jpg',
						'./img/chongwen2.jpg',
						'./img/cover2.jpg',
					],
					url:'#',
					id:8
				},
			] ,
            selectedComments:[
                {
                    id:1,
                    comment:"看完这本书，虽然是大团圆结局，但还是有一点点心酸。大概从一出生开始，每个人就有苦衷。余周周的身世是她最敏感的地方，出生在这种环境中的人，总是自卑敏感，但是余周周不是，她是女侠，她是打不倒的星矢。她的成长是快乐的，妈妈教给了她温和，从未教给过她怨恨。她善良的看待世界，她似乎从小就一直活在动画片中。她看不到辛美香对她的嫉妒和厌恶，她看到的是辛美香隔着玻璃的那一抹温柔的微笑;她看不到沈屾对她八面玲珑的鄙视，她只是记住了沈屾一声轻轻的加油;也许是有女侠的一腔侠肝义胆的正义，她不计前嫌放弃了保送机会，去给予一个可爱可怜的女孩安慰。她不是没有自己的小心和痛苦，从小背着私生子的名声，在最最幸福的时刻失去了自己最爱的人，但她仍然柔和温暖，大概是从小有一份女侠的信念在吧凌翔茜美丽骄傲，但她又是多么脆弱。周沈然能不费吹灰之力拥有许多，可无论如何，他也成为不了一个普通的快乐少年。辛美香付出了多少努力成为一个优秀的辛锐，但是她她内心的那块阴影足以将她那美丽的屏障打碎。楚天阔多么完美但是他很累很辛苦。他们伤害别人，却把自己罩在了阴影下。相比之下，余周周不那么痛苦纠结，或许她早就懂了。周周，你就是应该如此幸福的。",
                    time:"10月7日 14:00",
                    novel_title:'你好，旧时光',
                    author:'八月长安',
                    novel_img:'./img/cover1.jpg',
                    username:'小星星',
                    photo:'./img/photo1.png',
                    star_num:217,
                    comment_num:80
                }
            ],
            findSelected:
                {
                    comments:[
                        {
                            id:1,
                            comment:'很好',
                            time:'10月18日 19:37',
                            novel_title:'你好，旧时光',
                            author:'八月长安',
                            username:'随风',
                            photo:'./img/photo1.png',
                            novel_img:'./img/cover1.jpg',
                            star_num: 184,
                            comment_num:47
                        },
                        {
                            id:2,
                            comment:'666',
                            time:'10月18日 19:37',
                            novel_title:'你好，旧时光',
                            author:'八月长安',
                            username:'静静',
                            photo:'./img/photo1.png',
                            novel_img:'./img/cover1.jpg',
                            star_num: 184,
                            comment_num:47
                        }
                    ],
                    booklist:[
                        {
                            id:1,
                            introduce:'宠文，都看过。',
                            description:'原来的书没动，新增两本快穿。',
                            imgs:[
                                './img/chongwen1.jpg',
                                './img/chongwen2.jpg',
                                './img/cover2.jpg',
                            ],
                            bgImg:'./img/find-book1.jpg',
                            url:'#',
                            recom_user:'侃侃',
                            recom_user_photo:'./img/photo1.png',
                            total_recom:43,
                            collection:368,
                            comment_user:'沧澜',
                            comment_content:'好',
                            commment_book:'你好，旧时光',
                            comment_book_cover:'./img/cover2.jpg',
                            comment_book_author:'八月长安',
                            comment_like_num:0,
                            comments_num:0,
                            comment_time:'7月10日 23:45'
                        },
                        {
                            id:2,
                            introduce:'宠文，都看过。',
                            description:'原来的书没动，新增两本快穿。',
                            imgs:[
                                './img/chongwen1.jpg',
                                './img/chongwen2.jpg',
                                './img/cover2.jpg',
                            ],
                            bgImg:'./img/find-book1.jpg',
                            url:'#',
                            recom_user:'侃侃',
                            recom_user_photo:'./img/photo1.png',
                            total_recom:43,
                            collection:368,
                            comment_user:'沧澜',
                            comment_content:'好',
                            commment_book:'你好，旧时光',
                            comment_book_cover:'./img/cover2.jpg',
                            comment_book_author:'八月长安',
                            comment_like_num:0,
                            comments_num:0,
                            comment_time:'7月10日 23:45'
                        }
                    ],
                    weektheme:[
                        {
                            id:1,
                            title:"学生时期那些温暖你的事",
                            publish_time:"10月17日 13:41",
                            content:'学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事',
                            publish_user:'官方小号',
                            answer_user:'忽而一下',
                            answer_user_num:3,
                            publish_user_photo:"./img/photo1.png",
                            publish_like:5,
                            pubilsh_comments:13
                        },
                        {
                            id:2,
                            title:"学生时期那些温暖你的事",
                            publish_time:"10月17日 13:41",
                            content:'学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事学生时期那些温暖你的事',
                            publish_user:'官方小号',
                            answer_user:'忽而一下',
                            answer_user_num:3,
                            publish_user_photo:"./img/photo1.png",
                            publish_like:5,
                            publish_comments:13
                        }
                    ]
                }
            ,
            realFindSelected:[

            ]
        };
    }
    componentWillMount(){       
        var find = this.state.findSelected;
        var real = this.state.realFindSelected;
        for(var i=0; i< find.comments.length; i++){
            real[i]={
                id:i,
                comments:{},
                booklist:{},
                weektheme:{},
            };
            real[i].comments = find.comments[i];
            real[i].booklist = find.booklist[i];
            real[i].weektheme = find.weektheme[i];
        }
        this.setState({
            realFindSelected:real
        })
    }
    componentDidMount(){
        var ele = document.querySelector(".am-tabs-tab-bar-wrap");
        ele.classList.add("am-tabs-tab-bar-wrap-fixed");
    }
    render(){
        return (
            <div id="community">
                <header className="header-fixed" >
                    <NavBar mode="light">
                        <span>社区</span>
                    </NavBar>
                </header>
                <main>
                <Tabs tabs={this.state.communityTabs}
                    initialPage={0}
                    tabBarPosition="top"
                    animated={false}
                    tabBarBackgroundColor="#615E79"
                    tabBarPosition='top'
                    swipeable={false}
                    tabBarUnderlineStyle={{
                        width:'0',
                        height:'0'    
                    }}
                    renderTab={tab => <span>{tab.text}</span>}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#F1F2F4' }}>                       
                            <div className="allcontent">
                                <NoticeBar icon="" mode="link" action={<a><span>去看看<Icon type="right"></Icon></span></a>} >最新活动</NoticeBar>
                                <ul className="activities">
                                    {
                                        this.state.activities.map(activity=>{
                                            return <li key={activity.theme}>
                                                <a>
                                                    <img src={activity.img} alt="" />
                                                    <div className="activity-status" style={{backgroundColor:activity.status === '长期' ? '#87BB79' : '#fff',fill:activity.status === '长期' ? '#fff' : '#000',
                                                    color:activity.status === '长期' ? '#fff' : '#000'}}>
                                                        <span dangerouslySetInnerHTML={{__html:octicons[activity.icon].toSVG()}} />
                                                        {activity.status}
                                                    </div>
                                                    <p className="activity-theme" style={{backgroundColor:activity.backgroundColor}}>{activity.theme}</p>
                                                </a>
                                            </li>
                                        })
                                    }
                                </ul>
                                <div className="week-title">
                                    <img src={this.state.weekTitle.img} alt="" />
                                </div>
								<div className="recommend-book">
									<h4>书单推荐</h4>
                                    <div className="all-booklist">
                                        <ul>
                                            {
                                                this.state.recomendBooks.map(book=>{
                                                    return <li key={book.id}>
                                                        <a>
                                                            <div className="recom-book-imgs">
                                                                {
                                                                    book.imgs.map((src,idx)=>{
                                                                        return <img src={src} alt="" key={idx}/>
                                                                    })
                                                                }                                                           
                                                            </div> 
                                                            <p className="recom-book-introduce">{book.introduce}</p>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
								</div>
                                <div className="selected-comments">
                                    <h4>书评精选</h4>
                                    <div className="find-selected">
                                        <p className="comment-content" style={{'WebkitBoxOrient': 'vertical'}}>{this.state.selectedComments[0].comment}</p>
                                        <p className="comment-time">{this.state.selectedComments[0].time}</p>
                                        <div className="comment-novel">
                                            <img src={this.state.selectedComments[0].novel_img} alt="" />
                                            <div className="comment-novel-info">
                                                <p className="comment-novel-title">{this.state.selectedComments[0].novel_title}</p>
                                                <p className="comment-novel-author">{this.state.selectedComments[0].author}</p>
                                            </div>
                                        </div>
                                        <div className="user-comment-info">
                                            <div className="comment-user" >
                                                <img src={this.state.selectedComments[0].photo} alt="" />
                                                <span>{this.state.selectedComments[0].username}</span>
                                            </div>
                                            <div className="comments-info">
                                                <span dangerouslySetInnerHTML={{__html:octicons['thumbsup'].toSVG()}}></span><span className="comments-like-num">{this.state.selectedComments[0].star_num}</span>
                                                <span dangerouslySetInnerHTML={{__html:octicons['comment'].toSVG()}}></span><span className="comments-comment-num">{this.state.selectedComments[0].comment_num}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="all-find-selected">
                                    <h4>饭团精选</h4>
                                    {
                                        this.state.realFindSelected.map(real=>{
                                            return (
                                            <div className="find-selected" key={real.id}>
                                                <div className="find-comment">
                                                    <p className="comment-content" style={{'boxOrient': 'vertical'}}>{real.comments.comment}</p>
                                                    <p className="comment-time">{real.comments.time}</p>
                                                    <div className="comment-novel">
                                                        <img src={real.comments.novel_img} alt="" />
                                                        <div className="comment-novel-info">
                                                            <p className="comment-novel-title">{real.comments.novel_title}</p>
                                                            <p className="comment-novel-author">{real.comments.author}</p>
                                                        </div>
                                                    </div>
                                                    <div className="user-comment-info">
                                                        <div className="comment-user" >
                                                            <img src={real.comments.photo} alt="" />
                                                            <span>{real.comments.username}</span>
                                                        </div>
                                                        <div className="comments-info">
                                                            <span dangerouslySetInnerHTML={{__html:octicons['thumbsup'].toSVG()}}></span>
                                                            <span className="comments-like-num">{real.comments.star_num}</span>
                                                            <span dangerouslySetInnerHTML={{__html:octicons['comment'].toSVG()}}></span>
                                                            <span className="comments-comment-num">{real.comments.comment_num}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="find-booklist">
                                                    <div className="find-book-info" style={{background:"url(" + real.booklist.bgImg +")",backgroundSize:'cover'}}>
                                                        <div className="find-book-introduce">
                                                            <h5>{real.booklist.introduce}</h5>
                                                            <p className="find-book-decription">{real.booklist.description}</p>
                                                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                                                <div className="find-book-user">
                                                                    <img src={real.booklist.recom_user_photo} alt="" />
                                                                    <span>{real.booklist.recom_user}</span>
                                                                </div>
                                                                <div className="find-book-star">
                                                                    <span>{real.booklist.total_recom}本</span>
                                                                    <span>{real.booklist.collection}收藏</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="find-book-imgs">
                                                            <ul>
                                                                {
                                                                    real.booklist.imgs.map((img,idx)=>{
                                                                        return <li key={idx}><img src={img} alt="" /></li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="find-book-comment">
                                                        <p className="comment-content" style={{'WebkitBoxOrient': 'vertical'}}>
                                                            {real.booklist.comment_content}
                                                        </p>
                                                        <p className="comment-time">{real.booklist.comment_time}</p>
                                                        <div className="comment-novel">
                                                            <img src={real.booklist.comment_book_cover} alt="" />
                                                            <div className="comment-novel-info">
                                                                <p className="comment-novel-title">{real.booklist.commment_book}</p>
                                                                <p className="comment-novel-author">{real.booklist.comment_book_author}</p>
                                                            </div>
                                                        </div>
                                                        <div className="user-comment-info">
                                                            <div className="comment-user" >
                                                                <img src={real.booklist.recom_user_photo} alt="" />
                                                                <span>{real.booklist.recom_user}</span>
                                                            </div>
                                                            <div className="comments-info">
                                                                <span dangerouslySetInnerHTML={{__html:octicons['thumbsup'].toSVG()}}></span><span className="comments-like-num">{this.state.selectedComments[0].star_num}</span>
                                                                <span dangerouslySetInnerHTML={{__html:octicons['comment'].toSVG()}}></span><span className="comments-comment-num">{this.state.selectedComments[0].comment_num}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="find-weektheme">
                                                    <h4>{real.weektheme.title}</h4>
                                                    <p className="theme-publish-time">{real.weektheme.publish_time}</p>
                                                    <p className="theme-content">
                                                        {real.weektheme.content}
                                                    </p>
                                                    {
                                                        real.answer_user != '' ?
                                                        <div className="answer-info">
                                                            <div className="answer-user-num">
                                                                <a href="#">{real.weektheme.answer_user}</a>等
                                                                <span>{real.weektheme.answer_user_num}</span>个用户 回复了这条评论
                                                            </div>
                                                            <div className="answer-user-info" style={{display:'flex',justifyContent:'space-between'}}>
                                                                <div className="comment-user" >
                                                                    <img src={real.weektheme.publish_user_photo} alt="" />
                                                                    <span>{real.weektheme.publish_user}</span>
                                                                </div>
                                                                <div className="comments-info">
                                                                    <span dangerouslySetInnerHTML={{__html:octicons['thumbsup'].toSVG()}}></span><span className="comments-like-num">{real.weektheme.publish_like}</span>
                                                                    <span dangerouslySetInnerHTML={{__html:octicons['comment'].toSVG()}}></span><span className="comments-comment-num">{real.weektheme.publish_comments}</span>
                                                                </div>
                                                            </div>
                                                        </div> :
                                                        ''
                                                    }                                                    
                                                </div>
                                            </div>
                                            )
                                       })
                                    }
                                </div>
                                
                            </div>                                                
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <div className="allbook">
                            {
                                this.state.findSelected.booklist.map(book=>{
                                    return (
                                    <div key={book.id} className="find-book-info" >
                                        <div className="find-book-introduce">
                                            <h5>{book.introduce}</h5>
                                            <p className="find-book-decription">{book.description}</p>
                                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                                <div className="find-book-user">
                                                    <img src={book.recom_user_photo} alt="" />
                                                    <span>{book.recom_user}</span>
                                                </div>
                                                <div className="find-book-star">
                                                    <span>{book.total_recom}本</span>
                                                    <span>{book.collection}收藏</span>
                                                </div>
                                            </div>                                           
                                        </div>
                                        <div className="find-book-imgs">
                                            <ul>
                                                {
                                                    book.imgs.map((img,idx)=>{
                                                        return <li key={idx}><img src={img} alt="" /></li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',height: '100%', backgroundColor: '#fff' }}>
                        <div className="allcomment">
                            {                           
                                this.state.findSelected.comments.map(com=>{
                                    return (                                   
                                        <div className="find-selected" key={com.id}>
                                            <div className="find-comment">
                                                <p className="comment-content" style={{'boxOrient': 'vertical'}}>{com.comment}</p>
                                                <p className="comment-time">{com.time}</p>
                                                <div className="comment-novel">
                                                    <img src={com.novel_img} alt="" />
                                                    <div className="comment-novel-info">
                                                        <p className="comment-novel-title">{com.novel_title}</p>
                                                        <p className="comment-novel-author">{com.author}</p>
                                                    </div>
                                                </div>
                                                <div className="user-comment-info">
                                                    <div className="comment-user" >
                                                        <img src={com.photo} alt="" />
                                                        <span>{com.username}</span>
                                                    </div>
                                                    <div className="comments-info">
                                                        <span dangerouslySetInnerHTML={{__html:octicons['thumbsup'].toSVG()}}></span>
                                                        <span className="comments-like-num">{com.star_num}</span>
                                                        <span dangerouslySetInnerHTML={{__html:octicons['comment'].toSVG()}}></span>
                                                        <span className="comments-comment-num">{com.comment_num}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                   
                                    )
                                })  
                            }
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of forth tab
                    </div>
                </Tabs>
                </main>
            </div>
        )
    }
}
export default Community;