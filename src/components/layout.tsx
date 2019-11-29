import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
import { connect } from 'react-redux'
import { test1 } from '../redux-files/action-creators'
import { Carousel } from 'antd';
import './index.less'
const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
const Item = Menu.Item
interface IState {
    collapsed?: boolean,
}

interface IProps {
    props?: string | number | object | Function
}

class SiderDemo extends React.Component<IState, IProps> {
    constructor(props: IState) {
        super(props)
    }
    flag :number = 123
    componentDidMount() {
        console.log(this.props)
        const result = this.FunctionTest()
        console.log(result)
    }
    FunctionTest():Promise<number|string|object|boolean>{
        //返回一个Promise，它内部的返回值是number|string|object|boolean其中的一种
        return Promise.resolve(false)
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Item>
                        <Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Item key="3">Tom</Item>
                            <Item key="4">Bill</Item>
                            <Item key="5">Alex</Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Item key="6">Team 1</Item>
                            <Item key="8">Team 2</Item>
                        </SubMenu>
                        <Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <Carousel autoplay>
                            <div className='slide'>TypeScript</div>
                            <div className='slide'>React</div>
                            <div className='slide'>Redux</div>
                            <div className='slide'>Ant-Design</div>
                        </Carousel>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
            </Footer>
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = (state: object | string | number | any) => ({ test: state.test1 });
const mapDispatchToProps = (dispatch: Function) => {
    return {
        /*flag()这个方法是自己随意命名，这里的命名跟传入的props中的方法名是一致的,
         在上面生命周期函数或者自定义方法中通过this.props.flag()调用触发对应的reducer调用从而生成状态更新store中的数据
         */
        flag(data: string) {
            const action = test1(data)
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);

//TS不支持修饰器，所以这里使用最传统的Redux写法。
/*
JavaScript版本的简写版
export default connect(
    (state)=>({test:state.test1}), 这里也可以写null,表示不使用store统一管理的任何状态
    (test1) //这里想要使用创建什么action对象直接写名字就行，在import 引入对应的action函数 直接在生命周期
    函数或者自定义方法中  test1()调用即可
)(SiderDemo)

*/