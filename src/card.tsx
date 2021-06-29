import * as React from "react";
import { Card, Space } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faThumbtack,
    faFire,
    faBolt,
    faLightbulb
} from "@fortawesome/free-solid-svg-icons";

const tabListNoTitle = [
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
        tab: <Space><Icon icon={faThumbtack} /><span>动态</span></Space>,
    },
    {
        key: 'hot',
        tab: <Space><Icon icon={faFire} /><span>热榜</span></Space>,
    },
]

const contentListNoTitle: {[index: string]: any} = {
    hot: <p>hot content</p>,
    home: <p>home content</p>,
    follow: <p>follow content</p>,
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
            tabList={tabListNoTitle}
            activeTabKey={this.state.key}
            onTabChange={
                key => {this.onTabChange(key, 'key');}
            }
            >
                {contentListNoTitle[this.state.key]}

            </Card>
        )
    }
}

export default TabsCard
