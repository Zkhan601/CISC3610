const donut = document.getElementById("donut");
const hbar = document.getElementById("hBar");

let donutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
        labels: [
            'Brooklyn Studio Secondary School',
            'Brooklyn Technical High School',
            'Edward R. Murrow High School',
            'Abraham Lincoln High School',
            'Fort Hamilton High School',
            'Franklin Delano Roosevelt High School',
            'James Madison High School',
            'John Dewey High School',
            'Midwood High School',
            'Stuyvesant High School'
        ],
        datasets: [{
            label: 'Current Enrollment NYC HS',
            data: [954, 5884, 3693, 1816, 3933, 3665, 3261, 2261, 4200, 3356],
            backgroundColor: [
                'rgb(255, 102, 102)',
                'rgb(246, 215, 222)',
                'rgb(172, 160, 217)',
                'rgb(190, 210, 248)',
                'rgb(244, 255, 102)',
                'rgb(102, 255, 178)',
                'rgb(102, 255, 255)',
                'rgb(233, 225, 249)',
                'rgb(178, 102, 255)',
                'rgb(255, 2, 255)'
            ],
            hoverOffset: 3,
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Current Enrollment NYC HS',
                font: {
                    size: 20,
                }
            },
            legend: {
                position: 'right',
                labels: {
                    textAlign: 'center',
                    font: {
                        size: 14,
                    }
                }
            }
        }
    }

})

let hBarChart = new Chart(hbar, {
    type: 'bar',
    data: {
        labels: [
            'Brooklyn Studio Secondary School',
            'Brooklyn Technical High School',
            'Edward R. Murrow High School',
            'Abraham Lincoln High School',
            'Fort Hamilton High School',
            'Franklin Delano Roosevelt High School',
            'James Madison High School',
            'John Dewey High School',
            'Midwood High School',
            'Stuyvesant High School'
        ],
        datasets: [{
            label: 'Current Enrollment NYC HS',
            data: [954, 5884, 3693, 1816, 3933, 3665, 3261, 2261, 4200, 3356],
            backgroundColor: [
                'rgb(255, 102, 102)',
                'rgb(246, 215, 222)',
                'rgb(172, 160, 217)',
                'rgb(190, 210, 248)',
                'rgb(244, 255, 102)',
                'rgb(102, 255, 178)',
                'rgb(102, 255, 255)',
                'rgb(233, 225, 249)',
                'rgb(178, 102, 255)',
                'rgb(255, 2, 255)'
            ],
            hoverOffset: 1,

        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Current Enrollment NYC HS',
                font: {
                    size: 20,
                }
            }
        }
    }
})