var left1Chart = echarts.init(document.getElementById('left1'), 'dark')
var option = {
    title: {
        text: "全国累计趋势",
        textStyle: {
            color: '#fff'
        },
        left: 'left'
    },
    tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
    },
    //图例
	legend: {
		data: ['累计确诊', "累计治愈", "累计死亡"],
		left: "right"
    },
    //图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
    },
    xAxis: [{
		type: 'category',
		data: [] //['03.20', '03.21', '03.22']
	}],
	yAxis: [{
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
		//y轴线设置显示
		axisLine: {
			show: true
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				color: '#17273B',
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
		name: "累计确诊",
		type: 'line',
		smooth: true,
		data: []//[260, 406, 529]
	}, {
		name: "累计治愈",
		type: 'line',
		smooth: true,
		data: []//[25, 25, 25]
	}, {
		name: "累计死亡",
		type: 'line',
		smooth: true,
		data: []//[6, 9, 17]
	}]
}
var chinaDayList = other.chinaDayList;
for(var day of chinaDayList) {
    option.xAxis[0].data.push(day.date);
    option.series[0].data.push(day.confirm);
    option.series[1].data.push(day.heal);
    option.series[2].data.push(day.dead);
}
console.log(chinaDayList, 'chinaDayList')
left1Chart.setOption(option)