var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: '平均分數(單位:分)',
            data: [80, 46, 76, 54, 70, 90, 95, 56, 44, 70, 85, 55],
            backgroundColor: ['#C3EBEF', '#CAD2FF', '#C3EBEF', '#CAD2FF', '#C3EBEF', '#CAD2FF', '#C3EBEF', '#CAD2FF', '#C3EBEF', '#CAD2FF', '#C3EBEF', '#CAD2FF', ],

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