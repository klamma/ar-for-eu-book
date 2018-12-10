Highcharts.chart('PowerGridChart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Powergrid'
    },
    subtitle: {
        text: 'Source: DMID Paper [1]'
    },
    xAxis: [{
        categories: ['DMID', 'CLiZZ (400037 s)', 'MONC', 'SSK (204797 s)', 'LC'],
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
            text: 'Modularität',
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
        data: [3039.97, 0, 62.4, 0, 5082],
        tooltip: {
            valueSuffix: ' s'
        }
    }, {
        name: 'Modularität',
        type: 'spline',
        data: [0.643, 0.681, 0.398, 0.701, 0.090],
        tooltip: {
            valueSuffix: ' '
        }
    }]
});