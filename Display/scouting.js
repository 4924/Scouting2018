var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Match 1", "Match 2"],
        datasets: [{
            data: [5, 2],
            backgroundColor: [
                'rgba(55, 200, 100, 0.5)',
                'rgba(55, 200, 100, 0.5)'
            ]
        }, 
        {
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
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Match 1", "Match 2"],
        datasets: [{
            data: [5, 2],
            backgroundColor: [
                'rgba(55, 200, 100, 0.5)',
                'rgba(55, 200, 100, 0.5)'
            ]
        }, 
        {
            data: [1, 6],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ]
        }]
    },
    options: {
    	responsive: false,
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

