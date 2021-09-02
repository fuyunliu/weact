import * as React from "react";
import {List, Avatar, Space, message, Spin, Popover, Tooltip, Tag } from "antd"
import InfiniteScroll from "react-infinite-scroller";
import * as articles from "../services/articles";
import { Article } from "../services/Interfaces"
import instance from "../services/http";
import UserCard from "./userCard";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faStar,
    faHeart,
    faHashtag,
    faComment,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')


const IconText = ({ icon, text, color }: {icon:any, text:any, color?:string}) => (
    <Space style={{color: color, cursor: "pointer"}} onClick={() => console.log(text)}>
        {icon}
        {text}
    </Space>
);


class ArticleList extends React.Component {
    state = {
        data: [],
        nextLink: null,
        loading: false,
        hasMore: true,
    };

    async componentDidMount() {
        const res = await articles.list();
        this.setState({
            data: res.results,
            nextLink: res.next,
        })
    }

    handleInfiniteOnLoad = async () => {
        let { data, nextLink } = this.state;
        this.setState({
            loading: true,
        });

        if (nextLink === null) {
            message.warning('数据加载完成');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }

        const res = await instance.get(nextLink!).then(res => res.data);
        data = data.concat(res.results);
        this.setState({
            data,
            loading: false,
            nextLink: res.next,
        });
    }

    render() {
        return (
            <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            >

            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.state.data}
                renderItem={
                    (item: Article) => (
                            <List.Item
                            key={item.id}
                            actions={[
                                <IconText icon={<Icon icon={faStar} />} text={item.collect_count} key="star" />,
                                <IconText icon={<Icon icon={faHeart} />} text={item.like_count} key="like" color={item.is_liked ? "Crimson" : undefined} />,
                                <IconText icon={<Icon icon={faComment} />} text={item.comment_count} key="comment" />,
                                <IconText icon={<Icon icon={faEye} />} text={item.view_count} key="view" />,
                                <IconText icon={<Icon icon={faPaperPlane} />} text='分享' key="share" />,
                            ]}
                        >
                        <List.Item.Meta
                        avatar={<Popover content={<UserCard userid={item.author.id} />} ><Avatar shape="square" src={item.author.avatar} /></Popover>}
                        title={<a href={item.slug}>{item.title}</a>}
                        description={
                        <Space>
                            <a href={item.author.username}>{item.author.nickname}</a>
                            发布在
                            <a href={item.category}>{item.category}</a>
                            <Tooltip title={item.created}><span>{dayjs(item.created).fromNow()}</span></Tooltip>
                        </Space>
                        }
                        />

                        <p>{item.excerpt}</p>

                        <Tag icon={<Icon icon={faHashtag} />} color='Thistle'> topic1</Tag>
                        <Tag icon={<Icon icon={faHashtag} />} color='Thistle'> topic2</Tag>
                        <Tag icon={<Icon icon={faHashtag} />} color='Thistle'> topic3</Tag>

                        </List.Item>)
                }
            >

            {this.state.loading && this.state.hasMore && (<Spin />)}

            </List>
            </InfiniteScroll>
        )
    }
}

export default ArticleList;
