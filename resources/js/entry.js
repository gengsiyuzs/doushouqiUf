/**
 * @file 入口文件
 * @author v_gengsiyu
 * @date 2019-08-28
 * */
import Router from './route.js';
import uf from './uf.js';
import '../css/index.less';

uf.config({
    appName: 'oms-app',
});

uf.init(Router, '#oms-app');
