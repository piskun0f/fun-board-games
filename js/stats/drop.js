const dropChart = document.getElementById('dropChart');

const configDrop = {
    type: 'line',
    data: {
        labels: ['Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль"],
        datasets: [{
                label: 'Количество игротек',
                animations: {
                    y: {
                        duration: 2000,
                        delay: 500
                    }
                },
                data: [51, 35, 50, 98, 29, 47, 55],
                borderColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: 1,
                tension: 0.5
            },
            {
                label: 'Количество игроков',
                data: [25, 48, 65, 86, 70, 87, 65],
                borderColor: 'rgba(54, 162, 235, 0.2)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }
        ]
    },
    options: {
        animations: {
            y: {
                easing: 'easeInOutElastic',
                from: (ctx) => {
                    if (ctx.type === 'data') {
                        if (ctx.mode === 'default' && !ctx.dropped) {
                            ctx.dropped = true;
                            return 0;
                        }
                    }
                }
            }
        },
    },
};

new Chart(dropChart, configDrop);