import * as React from "react";
import * as ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.scss";
import TabsCard from "./card";
import { Layout, Menu, Row, Col, Avatar, Input } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faFolderOpen,
  faTag,
  faUser,
  faComments,
  faBell,
  faFeather,
  faBullhorn,
  faBook,
  faSearch,
  faUserEdit,
  faCog,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const { SubMenu } = Menu;
const { Search } = Input;

const { Header, Content, Footer } = Layout;


class App extends React.Component {
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
          首页
        </Menu.Item>
        <Menu.Item key="category" icon={<Icon icon={faFolderOpen} />}>
          分类
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<Icon icon={faTag} />} title="标签">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="topic" icon={<Icon icon={faBullhorn} />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            话题
          </a>
        </Menu.Item>
        <Menu.Item key="poetry" icon={<Icon icon={faBook} />}>
          诗歌
        </Menu.Item>
      </Menu>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header style={{ background: "#fff" }}>
        <Row justify="space-between">
          <Col>
            <App />
          </Col>
          <Col span={8}>
            <Search
              placeholder="Search..."
              enterButton={<Icon icon={faSearch} />}
            />
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item
                key="feather"
                icon={
                  <Icon
                    icon={faFeather}
                    color="dodgerblue"
                    style={{ fontSize: "1.5em" }}
                  />
                }
              />
              <Menu.Item
                key="bell"
                icon={<Icon icon={faBell} style={{ fontSize: "1.5em" }} />}
              />
              <Menu.Item
                key="comments"
                icon={<Icon icon={faComments} style={{ fontSize: "1.5em" }} />}
              />
              <SubMenu
                key="user"
                icon={<Avatar shape="square" icon={<Icon icon={faUser} />} />}
              >
                <Menu.ItemGroup>
                  <Menu.Item key="user-profile" icon={<Icon icon={faUser} />}>
                    我的主页
                  </Menu.Item>
                  <Menu.Item
                    key="user-creator"
                    icon={<Icon icon={faUserEdit} />}
                  >
                    创作中心
                  </Menu.Item>
                  <Menu.Item key="user-setting" icon={<Icon icon={faCog} />}>
                    设置
                  </Menu.Item>
                  <Menu.Item
                    key="user-logout"
                    icon={<Icon icon={faPowerOff} />}
                  >
                    退出
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Header>

    <Layout>
        <Content>
        <Row>
            <Col span={3}></Col>
            <Col span={12}>
                <TabsCard />
            </Col>

            <Col span={6}>
            </Col>
            <Col span={3}></Col>
        </Row>

    </Content>
    </Layout>

    <Footer>Footer</Footer>

    </Layout>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
