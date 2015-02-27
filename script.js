$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'E-Waste Data'
        },
        subtitle: {
            text: 'Source: EPA.gov'
        },
        xAxis: {
            categories: ['1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005','2006','2007'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Amount (tons)',
                align: 'left'
            },
            labels: {
            }
        },
        tooltip: {
            valueSuffix: 'tons'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            //floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Cell Phones New',
            data: [2196,3701,4515,5896,1437,2100,3135,3867, 4427, 5920, 8160, 11308, 14002, 17854, 20137, 21132, 19584, 18750, 18161, 20009]
        }, {
            name: 'Cell Phone Thrown',
            data: [457, 927, 1491, 2651, 3422, 4601, 2229, 2944, 4218, 3016, 3612, 5008, 6657, 8899, 11173, 14460, 17046, 18636, 18978, 19235]
        }, {
            name: 'Flat Panel TV New',
            data: [35091, 29683, 29883, 30108, 26498, 26498, 53796, 50009, 47972, 43352, 70079, 55538, 54233, 51437, 42543, 29970, 65022, 53990, 48398, 43202]
        }, {
            name: 'Flat Panel TV Thrown',
            data: [2574, 1656, 1411, 784, 633, 550, 540, 480, 425, 400, 347, 320, 265, 250, 225, 225, 200, 150, 125, 98]
        },{
            name: 'Keyboards New',
            data: [12648, 25407, 31519, 39095, 54565, 52293, 60090, 69014, 77938, 80626, 94187, 92328, 75013, 63517, 70452, 74326, 68462, 64639, 62495, 63000]
        }, {
            name: 'Keyboards Thrown',
            data: [7902, 9657, 8352, 9933, 11892, 12649, 25407, 31519, 39095, 54565, 52293, 60090, 69014, 77938, 80626, 94187, 92328, 75013, 63517, 70452]
        }, {
            name: 'Mice New',
            data: [872, 890, 948, 1429, 2085, 3126, 2973, 1913, 2242, 2487, 2789, 3948, 5616, 5300, 5754, 3695, 3935, 3804, 3581, 3541]
        }, {
            name: 'Mice Thrown',
            data: [545, 666, 576, 685, 820, 872, 890, 948, 1429, 2085, 3126, 3973, 1913, 2242, 2487, 2789, 3948, 5616, 5300, 5754]
        }]
    });
});
