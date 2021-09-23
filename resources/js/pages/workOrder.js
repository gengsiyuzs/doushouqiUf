/**
 * @file 工单中心布局
 * @author v_gengsiyu
 * @date 2019-08-30
 * */

import uf from '@/uf';

export default {
    type: 'div',
    content: [
        {
            type: 'div',
            content: [
                {
                    type: 'layout',
                    content: [
                        {
                            type: 'sider',
                            width: 200,
                            onCollapse: e => {
                                if (!e) {
                                    uf('workContent').set({style: {width: 'calc(100% - 200px)'}});
                                } else {
                                    uf('workContent').set({style: {width: 'calc(100% - 60px)'}});
                                }
                            },
                            name: 'siderWork',
                            style: {
                                background: '#fff',
                                paddingRight: '10px'
                            },
                            content: {
                                type: 'menu',
                                mode: 'inline',
                                name: 'workSider',
                                beforeCreate: e => {
                                    let url = window.location.hash;
                                    let index = url.lastIndexOf('\/');
                                    url = url.substring(index + 1, url.length);
                                    // 获取权限
                                    let authority = uf.get('authority') || {};
                                    if (JSON.stringify(authority) === '{}') {
                                        uf.notification.info({
                                            message: '获取权限出错，请重新登录尝试。'
                                        });
                                    }
                                    // 外包工单子链接
                                    let orderChildren = [
                                        {
                                            key: 'operatorOrder',
                                            _target: 'blank',
                                            title: '操作工单',
                                            link: '/workOrderCenter/operatorOrder'
                                        }
                                    ];
                                    // 判断权限
                                    if (authority.peopleEntry) {
                                        orderChildren = orderChildren.concat([
                                            {
                                                key: 'roomOrder',
                                                _target: 'blank',
                                                title: '人员入室',
                                                link: '/workOrderCenter/roomOrder'
                                            }
                                        ])
                                    }
                                    if (authority.equipmenEntry) {
                                        orderChildren = orderChildren.concat([
                                            {
                                                key: 'equipmentOrder',
                                                _target: 'blank',
                                                title: '设备入室',
                                                link: '/workOrderCenter/equipmentOrder'
                                            }
                                        ])
                                    }
                                    uf('workSider').set({
                                        items: [
                                            {
                                                key: 'toggleCollapsed',
                                                icon: 'menu-fold',
                                                title: '折起/展开',
                                                onClick: e => {
                                                    uf('siderWork').toggleCollapsed();
                                                }
                                            },
                                            {
                                                key: 'sub1',
                                                icon: 'user',
                                                title: '外包工单',
                                                childItems: orderChildren
                                            },
                                            {
                                                key: 'sub2',
                                                icon: 'tool',
                                                title: '故障报修',
                                                childItems: [
                                                    {
                                                        key: 'repairOrder',
                                                        _target: 'blank',
                                                        title: [
                                                            '报修单列表'/*,
                                                            {
                                                                type: 'span',
                                                                style: {
                                                                    display: 'inline-block',
                                                                    marginRight: '15px'
                                                                },
                                                                content: {
                                                                    type: 'badge',
                                                                    count: 19,
                                                                    style: {
                                                                        // color: '#99c6f8',
                                                                        backgroundColor: '#87d068',
                                                                        marginLeft: 15
                                                                    }
                                                                }
                                                            }*/
                                                        ],
                                                        link: '/workOrderCenter/repairOrder'
                                                    }
                                                ]
                                            }
                                        ]
                                    });
                                    uf('workSider').set({defaultSelectedKeys: [url]});
                                },
                                inlineCollapsed: false,
                                followRoute: true,
                                theme: 'dark',
                                style: {height: '100%'}
                            }
                        },
                        {
                            type: 'card',
                            childrenHolder: true,
                            name: 'workContent',
                            style: {
                                background: '#fff',
                                padding: 10,
                                minHeight: 280,
                                width: 'calc(100% - 200px)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
