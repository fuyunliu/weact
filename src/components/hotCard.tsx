import * as React from "react";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
    width: "25%",
    textAlign: "center",
};

class HotCategory extends React.Component {
    render() {
        return (
            <Card title="热门分类">
                <Card.Grid style={gridStyle} hoverable={false}>
                    Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        );
    }
}

class HotTag extends React.Component {
    render() {
        return (
            <Card title="热门标签">
                <Card.Grid style={gridStyle} hoverable={false}>
                    Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        );
    }
}

class HotTopic extends React.Component {
    render() {
        return (
            <Card title="热门话题">
                <Card.Grid style={gridStyle} hoverable={false}>
                    Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        );
    }
}

export default {
    HotCategory,
    HotTag,
    HotTopic,
};
