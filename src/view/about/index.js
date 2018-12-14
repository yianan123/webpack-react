import React from 'react'
import { Tabs } from 'antd-mobile';
import ContentWrap from '../contentWrap/index.js';

class About extends React.Component {
  render() {
    const tabs = [
      { title: "热点", category: "news_hot",component:"NewsHot" },
      { title: "视频", category: 'video',component:"Video" },
      { title: "社会", category: 'news_society',component:"NewsSociety" },
      { title: "娱乐", category: 'news_entertainment',component:"NewsEntertainment" },
      { title: "问答", category: 'question_and_answer' },
      { title: " 科技", category: 'news_tech', },
      { title: " 汽车", category: 'news_car' },
      { title: " 财经", category: 'news_finance' },
      { title: "军事", category: 'news_military' },
      { title: "国际", category: 'news_world' },
    ];
    return (
      <div id='newsContent'>
        <Tabs  // swipeable='false'
        swipeable={false}
        useOnPan={false} tabs={tabs} prerenderingSiblingsNumber={3}  distanceToChangeTab={0.3}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          {tabs.map(e=><ContentWrap key={e.category} {...e}/>)}
        </Tabs>
      </div>
    );
  }
}

export default About