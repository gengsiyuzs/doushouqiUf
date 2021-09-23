/**
 * @file 错误监控文件
 * @author v_gengsiyu
 * @date 2020-06-01
 * */

import uf from '../uf';

window.onerror = (message, source, line, num, info) => {
    let errObj = window.localStorage.errObj ? JSON.parse(window.localStorage.errObj) : {};
    let errDate = window.localStorage.errDate ? JSON.parse(window.localStorage.errDate) : {};
    // 统计此行代码包从次数
    if (errObj[line]) {
        errObj[line].num++;
        errObj[line].errTime.push(uf.moment().format('YYYY-MM-DD hh:mm:ss'));
    } else {
        errObj[line] = {
            num: 1,
            err: message.replace('Uncaught TypeError: ', ''),
            source: source,
            errTime: [uf.moment().format('YYYY-MM-DD hh:mm:ss')]
        };
    }
    window.localStorage.errObj = JSON.stringify(errObj);
    // 根据日期区分
    if (errDate[uf.moment().format('YYYY-MM-DD')]) {
        errDate[uf.moment().format('YYYY-MM-DD')].num++;
        errDate[uf.moment().format('YYYY-MM-DD')].errTime.push(uf.moment().format('YYYY-MM-DD HH:mm'));
    } else {
        errDate[uf.moment().format('YYYY-MM-DD')] = {
            num: 1,
            err: message.replace('Uncaught TypeError: ', ''),
            source: source,
            errTime: [uf.moment().format('YYYY-MM-DD HH:mm')]
        };
    }
    window.localStorage.errDate = JSON.stringify(errDate);
};

export default function () {
    let errObj = window.localStorage.errObj ? JSON.parse(window.localStorage.errObj) : {};
    let errDate = window.localStorage.errDate ? JSON.parse(window.localStorage.errDate) : {};
    let seriesData = [];
    for (let key in errObj) {
        seriesData.push({
            name: key,
            value: errObj[key].num
        });
    }
    let pieEchart = {
        type: 'echarts',
        style: {border: '2px solid #00f0ff'},
        autoResize: true,
        title: {
            text: '错误情况统计(位置)',
            // subtext: '此次登录数据',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: a => a.data.name + `行：${a.data.value}
                <br></br>错误类型：${errObj[a.data.name].err}
                <br></br>时间： <br></br>${errObj[a.data.name].errTime.join('<br></br>')}`
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            // 图例文字的样式
            textStyle: {
                color: '#ccc',
                fontSize: 16
            },
            bottom: 10,
            left: 'center',
            data: Object.keys(errObj)
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: seriesData,
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 16
                },
                emphasis: {
                    itemStyle: {
                        // color: '#333',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    let lineData = [];
    for (let key in errDate) {
        lineData.push(errDate[key].num);
    }
    let lineEchart = {
        type: 'echarts',
        style: {border: '2px solid #00f0ff', borderRight: 'none'},
        autoResize: true,
        title: {
            text: '错误情况统计(天)',
            // subtext: '此次登录数据',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    fontSize: 16
                }
            },
            boundaryGap: false,
            data: Object.keys(errDate)
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    fontSize: 16
                }
            },
        },
        series: [{
            data: lineData,
            type: 'line',
            itemStyle: {
                color: '#00f0ff',
                fontSize: 16
            },
            areaStyle: {
                color: 'rgba(3, 253, 163, .7)'
            },
            lineStyle: {
                color: '#333'
            }
        }]
    };
    return [
        {
            type: 'div',
            className: 'errMonitor',
            // style: {position: 'relative', top: 'calc(50% - 200px)'},
            content: [
                {
                    type: 'div',
                    className: 'errTitle',
                    content: '告警监控'
                },
                {
                    type: 'div',
                    style: {marginBottom: 170},
                    content: [
                        {
                            type: 'a', content: '返回主页', href: window.location.origin + '/#/oms', style: {
                                fontSize: 16, color: 'rgba(3, 253, 163, .7)'
                            }
                        },
                        {
                            type: 'a', content: '清除告警记录', style: {
                                fontSize: 16, color: 'red', marginLeft: '16px'
                            }, onClick: e => {
                                window.localStorage.removeItem('errObj');
                                window.localStorage.removeItem('errDate');
                                window.location.reload();
                            }
                        }
                    ]
                },
                !Object.keys(errDate).length && !Object.keys(errDate).length && {
                    type: 'alert',
                    mode: 'success',
                    style: {textAlign: 'center'},
                    message: '真棒，还没出现报错。'
                },
                {
                    type: 'row',
                    content: [
                        Object.keys(errDate).length && {
                            type: 'col', span: 16,
                            content: lineEchart
                        },
                        Object.keys(errObj).length && {
                            type: 'col', span: 8,
                            content: pieEchart
                        }
                    ]
                }
            ]
        }
    ];
}
