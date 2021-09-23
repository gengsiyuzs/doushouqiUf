/**
 * @file app 配置文件
 * Created by gengsiyu
 */
define(function (uf, require) {
    let utils = require('./common/utils.js');
    return {
        type: 'layout',
        content: [
            {
                type: 'breadcrumb',
                style: {background: '#E8ECF0'}
            },
            {
                type: 'content',
                content: {
                    type: 'layout',
                    content: [
                      
                        {
                            type: 'content',
                            style: {
                                // background: '#108ee9',
                                // color: '#fff',
                                // textAlign: 'center',
                                // minHeight: '120px',
                                // lineHeight: '120px'
                            },
                            content: {
                                type: 'div',
                                style: {background: '#fff', overflow: 'auto', padding: '10px 20px', height: '100%'},
                                childrenHolder: true
                            }
                        }
                    ]
                }
            },
        ]
    };
});
