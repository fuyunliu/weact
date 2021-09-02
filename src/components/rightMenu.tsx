import * as React from "react";
import { Menu, Avatar, Badge } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faComments,
    faBell,
    faFeather,
    faUserEdit,
    faCog,
    faPowerOff,
  } from "@fortawesome/free-solid-svg-icons";

const { SubMenu } = Menu;


class RightMenu extends React.Component {
    render() {
        return (
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
                icon={<Badge size="small" count={10} dot={true}><Icon icon={faBell} style={{ fontSize: "1.5em" }} /></Badge>}
              />

              <Menu.Item
                key="comments"
                icon={<Badge size="small" count={10} dot={true}><Icon icon={faComments} style={{ fontSize: "1.5em" }} /></Badge>}
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
        )
    }
}

export default RightMenu;
