import { Form, Input, Button, Row, Col, Tabs } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"
import Captcha from "./captcha";
import { getToken } from "../services/http";
const { TabPane } = Tabs;


const CaptchaLogin = ({ setToken }: { setToken: Function }) => {

    const onFinish = async (values: any) => {
        console.log("Success:", values);
        const token = await getToken(values);
        setToken(token);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                name="authname"
                rules={[
                    { required: true, message: "请输入账号！" },
                ]}
            >
                <Input size="large" placeholder="邮箱/手机号" prefix={<Icon icon={faUser} />} />
            </Form.Item>

            <Captcha />

            <Form.Item>
                <Button size="large" type="primary" htmlType="submit" block>
                    登入
                </Button>
            </Form.Item>
        </Form>
    );
};

const PasswordLogin = ({ setToken }: { setToken: Function }) => {

    const onFinish = async (values: any) => {
        console.log("Success:", values);
        const token = await getToken(values);
        setToken(token);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                name="authname"
                rules={[
                    { required: true, message: "请输入账号！" },
                ]}
            >
                <Input size="large" placeholder="用户名/邮箱/手机号" prefix={<Icon icon={faUser} />} />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: "请输入密码！" },
                ]}
            >
                <Input.Password
                    size="large"
                    placeholder="密码"
                    prefix={<Icon icon={faLock} />}
                    iconRender={(visible) =>
                        visible ? (
                            <Icon icon={faEye} />
                        ) : (
                            <Icon icon={faEyeSlash} />
                        )
                    }
                />
            </Form.Item>

            <Form.Item>
                <Button size="large" type="primary" htmlType="submit" block>
                    登入
                </Button>
            </Form.Item>
        </Form>
    );
};

export default function Login({ setToken }: { setToken: Function }) {
    return (
        <>
        <Row gutter={[0,200]}>
            <Col span={24}></Col>
            <Col span={9}></Col>
            <Col span={6}>

            <Tabs defaultActiveKey="CaptchaLogin">
                <TabPane tab="免密登入" key="CaptchaLogin">
                <CaptchaLogin setToken={setToken} />
                </TabPane>
                <TabPane tab="密码登入" key="PasswordLogin">
                <PasswordLogin setToken={setToken} />
                </TabPane>
            </Tabs>
            </Col>
            <Col span={9}></Col>
        </Row>
        </>
    );
}
