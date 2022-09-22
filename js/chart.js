var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: '累積步數(單位:萬)',
            data: [100, 150, 200, 60, 400, 160, 800, 500, 400, 200, 135, 300],
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