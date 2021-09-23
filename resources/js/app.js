/**
 * @file 布局文件
 * @author v_gengsiyu
 * @date 2019-08-28
 * */


export default {
    type: 'layout',
    content: [{
            type: 'breadcrumb',
            style: {
                background: '#E8ECF0'
            }
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
                            style: {
                                background: '#fff',
                                overflow: 'auto',
                                padding: '10px 20px',
                                height: '100%'
                            },
                            childrenHolder: true
                        }
                    }
                ]
            }
        },
    ]
};
