import { useState, useCallback, useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { message } from "antd";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons"


const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


const Captcha = () => {
    const phoneName: string = 'authname';

    const [count, setCount] = useState(60);
    const [timing, setTiming] = useState(false);
    const [loading, setLoading] = useState<boolean>();

    const onGetCaptcha = useCallback(async (mobile: string) => {
        try {
            setLoading(true);
            await waitTime(1000);
            message.success(`手机号 ${mobile} 验证码发送成功！`);
            setLoading(false);
            setTiming(true);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, []);

    useEffect(() => {
        let interval: number = 0;
        if (timing) {
            interval = window.setInterval(() => {
                setCount((preSecond) => {
                    if (preSecond <= 1) {
                        setTiming(false);
                        clearInterval(interval);
                        // 重置秒数
                        return 60;
                    }
                    return preSecond - 1;
                })
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timing]);

    return (
        <Form.Item shouldUpdate>

        {({getFieldValue, validateFields}) => (

            <Row justify="space-between" gutter={8}>
        <Col span={16}>
            <Form.Item noStyle name="captcha" rules={[{ required: true, message: "请输入验证码！" }]}>
            <Input
                size="large"
                type="number"
                placeholder="验证码"
                prefix={<Icon icon={faEnvelope} />}
            />
            </Form.Item>
        </Col>
        <Col span={8}>
            <Button size="large" block disabled={timing} loading={loading}
                icon={timing ? <Icon icon={faClock} /> : null}
                onClick={async () => {
                    try {
                        await validateFields([phoneName].flat(1) as string[]);
                        const mobile = getFieldValue([phoneName].flat(1) as string[]);
                        await onGetCaptcha(mobile);
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
            {timing ? `${count}` : '获取验证码'}
            </Button>
        </Col>
        </Row>
        )}
    </Form.Item>
    )
}

export default Captcha;
