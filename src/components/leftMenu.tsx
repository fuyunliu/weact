import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faTag,
    faBlog,
    faBook,
    faFolderOpen,
    faBullhorn,
} from "@fortawesome/free-solid-svg-icons";


class LeftMenu extends React.Component {
    state = {
        current: "home",
    };

    handleClick = (e: { key: any }) => {
        console.log("click", e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[current]}
                mode="horizontal"
            >
                <Menu.Item key="home" icon={<Icon icon={faBlog} />}>
                <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key="category" icon={<Icon icon={faFolderOpen} />}>
                <Link to="/category">分类</Link>
                </Menu.Item>
                <Menu.Item key="tag" icon={<Icon icon={faTag} />}>
                <Link to="/tag">标签</Link>
                </Menu.Item>
                <Menu.Item key="topic" icon={<Icon icon={faBullhorn} />}>
                <Link to="/topic">话题</Link>
                </Menu.Item>
                <Menu.Item key="poetry" icon={<Icon icon={faBook} />}>
                <Link to="/poetry">诗歌</Link>
                </Menu.Item>
            </Menu>

);
    }
}

export default LeftMenu;
