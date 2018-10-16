import React,{Component} from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import { TabBar } from 'antd-mobile'; 

import Bookrack from './component/Bookrack';
import Community from './component/Community';
import Discover from './component/Discover';
import Mine from './component/Mine';

import './App.css';
import './assets/sass/common.scss';


import octicons from 'octicons';

const allComponent = {
  Bookrack,
  Community,
  Discover,
  Mine
}


class App extends Component {
  constructor(){ 
      super();
      this.state = {
        tabs:[
          {
            text:'书架',
            path:'/bookrack',
            name:'Bookrack',
            icon:'repo'
          },
          {
            text:'社区',
            path:'/community',
            icon:'organization',
            name:'Community'
          },
          {
            text:'发现',
            path:'/discover',
            icon:'broadcast',
            name:'Discover'
          },
          {
            text:'我的',
            path:'/mine',
            icon:'octoface',
            name:'Mine'
          }
        ],
        currentTab:'bookrack'
      }
  }
  handleCurrentTab(tab){
    this.setState({
      currentTab:tab.name
    });
    let {history} = this.props;
    history.push(tab.path);
  }
  render() {
    return (
      <div className="App">
        <TabBar tintColor="#7340BF">
          {
            this.state.tabs.map(tab=>{
              return <TabBar.Item 
              title={tab.text} 
              key={tab.name} 
              icon={<div dangerouslySetInnerHTML={{__html:octicons[tab.icon].toSVG()}}/>}
              selectedIcon={<div className="selected" dangerouslySetInnerHTML={{__html:octicons[tab.icon].toSVG()}}/>}
              selected={tab.name === this.state.currentTab}
              onPress = {this.handleCurrentTab.bind(this,tab)}
              >
                <Switch>
                    <Route path={tab.path} component={allComponent[tab.name]}/>
                    <Redirect from="/" to="/home" exact />                        
                </Switch>
              </TabBar.Item>
            })
          }
        </TabBar>    
      </div>
    );
  }
}
App = withRouter(App);
export default App;
