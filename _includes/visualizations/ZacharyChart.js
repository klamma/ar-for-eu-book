Highcharts.chart('ZacharyChart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Laufzeit auf Zachary Karate Club'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['DMID', 'CLiZZ', 'LC', 'MONC', 'SLPA', 'SsK'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Laufzeit (sekunden)',
            align: 'high'
        },
        labels: {
            overflow: 'sekunden'
        }
    },
    tooltip: {
        valueSuffix: ' sekunden'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Laufzeit',
        data: [0.013, 0.005, 0.02, 0.002, 0.004, 0.002]
    },]
});