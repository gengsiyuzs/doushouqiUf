/** @file 环境切换变量*/

export default process.env.NODE_ENV === 'development' ? {
    /*线下环境为 development  线上环境为 production*/
    env: process.env.NODE_ENV,
    domain: window.location.origin,
    // loginServer: 'http://10.57.23.57:2001',
    // 李莉
    loginServer: 'http://yq01-sys-atm0.yq01.baidu.com:8098',
    // 帅伟
    // loginServer: 'http://yq01-sys-ump-ur-dev16.epc.baidu.com:8089',
    // loginServer: 'http://bjyz-sys-idp-dev09.epc.baidu.com:8088',
    // uuap转发后端地址
    uuapServer: '/api/login/uuap?type=web',
    // passport转发后端地址
    passportServer: '/api/login/pass?type=web',
    // uuap登录地址
    uuap: 'https://itebeta.baidu.com',
    // passport登录地址
    passport: 'https://passport.qatest.baidu.com',
    // appKey
    appKey: 'uuapclient-1-373HicmCzBnWn2UVoQCp',
    // tpl
    tpl: 'ump',
    // ajax前缀
    ajaxBaseUrl: '/app'
} : {
    env: process.env.NODE_ENV,
    domain: window.location.origin,
    loginServer: 'http://new-oms.baidu.com',
    uuapServer: '/api/login/uuap?type=web',
    passportServer: '/api/login/pass?type=web',
    uuap: 'https://uuap.baidu.com',
    passport: 'https://passport.baidu.com',
    appKey: 'uuapclient-423927971724689408-KbMjr',
    tpl: 'ump',
    ajaxBaseUrl: '/app'
};
