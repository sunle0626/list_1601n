let data = {
    list: [
        {
            "url": "./img/baijiahao.jpg",
            "name": "白家豪",
            "class": "",
            "id": 0
        },
        {
            "url": "./img/chengyan.jpg",
            "name": "成妍",
            "class": "",
            "id": 1
        },{
            "url": "./img/weitengteng.gif",
            "name": "卫腾腾",
            "class": "",
            "id": 2
        }, 
        {
            "url": "./img/hourun.jpg",
            "name": "侯润",
            "class": "",
            "id": 3
        },
        {
            "url": "./img/langying.gif",
            "name": "郎盈",
            "class": "",
            "id": 4
        }, {
            "url": "./img/liuchang.gif",
            "name": "刘畅",
            "class": "",
            "id": 5
        },
        {
            "url": "./img/panbei.jpg",
            "name": "潘贝",
            "class": "",
            "id": 6
        },
        {
            "url": "./img/qiaohuijuan.gif",
            "name": "乔慧娟",
            "class": "",
            "id": 7
        }, {
            "url": "./img/shifuqiang.gif",
            "name": "石富强",
            "class": "",
            "id": 8
        }, {
            "url": "./img/sunle.jpg",
            "name": "孙乐",
            "class": "",
            "id": 9
        }, {
            "url": "./img/tiantian.gif",
            "name": "张甜甜",
            "class": "",
            "id": 10
        }, {
            "url": "./img/wangshuo.gif",
            "name": "王硕",
            "class": "",
            "id": 11
        }, {
            "url": "./img/wanzixuan.jpg",
            "name": "万梓轩",
            "class": "",
            "id": 12
        },{
            "url": "./img/xuejibao.gif",
            "name": "薛继宝",
            "class": "",
            "id": 13
        }, {
            "url": "./img/zhangtao.gif",
            "name": "张涛",
            "class": "",
            "id": 14
        }, {
            "url": "./img/zhangxinyu.gif",
            "name": "张鑫钰",
            "class": "",
            "id": 15
        }, {
            "url": "./img/zhouyuandi.gif",
            "name": "周媛迪",
            "class": "",
            "id": 16
        }, {
            "url": "./img/zhaowenqian.gif",
            "name": "赵文倩",
            "class": "",
            "id": 17
        }, {
            "url": "./img/fuwanfeng.gif",
            "name": "付万峰",
            "class": "",
            "id": 18
        },{
            "url": "./img/wangqin.gif",
            "name": "王钦",
            "class": "",
            "id": 19
        },{
            "url": "./img/shichengyu.jpg",
            "name": "石成钰",
            "class": "",
            "id": 20
        },{
            "url": "./img/guoyitian.gif",
            "name": "郭懿天",
            "class": "",
            "id": 21
        },{
            "url": "./img/zhanglong.jpg",
            "name": "张龙",
            "class": "",
            "id": 22
        }
    ]
}
data.list.map((v, i) => {
    $('.list').append(`
    <li>
        <dl>
            <dt>
                <img src="${v.url}"/>
            </dt>
            <dd>
                <span>作者：${v.name}</span>
            </dd>
        </dl>
    </li>
    `)
})
