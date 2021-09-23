/**
 * @file 整个应用的路由配置
 * Created Date: 2018-05-21 14:11:07
 */
define(function () {
    return {
        type: 'router',
        routes: [
            {
                path: '/',
                component: 'app',
                breadcrumbName: '斗兽棋',
                indexRedirect: 'anmite',
                childRoutes: [
                    {
                        path: 'anmite',
                        breadcrumbName: '斗兽棋',
                        component: 'components/anmite'
                    }
            
                ]
            }
        ]
    };
});
