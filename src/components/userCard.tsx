import { useState, useEffect } from "react";
import { Card, Button, Avatar, Row, Col, Statistic, Skeleton, Space } from "antd";
import * as users from "../services/users"
import { User } from "../services/Interfaces"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faComments,
    faLongArrowAltLeft,
    faLongArrowAltRight,
    faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";


const { Meta } = Card;


const UserCard = ({userid}:{userid:number}) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        async function getUser() {
            const params = {
                'expand': 'is_following,is_followed,following_count,follower_count,article_count,post_count'
            }
            const data = await users.get(userid, params);
            setUser(data);
        }
        getUser();
    }, [userid]);

    if (!user) return <Card style={{width:300}}><Skeleton loading active avatar></Skeleton></Card>

    const FollowButton = () => {
        if (!user.is_following && !user.is_followed) {
            return <Button type="primary"><Space><Icon icon={faPlus} />关注</Space></Button>
        } else if (user.is_following && !user.is_followed) {
            return <Button type="primary" ghost><Space><Icon icon={faLongArrowAltRight} />已关注</Space></Button>
        } else if (!user.is_following && user.is_followed) {
            return <Button type="primary" ghost><Space><Icon icon={faLongArrowAltLeft} />被关注</Space></Button>
        } else {
            return <Button type="primary" ghost><Space><Icon icon={faExchangeAlt} />互相关注</Space></Button>
        }
    }

    return (
    <Card
    bordered={false}
    bodyStyle={{paddingBottom:"12px"}}
    actions={[
            <FollowButton />,
            <Button><Space><Icon icon={faComments}></Icon>聊天</Space></Button>,
        ]}
    >
        <Meta
        avatar={<Avatar size={48} shape="square" src={user.avatar} />}
        title={user.nickname}
        description={user.about_me}
        />

    <Card type="inner" bordered={false} bodyStyle={{paddingBottom: "unset"}}>
    <Row gutter={24}>
        <Col span={6}>
        <Statistic title="动态" value={user.post_count} />
        </Col>
        <Col span={6}>
        <Statistic title="文章" value={user.article_count} />
        </Col>
        <Col span={6}>
        <Statistic title="关注" value={user.following_count} />
        </Col>
        <Col span={6}>
        <Statistic title="粉丝" value={user.follower_count} />
        </Col>
    </Row>
    </Card>

    </Card>
  )}


export default UserCard;
