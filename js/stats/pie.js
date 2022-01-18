const pieChart = document.getElementById('pieChart');

const configPie = {
    type: 'pie',
    data: {
        labels: ['Семейные', 'Хардкор', 'Карточные', 'Стратегии', 'Тактические'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [60, 15, 45, 30, 28],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
          }
        ]
      },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    },
};

new Chart(pieChart, configPie);