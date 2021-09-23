/**
 * @file 登录
 * @author v_gengsiyu
 * @date 2019-09-04
 * */

import uf from '@/uf';
import common from '../components/common';
import ENV from 'env';

// UUAP登录
let uuapLogin = () => {
    let login = common.getCookie('OMS_SESSION');
    if (login) {
        uf.utils.goto('oms');
    } else {
        common.gotoUuap();
    }
};

// passport登录
let passportLogin = () => {

    let login = common.getCookie('OMS_SESSION');
    if (login) {
        uf.utils.goto('oms');
    } else {
        common.gotoPassport();
    }
};

// 获取登录失败原因
function getRequest(name) {
    var url = window.location.hash;
    let theRequest = {};
    if (url.indexOf('?') !== -1) {
        let search = url.split('?')[1];
        theRequest[search.split('=')[0]] = decodeURIComponent(search.split('=')[1]);
        // theRequest[search.split('=')[0]] = decodeURI(search.split('=')[1]);
    }
    return theRequest[name];
}

export default {
    type: 'div',
    className: 'loginDiv',
    beforeCreate: e => {
        // 判断是否登录失败
        let msg = getRequest('err_msg');
        if (msg) {
            uf.utils.goto('/#/login');
            uf.notification.error({
                message: '登录出错',
                description: msg,
                duration: 8
            });
        }
    },
    content: [
        {
            type: 'div',
            className: 'topMenu'
        },
        {
            type: 'div',
            className: 'topText',
            content: {
                type: 'row',
                className: 'menuRow',
                content: [
                    {
                        type: 'col',
                        span: 6,
                        offset: 4,
                        content: 'OMS',
                        className: 'menuLeft'
                    },
                    {
                        type: 'col',
                        className: 'menuRight',
                        span: 6,
                        offset: 4,
                        content: [
                            {
                                type: 'icon',
                                mode: 'chrome'
                            },
                            ' 欢迎使用'
                        ]
                    },
                    {
                        type: 'col',
                        span: 2,
                        offset: 2,
                        className: 'menuLogin',
                        name: 'menuLogin',
                        beforeCreate: e => {
                            // 如果已经登录
                            let isLogin = common.getCookie('OMS_SESSION');
                            if (isLogin) {
                                uf('menuLogin').set({
                                    content: {
                                        type: 'button',
                                        // mode: 'primary',
                                        content: '进入控制台',
                                        onClick: e => {
                                            uf.utils.goto('/#/oms');
                                        }
                                    }
                                });
                            } else {
                                uf('menuLogin').set({
                                    content: {
                                        type: 'popover',
                                        trigger: 'click',
                                        body: {
                                            type: 'div',
                                            content: {
                                                type: 'div',
                                                content: [
                                                    {
                                                        type: 'button',
                                                        mode: 'primary',
                                                        content: 'uuap登录',
                                                        onClick: e => {
                                                            uuapLogin();
                                                        }
                                                    },
                                                    {
                                                        type: 'button',
                                                        mode: 'primary',
                                                        content: 'passport登录',
                                                        onClick: e => {
                                                            passportLogin();
                                                        }
                                                    },
                                                ]
                                            }
                                        },
                                        content: {
                                            type: 'button',
                                            mode: 'primary',
                                            size: 'large',
                                            ghost: true,
                                            icon: 'user',
                                            style: {
                                                margin: '0 10px 6px 0',
                                                color: '#fff',
                                                border: '1px solid #fff'
                                            },
                                            content: '登录'
                                        }
                                    }
                                });
                            }
                        }
                    }
                ]
            }
        },
        {
            type: 'div',
            className: 'text',
            content: [
                {
                    type: 'div',
                    content: 'OMS',
                    style: {
                        fontSize: '4rem'
                    }
                },
                {
                    type: 'div',
                    content: '数据中心现场综合平台',
                    style: {
                        fontSize: '2.5rem',
                        marginTop: '20px'
                    }
                },
                {
                    type: 'div',
                    content: '更快捷，更方便，更贴心',
                    style: {
                        fontSize: '1.5rem',
                        marginTop: '20px'
                    }
                }
            ]
        }
    ]
}
