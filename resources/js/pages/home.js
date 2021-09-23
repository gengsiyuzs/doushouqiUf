/**
 * @file 主页轮播，登录
 * @author v_gengsiyu
 * @date 2019-08-28
 * */

import uf from '@/uf';
import menu from '../components/menu';

// 用户案例
let fun = data => {
    let ary = [];
    data.forEach(i => {
        ary.push({
            type: 'col',
            span: 6,
            content: [
                {
                    type: 'div',
                    className: 'peopleNum',
                    content: i.content
                },
                {
                    type: 'div',
                    className: 'arrow'
                },
                {
                    type: 'div',
                    className: 'title',
                    content: i.title
                }
            ]
        });
    });
    return ary;
};
export default {
    type: 'div',
    className: 'homeLogin',
    content: [
        menu('home'),
        // backTop
        {
            type: 'backtop'
        },
        // 轮播图
        {
            type: 'carousel',
            autoplay: true,
            content: [
                {
                    type: 'div',
                    className: 'carousel_img1',
                    content: [
                        {
                            type: 'div',
                            className: 'bg'
                        },
                        {
                            type: 'div',
                            className: 'title',
                            content: [
                                {
                                    type: 'div',
                                    style: {
                                        marginTop: '1rem'
                                    },
                                    content: '数据中心现场综合平台'
                                },
                                {
                                    type: 'div',
                                    style: {
                                        marginTop: '1rem',
                                        fontSize: '1.3rem'
                                    },
                                    content: 'Data Center Site Integrated Platform'
                                },
                                {
                                    type: 'div',
                                    style: {
                                        marginTop: '1rem',
                                        fontSize: '1.8rem'
                                    },
                                    content: '高效，及时，安全'
                                }
                            ]
                        }
                    ]
                    /*content: {
                        type: 'tag',
                        className: 'tag_but',
                        content: '详情咨询',
                        color: 'pink'
                    }*/
                },
                {
                    type: 'div',
                    className: 'carousel_img2'
                },
                {
                    type: 'div',
                    className: 'carousel_img3'
                },
                {
                    type: 'div',
                    className: 'carousel_img4'
                }
            ]
        },
        // 了解我们
        {
            type: 'div',
            className: 'aboutUs',
            style: {
                padding: '3% 0px'
            },
            content: [
                {
                    type: 'div',
                    content: '了解我们的现场服务产品',
                    style: {
                        fontSize: '2rem',
                        textAlign: 'center'
                    }
                },
                {
                    type: 'div',
                    content: '您身边的数据产品，助力企业更方便',
                    style: {
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        fontWeight: 200,
                        marginTop: '20px'
                    }
                },
                {
                    type: 'div',
                    content: {
                        type: 'row',
                        style: {
                            marginBottom: '60px'
                        },
                        justify: 'space-between',
                        content: [
                            {
                                type: 'col',
                                offset: 2,
                                span: 9,
                                className: 'card_about',
                                content: {
                                    type: 'card',
                                    content: {
                                        type: 'div',
                                        className: 'clearFix',
                                        content: [
                                            {
                                                type: 'div',
                                                className: 'card_row',
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'fault_png png'
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'div',
                                                className: 'text',
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'title',
                                                        content: 'IT故障处理'
                                                    },
                                                    {
                                                        type: 'hr',
                                                        className: 'hr'
                                                    },
                                                    {
                                                        type: 'div',
                                                        content: [
                                                            {
                                                                type: 'p',
                                                                className: 'content',
                                                                content: '故障快速定位解决,缩短服务再交付时间'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                type: 'col',
                                offset: 2,
                                className: 'card_about',
                                span: 9,
                                content: {
                                    type: 'card',
                                    content: {
                                        type: 'div',
                                        className: 'clearFix',
                                        content: [
                                            {
                                                type: 'div',
                                                className: 'card_row',
                                                style: {
                                                    float: 'left'
                                                },
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'room_png png'
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'div',
                                                className: 'text',
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'title',
                                                        content: '物理访问控制'
                                                    },
                                                    {
                                                        type: 'hr',
                                                        className: 'hr'
                                                    },
                                                    {
                                                        type: 'div',
                                                        content: [
                                                            {
                                                                type: 'p',
                                                                className: 'content',
                                                                content: '7*24*365全天候值守，保障物理访问安全'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                type: 'col',
                                offset: 2,
                                className: 'card_about',
                                span: 9,
                                content: {
                                    type: 'card',
                                    content: {
                                        type: 'div',
                                        className: 'clearFix',
                                        content: [
                                            {
                                                type: 'div',
                                                className: 'card_row',
                                                style: {
                                                    float: 'left'
                                                },
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'operate_png png'
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'div',
                                                className: 'text',
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'title',
                                                        content: '资产管理'
                                                    },
                                                    {
                                                        type: 'hr',
                                                        className: 'hr'
                                                    },
                                                    {
                                                        type: 'div',
                                                        content: [
                                                            {
                                                                type: 'p',
                                                                className: 'content',
                                                                content: '资产全生命周期闭环管理，提升资产利用效率'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                type: 'col',
                                offset: 2,
                                className: 'card_about',
                                span: 9,
                                content: {
                                    type: 'card',
                                    content: {
                                        type: 'div',
                                        className: 'clearFix',
                                        content: [
                                            {
                                                type: 'div',
                                                className: 'card_row',
                                                style: {
                                                    float: 'left'
                                                },
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'asset_png png'
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'div',
                                                className: 'text',
                                                content: [
                                                    {
                                                        type: 'div',
                                                        className: 'title',
                                                        content: '资源交付&运维'
                                                    },
                                                    {
                                                        type: 'hr',
                                                        className: 'hr'
                                                    },
                                                    {
                                                        type: 'div',
                                                        content: [
                                                            {
                                                                type: 'p',
                                                                className: 'content',
                                                                content: '快速部署交付算力资源，不间断的运维保障'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        // 用户案例
        {
            type: 'div',
            className: 'userEg',
            content: [
                {
                    type: 'div',
                    className: 'egBackground'
                },
                {
                    type: 'div',
                    className: 'egText',
                    content: [
                        {
                            type: 'div',
                            content: '用户案例',
                            className: 'title'
                        },
                        {
                            type: 'div',
                            className: 'dataNum',
                            name: 'dataNum',
                            afterCreate: e => {

                            },
                            content: {
                                type: 'row',
                                justify: 'space-between',
                                content: fun([
                                    {
                                        title: '服务客户',
                                        content: '134552'
                                    },
                                    {
                                        title: '操作工单数',
                                        content: '134552'
                                    },
                                    {
                                        title: '稳定运行天数',
                                        content: '134552'
                                    },
                                    {
                                        title: '移动端累计使用天数',
                                        content: '134552'
                                    }
                                ])
                            }
                        }
                    ]
                }
            ]
        },
        // 联系我们
        {
            type: 'div',
            className: 'messageUs',
            content: [
                {
                    type: 'div',
                    content: '联系我们',
                    className: 'message'
                },
                {
                    type: 'div',
                    content: '竭诚为您服务',
                    className: 'server'
                }
            ]
        },
        // footer
        {
            type: 'footer',
            className: 'footer',
            content: [
                {
                    type: 'row',
                    gutter: 16,
                    style: {
                        textAlign: 'center'
                    },
                    content: [
                        {
                            type: 'col',
                            span: 8,
                            content: {
                                type: 'div',
                                className: 'logo',
                                content: [
                                    {
                                        type: 'h1',
                                        content: '数据中心现场综合平台'
                                    },
                                    {
                                        type: 'h1',
                                        content: 'Data Center Site Integrated Platform'
                                    },
                                    {
                                        type: 'avatar',
                                        className: 'qrcode',
                                        size: 'large',
                                        shape: 'square',
                                        // onClick: e => {
                                        //     window.location.href = 'baidu://message/?id=oms问题处理';
                                        // }
                                        // content: '暂未开通，敬请期待...',
                                        // src: '../assets/img/qrcode.png'
                                        // src: '../../../assets/png/qrcode.png'
                                    },
                                    {
                                        type: 'div',
                                        className: 'comment',
                                        content: '使用BaiduHi扫描二维码反馈问题'
                                    },
                                    {
                                        type: 'div',
                                        className: 'comment',
                                        content: '或BaiduHi客户端直接搜索【1640061】'
                                    }
                                ]
                            }
                        },
                        {
                            type: 'col',
                            span: 8,
                            content: {
                                type: 'div',
                                content: [
                                    {
                                        type: 'div',
                                        className: 'menu-title',
                                        content: '直达入口'
                                    },
                                    {
                                        type: 'menu',
                                        items: [
                                            {
                                                key: '1',
                                                link: `${window.location.origin}/#/workOrderCenter/operatorOrder`,
                                                title: '外包工单'
                                            },
                                            {
                                                key: '4',
                                                link: `${window.location.origin}/#/workOrderCenter/repairOrder`,
                                                title: '报修单'
                                            },
                                            {
                                                key: '2',
                                                link: `${window.location.origin}/#/errorMonitor`,
                                                title: '错误监控'
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            type: 'col',
                            span: 8,
                            content: {
                                type: 'div',
                                content: [
                                    {
                                        type: 'div',
                                        className: 'menu-title',
                                        content: '相关接口人'
                                    },
                                    {
                                        type: 'menu',
                                        items: [
                                            {
                                                key: '1',
                                                title: '操作工单：王帅伟',
                                                onClick: e => {
                                                    window.location.href = 'baidu://message/?id=cxywsw';
                                                }
                                            },
                                            {
                                                key: '2',
                                                title: '人员入室：李莉',
                                                onClick: e => {
                                                    window.location.href = 'baidu://message/?id=青春没有彩排ha';
                                                }
                                            },
                                            {
                                                key: '3',
                                                title: '设备入室：张利远',
                                                onClick: e => {
                                                    window.location.href = 'baidu://message/?id=飘血祝融';
                                                }
                                            },
                                            {
                                                key: '4',
                                                title: '故障报修：王帅伟',
                                                onClick: e => {
                                                    window.location.href = 'baidu://message/?id=cxywsw';
                                                }
                                            },
                                            {
                                                key: '5',
                                                title: '负责人：李莉',
                                                onClick: e => {
                                                    window.location.href = 'baidu://message/?id=青春没有彩排ha';
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                // {
                //     type: 'div',
                //     className: 'team',
                //     content: 'Leader：张利飞 · 李莉'
                // },
                {
                    type: 'div',
                    className: 'copyright',
                    content: `Copyright © 2010 - ${new Date().getFullYear()} by Baidu-BCOP-UMP All Rights Reserved.`
                }
            ]
        }
        /*{
            type: 'div',
            className: 'homeFooter',
            content: [
                {
                    type: 'div',
                    className: 'footer',
                    content: [
                        {
                            type: 'div',
                            className: 'mess',
                            content: [
                                {
                                    type: 'div',
                                    style: {
                                        height: '41%'
                                    }
                                },
                                {
                                    type: 'div',
                                    className: 'lineMess clearFix',
                                    content: [
                                        {
                                            type: 'a',
                                            content: '友情链接：',
                                            // href: ''
                                        },
                                        {
                                            type: 'a',
                                            content: '百度AI市场',
                                            // href: ''
                                        },
                                        {
                                            type: 'a',
                                            content: 'OMS群组',
                                            // href: ''
                                        },
                                        {
                                            type: 'a',
                                            content: '开发者',
                                            // href: ''
                                        },
                                        {
                                            type: 'a',
                                            content: '百度安全',
                                            // href: ''
                                        },
                                        {
                                            type: 'div',
                                            className: 'font',
                                            content: [
                                                {
                                                    type: 'div',
                                                    className: 'qqPng'
                                                },
                                                {
                                                    type: 'div',
                                                    className: 'phonePng'
                                                },
                                                {
                                                    type: 'div',
                                                    className: 'wechatPng'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'hr'
                        },
                        {
                            type: 'div',
                            className: 'tips',
                            content: [
                                {
                                    type: 'div',
                                    style: {
                                        height: '45%'
                                    }
                                },
                                {
                                    type: 'div',
                                    className: 'lineMess',
                                    content: 'Copyright © 2010 - 2020 by Baidu inc.VERSION: 1.0.23.0\n'
                                        + 'All Rights Reserved.'
                                }
                            ]
                        }
                    ]
                }
            ]
        }*/
    ]
};
