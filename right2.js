var right2Chart = echarts.init(document.getElementById("right2"),"dark");

var option = {
    title: {
        text: '境外输入省市TOP5',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: [] // ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '省市名称',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            // data: [
            //     {value: 335, name: '直接访问'},
            //     {value: 310, name: '邮件营销'},
            //     {value: 234, name: '联盟广告'},
            //     {value: 135, name: '视频广告'},
            //     {value: 1548, name: '搜索引擎'}
            // ],
            data:[],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var provinces = data.areaTree[0].children;
var topData = [];
for(var province of provinces){
    // 判断省市是否有境外输入的数据
    if(province.children[0].name=='境外输入'){
        topData.push({
            'name':province.name,
            'value':province.children[0].total.confirm
        });
    }
}
// 降序排列，指定排序的规则
topData.sort(function(a,b){
    return b.value-a.value; // 降序
});
// 只保留前5条
topData.length=5;

for(var province of topData){
    option.legend.data.push(province.name);
    option.series[0].data.push(province);
}

right2Chart.setOption(option);