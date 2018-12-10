Highcharts.chart('FacebookChart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Facebook'
    },
    subtitle: {
        text: 'Source: DMID Paper [1]' 
    },
    xAxis: [{
        categories: ['DMID', 'CLiZZ', 'MONC', 'SSK'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} ',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Modularitaet',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }, 
        opposite: true
    }, { // Secondary yAxis
        title: {
            text: 'Laufzeit',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} s',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: false
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Laufzeit',
        type: 'column',
        yAxis: 1,
        data: [3101.55, 528.90, 3808, 3528.4],
        tooltip: {
            valueSuffix: ' s'
        }
    }, {
        name: 'Modularitaet',
        type: 'spline',
        data: [0.825, 0.882, 0.00, 0.941],
        tooltip: {
            valueSuffix: ' '
        }
    }]
});