const barChart = document.getElementById('barChart');

const configBar = {
    type: 'bar',
    data: {
        labels: [''],
        datasets: [{
                label: 'Женщины',
                data: [42, 100],
                borderColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Мужчины',
                data: [58, 100],
                borderColor: 'rgba(54, 162, 235, 0.2)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    },
};

new Chart(barChart, configBar);