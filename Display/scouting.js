var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Match 1", "Match 2"],
        datasets: [{
            label: 'Ground',
            data: [5, 2],
            backgroundColor: [
                'rgba(55, 200, 100, 0.5)',
                'rgba(55, 200, 100, 0.5)'
            ]
        }, 
        {
            label: 'Portal',
            data: [1, 6],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ]
        }]
    },
    options: {
        scales: {
        	xAxes: [{
        		stacked: true
        	}],
            yAxes: [{
            	stacked: true
            }]
        }
    }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Match 1", "Match 2"],
        datasets: [{
            label: 'Scale',
            data: [3,5],
            backgroundColor: [
                'rgba(200, 100, 100, 0.5)',
                'rgba(200, 100, 100, 0.5)'                 
            ]
        },
        {
            label: 'Switch',
            data: [2, 2],
            backgroundColor: [
                'rgba(55, 200, 100, 0.5)',
                'rgba(55, 200, 100, 0.5)'
            ]
        }, 
        {
            label: 'Dropped',
            data: [1, 1],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
