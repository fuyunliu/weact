import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Row, Col, Input, Space } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "antd/dist/antd.css";
import "./App.scss"
import LeftMenu from "./components/leftMenu";
import RightMenu from "./components/rightMenu";
import TabsCard from "./components/tabsCard";
import Login from "./components/login";
import useToken from "./components/useToken";
import * as hotCard from "./components/hotCard";


const { Search } = Input;

const { Header, Content, Footer } = Layout;


function WeApp() {
    return (
        <Layout>
        <Content>
            <Row>
                <Col span={3}></Col>
                <Col span={12}>
                <TabsCard />
                </Col>

                <Col span={6}>
                    <Space direction="vertical" size={10}>
                        <hotCard.HotCategory />
                        <hotCard.HotTag />
                        <hotCard.HotTopic />
                        <Footer>
                            Weapp ©2021 Created by fuyunLiu
                        </Footer>
                    </Space>
                </Col>
                <Col span={3}></Col>
            </Row>
        </Content>
    </Layout>
    )
  }

function Category() {
    return <h2>Category</h2>;
  }

function Tag() {
return <h2>Tag</h2>;
}

function Topic() {
return <h2>Topic</h2>;
}

function Poetry() {
    return <h2>Poetry</h2>;
    }



export default function App() {
    const {token, setToken} = useToken();

    if(!token) {
        return <Login setToken={setToken} />
      }

      return (
        <Router>
        <Layout>
            <Header style={{ background: "White" }}>
                <Row justify="space-between">
                    <Col>
                        <LeftMenu />
                    </Col>
                    <Col span={8}>
                        <Search
                            placeholder="Search..."
                            enterButton={<Icon icon={faSearch} />}
                            style={{ verticalAlign: "middle" }}
                        />
                    </Col>
                    <Col>
                        <RightMenu />
                    </Col>
                </Row>

            </Header>

        </Layout>

        <Switch>
            <Route path="/category">
            <Category />
            </Route>
            <Route path="/tag">
            <Tag />
            </Route>
            <Route path="/topic">
            <Topic />
            </Route>
            <Route path="/poetry">
            <Poetry />
            </Route>
            <Route path="/">
            <WeApp />
            </Route>
        </Switch>

        </Router>
    );
}
