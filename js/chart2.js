var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: '平均心率(單位:分/次)',
            data: [64, 70, 75, 80, 75, 70, 68, 74, 67, 70, 73, 70],
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