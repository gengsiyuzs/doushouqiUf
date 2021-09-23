/**
 * @file 前端路由
 * @author v_gengsiyu
 * @date 2019-08-26
 * */

import Anmites from './components/anmite';

export default {
    type: 'router',
    routes: [{
        path: '/',
        component: Anmites,
        breadcrumbName: '斗兽棋'
    }, ]
};
