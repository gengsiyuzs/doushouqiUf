/**
 * @file 斗兽棋
 * Created by gengsiyu
 */
define(function (uf, require) {
    // 生成随机数
    function random(max) {
        let num = Math.random() * max;
        return Math.round(num);
    }
    // 打乱顺序
    function sort(length, arr) {
        let newArr = [];
        for (let i = length; i > 0; i--) {
            let idx = random(i);
            newArr.push(arr.splice(idx - 1, 1)[0]);
        }
        return newArr;
    }
    let amnites = [{
            anmite: '象',
            idx: '8'
        },
        {
            anmite: '狮',
            idx: '7'
        },
        {
            anmite: '虎',
            idx: '6'
        },
        {
            anmite: '豹',
            idx: '5'
        },
        {
            anmite: '狼',
            idx: '4'
        },
        {
            anmite: '狗',
            idx: '3'
        },
        {
            anmite: '猫',
            idx: '2'
        },
        {
            anmite: '鼠',
            idx: '1'
        },
    ];
    let amnitesMap = {
        '象': '8',
        '狮': '7',
        '虎': '6',
        '豹': '5',
        '狼': '4',
        '狗': '3',
        '猫': '2',
        '鼠': '1',
    };
    let anmiteRed = (function () {
        let arr = [...amnites];
        let newArr = [];
        for (let i = 8; i > 0; i--) {
            let idx = random(i);
            newArr.push({
                name: arr.splice(idx - 1, 1)[0],
                type: 'red'
            });
        }
        return newArr;
    })();
    let anmiteBlue = (function () {
        let arr = [...amnites];
        let newArr = [];
        for (let i = 8; i > 0; i--) {
            let idx = random(i);
            newArr.push({
                name: arr.splice(idx - 1, 1)[0],
                type: 'blue'
            });
        }
        return newArr;
    })();
    let allAnmite = sort(16, anmiteRed.concat(anmiteBlue));
    let curIdx = null;
    let nextIdx = null;
    // 当前的颜色
    let curColor = '';
    // 选中的动物
    let checkAnmites = [];
    // 重置
    function reset() {
        curIdx = null;
        nextIdx = null;
        checkAnmites.forEach(anmite => {
            anmite.style.background = '#fff';
        });
        checkAnmites = [];
    }
    // 吃
    function eat(both) {
        // console.log(curIdx, nextIdx);
        if (both) {
            nextIdx.target.innerHTML = curIdx.target.innerHTML = '';
            nextIdx.target.style.color = curIdx.target.style.color = '';
            checkWiner(curIdx);
        } else {
            nextIdx.target.innerHTML = curIdx.target.innerHTML;
            nextIdx.target.style.color = curIdx.target.style.color;
            curIdx.target.innerHTML = '';
            curIdx.target.style.color = '';
        }
        curIdx.target.setAttribute('check', true);
        nextIdx.target.setAttribute('check', true);
        curColor === 'red' ? curColor = 'blue' : curColor = 'red';
        checkWiner();
        checkCur();
    }
    // 只能吃自己周围的
    function onlyEatRound() {
        let eatId = +curIdx.target.id;
        let targetId = nextIdx.target.id;
        let canEatResult = (function () {
            if ([4, 8].includes(eatId)) {
                return [eatId - 4, eatId + 4, eatId + 1];
            }
            if ([7, 11].includes(eatId)) {
                return [eatId - 4, eatId + 4, eatId - 1];
            }
            if (eatId === 0) {
                return [eatId + 4, eatId + 1];
            }
            if (eatId === 3) {
                return [eatId + 4, eatId - 1];
            }
            if (eatId === 12) {
                return [eatId - 4, eatId + 1];
            }
            if (eatId === 15) {
                return [eatId - 4, eatId - 1];
            }
            return [eatId - 4, eatId + 4, eatId - 1, eatId + 1];
        })()
        console.log(canEatResult);
        if (canEatResult.includes(+targetId)) {
            console.log('能吃');
            return true;
        } else {
            console.log('不能吃');
            return false;
        }
    }
    // 判断能不能吃
    function checkCanEat() {
        // console.log(curIdx, nextIdx);
        let canEat = onlyEatRound();
        if (!canEat) {
            uf.message.error('太远了，吃不到~');
            reset();
            return;
        }
        let cur = +curIdx.item.name.idx;
        let next = +nextIdx.item.name.idx;
        if (curIdx.item.type === nextIdx.item.type) {
            uf.message.info('不能大义灭亲~');
        } else {
            if ((cur > next && (cur !== 8 && next !== 1)) || (cur === 1 && next === 8)) {
                eat();
            } else if ((cur === 8 && next === 1) || (cur < next)) {
                uf.message.info('倒反天罡！');
            } else if (cur === next) {
                eat('both');
                console.log('同归于尽');
            } else {
                eat();
                console.log('什么');
            }
        }
        reset();
    }
    // 判断当前该谁
    function checkCur() {
        let text = curColor === 'red' ? '红方' : '蓝方';
        uf('curAuthor').set({
            content: text
        })
    }
    // 判断胜利
    function checkWiner(next) {
        let nextIdxDele = next || nextIdx;
        allAnmite = allAnmite.filter(item => {
            return item.type + item.name.anmite !== nextIdxDele.item.type + nextIdxDele.item.name.anmite;
        });
        console.log(allAnmite);
        let redWiner = allAnmite.every(item => {
            return item.type === 'red';
        });
        let blueWiner = allAnmite.every(item => {
            return item.type === 'blue';
        });
        console.log(redWiner, blueWiner);
        if (redWiner) {
            uf('winer').set({
                content: '红方'
            });
        }
        if (blueWiner) {
            uf('winer').set({
                content: '蓝方'
            });
        }

    }
    // 生成动物
    function creatAnmite(height) {
        return allAnmite.map((i, idx) => ({
            type: 'div',
            className: 'item',
            id: idx,
            index: idx,
            style: (function () {
                if (height) {
                    return {
                        height: height,
                        lineHeight: height
                    };
                }
                return {};
            })(),
            onClick: e => {
                let type = e.target.style.color;
                if (!curColor) {
                    curColor = i.type;
                    checkCur();
                }
                checkAnmites.push(e.target);
                let check = e.target.getAttribute('check');
                // console.log(check, checkAnmites);
                if (!e.target.innerHTML && !check) {
                    e.target.innerHTML = i.name.anmite;
                    e.target.style.color = i.type;
                    e.target.style.background = '#fff';
                    // 翻牌
                    reset();
                    curColor === 'red' ? curColor = 'blue' : curColor = 'red';
                    checkCur();
                } else {
                    e.target.style.background = '#F7A11B';
                    if (!curIdx) {
                        if (check && !e.target.innerHTML) {
                            uf.message.error('点了个寂寞~');
                            reset();
                            return;
                        }
                        if (type && type !== curColor) {
                            uf.message.info('不该你走！');
                            reset();
                            return;
                        }

                        curIdx = {
                            item: {
                                name: {
                                    anmite: e.target.innerHTML,
                                    idx: amnitesMap[e.target.innerHTML]
                                },
                                type: e.target.style.color
                            },
                            target: e.target
                        };
                    } else {
                        nextIdx = {
                            item: {
                                name: {
                                    anmite: e.target.innerHTML,
                                    idx: amnitesMap[e.target.innerHTML]
                                },
                                type: e.target.style.color
                            },
                            target: e.target
                        };
                        checkCanEat();
                    }
                }
            }
        }));
    }
    return {
        type: 'div',
        name: 'anmiteApp',
        afterCreate: e => {
            let item = document.getElementsByClassName('item')[0];
            let height = window.getComputedStyle(item, null).width;
            uf('anmites').set({
                content: ''
            });
            setTimeout(() => {
                uf('anmites').set({
                    content: creatAnmite(height)
                });
            }, 0);
            uf.Modal.confirm({
                title: '规则说明',
                width: 800,
                content: {
                    type: 'div',
                    style: {
                        fontSize: '30px',
                        color: '#DA927D'
                    },
                    content: [{
                            type: 'p',
                            content: '1.开局第一个人翻到的第一张牌的颜色，就是你本局的角色,另一个颜色就是对方的角色',
                        },
                        {
                            type: 'p',
                            content: '2.每个角色一次只能走一步，可以选择【翻牌】【走步】【吃掉别人的棋子】'
                        },
                        {
                            type: 'p',
                            content: '3.大小关系：象->狮->虎->豹->狼->狗->猫->鼠->象 （比自己小的都可以吃，象不能吃鼠，鼠只能吃象）'
                        },
                        {
                            type: 'p',
                            content: '看明白了就开始吧~',
                            style: {
                                color: '#23A6FF'
                            }
                        }
                    ]
                }
            });
        },
        content: [{
                type: 'div',
                style: {
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: '20px'
                },
                content: [{
                        type: 'span',
                        content: '当前操作者：',
                        style: {
                            fontSize: '36px',
                        },
                    },
                    {
                        type: 'span',
                        className: 'curAuthor',
                        name: 'curAuthor',
                    },
                    {
                        type: 'span',
                        content: '胜利者：',
                        style: {
                            fontSize: '36px',
                            marginLeft: '50px'
                        },
                    },
                    {
                        type: 'span',
                        name: 'winer',
                        style: {
                            fontSize: '40px',
                        },
                    },
                    {
                        type: 'button',
                        content: '重新开始',
                        style: {
                            marginLeft: '30px',
                            width: '200px',
                            height: '80px',
                            fontSize: '30px'
                        },
                        mode: 'primary',
                        onClick: e => {
                            allAnmite = sort(16, anmiteRed.concat(anmiteBlue));
                            curIdx = null;
                            nextIdx = null;
                            // 当前的颜色
                            curColor = '';
                            // 选中的动物
                            checkAnmites = [];
                            let item = document.getElementsByClassName('item')[0];
                            let height = window.getComputedStyle(item, null).width;
                            uf('anmites').set({
                                content: ''
                            })
                            setTimeout(() => {
                                uf('anmites').set({
                                    content: creatAnmite(height)
                                });
                                uf('curAuthor').set({
                                    content: ''
                                });
                                uf('winer').set({
                                    content: ''
                                });
                            }, 0);
                        }
                    }
                ]
            },
            {
                type: 'div',
                className: 'anmite',
                name: 'anmites',
                content: creatAnmite()
            }
        ]
    }
});