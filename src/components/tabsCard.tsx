import * as React from "react";
import { Card, Space } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faFan,
    faFire,
    faBolt,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import ArticleList from "./articleList";

const tabList = [
    {
        key: 'follow',
        tab: <Space><Icon icon={faLightbulb} /><span>关注</span></Space>,
    },
    {
        key: 'home',
        tab: <Space><Icon icon={faBolt} /><span>推荐</span></Space>,
    },
    {
        key: 'pin',
        tab: <Space><Icon icon={faFan} /><span>想法</span></Space>,
    },
    {
        key: 'hot',
        tab: <Space><Icon icon={faFire} /><span>热榜</span></Space>,
    },
]

const contentList: {[index: string]: any} = {
    hot: <ArticleList />,
    pin: <ArticleList />,
    home: <ArticleList />,
    follow: <ArticleList />,
}

class TabsCard extends React.Component {
    state = {
        key: 'home',
    };

    onTabChange = (key: any, type: any) => {
        console.log(key, type);
        this.setState({[type]: key});
    };

    render() {
        return (
            <Card
            bordered={false}
            style={{ marginTop: "10px", marginRight: "10px" }}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={
                key => {this.onTabChange(key, 'key');}
            }
            >
                {contentList[this.state.key]}

            </Card>
        )
    }
}

export default TabsCard
