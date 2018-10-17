import React,{Component} from 'react';

import {NavBar,Tabs, NoticeBar,Icon } from 'antd-mobile';

import octicons from 'octicons';
import "../assets/sass/community.scss"

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
                    id:"1",
                    comment:"看完这本书，虽然是大团圆结局，但还是有一点点心酸。大概从一出生开始，每个人就有苦衷。余周周的身世是她最敏感的地方，出生在这种环境中的人，总是自卑敏感，但是余周周不是，她是女侠，她是打不倒的星矢。她的成长是快乐的，妈妈教给了她温和，从未教给过她怨恨。她善良的看待世界，她似乎从小就一直活在动画片中。她看不到辛美香对她的嫉妒和厌恶，她看到的是辛美香隔着玻璃的那一抹温柔的微笑;她看不到沈屾对她八面玲珑的鄙视，她只是记住了沈屾一声轻轻的加油;也许是有女侠的一腔侠肝义胆的正义，她不计前嫌放弃了保送机会，去给予一个可爱可怜的女孩安慰。她不是没有自己的小心和痛苦，从小背着私生子的名声，在最最幸福的时刻失去了自己最爱的人，但她仍然柔和温暖，大概是从小有一份女侠的信念在吧凌翔茜美丽骄傲，但她又是多么脆弱。周沈然能不费吹灰之力拥有许多，可无论如何，他也成为不了一个普通的快乐少年。辛美香付出了多少努力成为一个优秀的辛锐，但是她她内心的那块阴影足以将她那美丽的屏障打碎。楚天阔多么完美但是他很累很辛苦。他们伤害别人，却把自己罩在了阴影下。相比之下，余周周不那么痛苦纠结，或许她早就懂了。周周，你就是应该如此幸福的。",
                    time:"10月7日 14:00",
                    novel_title:'你好，旧时光',
                    autor:'八月长安',
                    novel_img:'./img/cover1.jpg',
                    user:'小星星',
                    photo:'./img/photo1.png',
                    star_num:217,
                    comment_num:80
                }
            ]
        }
    }
    render(){
        return (
            <div id="community">
                <header>
                    <NavBar mode="light"
                        >
                        <span>社区</span>
                    </NavBar>
                </header> 
                <Tabs tabs={this.state.communityTabs}
                    initialPage={0}
                    tabBarPosition="top"
                    animated={false}
                    tabBarBackgroundColor="#615E79"
                    swipeable={false}
                    tabBarUnderlineStyle={{
                        width:'0',
                        height:'0'    
                    }}
                    renderTab={tab => <span>{tab.text}</span>}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <main>
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
                                                        <span  dangerouslySetInnerHTML={{__html:octicons[activity.icon].toSVG()}} />
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
                                    
                                </div>
                            </div>                        
                        </main>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of forth tab
                    </div>
                </Tabs>
                
            </div>
        )
    }
}
export default Community;