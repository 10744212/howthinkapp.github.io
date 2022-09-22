var ctx = document.getElementById('myChart4').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: '平均分數(單位:分)',
            data: [0.12, 0.24, 0.35, 0.33, 0.35, 0.40, 0.38, 0.54, 0.66, 0.70, 0.83, 0.91],
            backgroundColor: ['#C3EBEF'],
        }]

    },

    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});