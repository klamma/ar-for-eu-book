Highcharts.chart('MediumChart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Durchschnittlich grosse synthetische Netzwerke'
    },
    subtitle: {
        text: 'N=1000, k=18, maxk=37, minc=10, maxc=50, mut=0.3'
    },
    xAxis: [{
        categories: ['DMID', 'CLiZZ', 'MONC', 'SLPA', 'SSK (22.72 s)'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'NMI Werte',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
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
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Modularitaet',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Laufzeit',
        type: 'column',
        yAxis: 1,
        data: [0.31, 0.64, 2.78, 1.25],
        tooltip: {
            valueSuffix: ' s'
        }

    }, {
        name: 'Modularitaet',
        type: 'spline',
        yAxis: 2,
        data: [0.06, 0.00, 0.25, 0.31, 0.04],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'NMI Werte',
        type: 'spline',
        data: [0.18, 0.04, 0.05, 0.07, 0.01],
        tooltip: {
            valueSuffix: ''
        }
    }]
});