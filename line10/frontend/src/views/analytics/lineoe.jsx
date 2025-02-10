import React from 'react';
import ReactECharts from 'echarts-for-react';
import '../../index.css';

const LineOE = () => {
  const option = {
    backgroundColor: '',
    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ffffff'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Lead by Teams',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 400, name: 'Team A' },
          { value: 310, name: 'Team B' },
          { value: 500, name: 'Team C' },
          { value: 235, name: 'Team D' }
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: '#ffffff'
        },
        labelLine: {
          lineStyle: {
            color: '#ffffff'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color: '#26A69A',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

  return (
    <div className="bg-slate-800 border border-slate-400 flex justify-center items-center font-[montserrat] align-center rounded-lg w-full h-full">
      <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default LineOE;
