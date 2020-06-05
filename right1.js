var right1Chart = echarts.init(document.getElementById("right1"),"dark");

var option = {
    title: {
        text: "全国确诊省市TOP10",
        textStyle: {
            color: 'white',
        },
        left: 'left'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: { 
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: [] // ['湖北','广州','北京']
    },
    yAxis: {
        type: 'value',
        //y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
    },
    series: [{
        data: [], // [582, 300, 100]
        type: 'bar',
        barMaxWidth: "50%"
    }]
};

// 获取所有省市数据
var provinces = data.areaTree[0].children;
var topData = [];
for(var province of provinces){
    topData.push({
        "name":province.name,
        "value":province.total.confirm
    });
}

// 降序排列，指定排序的规则
topData.sort(function(a,b){
    return b.value-a.value; // 降序
    // return a.value - b.value; //升序
});
// 只保留前10条
topData.length=10;
// 分别取出省份名称和数量
for(var province of topData){
    option.xAxis.data.push(province.name);
    option.series[0].data.push(province.value);
}

right1Chart.setOption(option);