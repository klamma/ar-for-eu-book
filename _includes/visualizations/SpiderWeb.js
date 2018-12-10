var categories = ['Laufzeit', 'ENMI', 'Omega Index', 'Extended Modularity'];
var graphs = [{
    title: 'Graph 1',
    values: [{
        name: 'CLIZZ',
        data: [0.016, 0.0387,  0.0136, 0.3971],
    }, {
        name: 'DMID',
        data: [0.016, 0.1195,  0     , 0]
    }, {
        name: 'MONC',
        data: [0.082, 0.0159, -0.0009, 0.1666]
    }, {
        name: 'SLPA',
        data: [0.162, 0.0159, -0.0022, 0.9844]
    }, {
        name: 'SSK',
        data: [0.053, 0.0152, -0.0034, 0.1119]
    }, {
        name: 'LC',
        data: [0.699, 0.0414, -0.0002, 0.6321]
    }]
}, {
    title: 'Graph 2',
    values: [{
        name: 'CLIZZ',
        data: [0.166,  0.0827,  0.9669, 0.0002]
    }, {
        name: 'DMID',
        data: [0.401,  0,       0,      null]
    }, {
        name: 'MONC',
        data: [18.672, 0.086,   0.9303, null]
    }, {
        name: 'SLPA',
        data: [1.727,  0.0397,  0.9453, 0.7259]
    }, {
        name: 'SSK',
        data: [50.369, 0.0093, -0.0002, null]
    }]
}, {
    title: 'Graph 3',
    values: [{
        name: 'CLIZZ',
        data: [2.012,0.0032, 0.742]
    }, {
        name: 'DMID',
        data: [0.102, 0, 0]
    }, {
        name: 'MONC',
        data: [1.18, 0.0272, -0.0001]
    }, {
        name: 'SLPA',
        data: [0.53, 0.0497, 0.8663]
    }, {
        name: 'SSK',
        data: [1.609, 0.0114,0.0002]
    }]
}, {
    title: 'Graph 4',
    values: [{
        name: 'CLIZZ',
        data: [26.279, null,   0.9958]
    }, {
        name: 'SLPA',
        data: [34.761, 0.1434, 0.9944]
    }]
}
];

for(var i = 0; i < graphs.length; i ++) {
    //normalize Laufzeit:
    var max = 0;
    for(var j = 0; j < graphs[i].values.length; j ++) {
        graphs[i].values[j].pointPlacement = 'on';
        if(graphs[i].values[j].data[0] > max) {
            max = graphs[i].values[j].data[0];
        }
    }
    for(var j = 0; j < graphs[i].values.length; j ++) {
        graphs[i].values[j].data[0] = Math.round((1 - graphs[i].values[j].data[0]/max) * 100)/100;
    }
    
    //init chart
    Highcharts.chart('SpiderWeb' + i, {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: graphs[i].title,
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 1
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: graphs[i].values
    });
}