import React,{Component} from 'react';

import {NavBar,Tabs } from 'antd-mobile';

class Community extends Component{
    constructor(){
        super();
        this.state = {
            communityTabs:[
                {
                    name:'allcontent',
                    path:'/allcontent',
                    text:'全部内容'
                },
                {
                    name:'booklist',
                    path:'/booklist',
                    text:'书单专区'
                },
                {
                    name:'comments',
                    path:'/comments',
                    text:'书评专区'
                },
                {
                    name:'interest',
                    path:'/interest',
                    text:'闲文志趣'
                }
            ],
            selectedTab: 'allcontent',
            hidden: false,
            fullScreen: false,
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
                    <Tabs tabs={this.state.communityTabs}
                        initialPage={1}
                        tabBarPosition="top"
                        renderTab={tab => <span>{tab.text}</span>}
                        >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                    </Tabs>
                </header>
            </div>
        )
    }
}
export default Community;