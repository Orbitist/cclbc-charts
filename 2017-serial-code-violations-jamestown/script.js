// Loop through and divy out the labels and data.
var addresses = [];
var violationCounts = [];
for (var i = 0; i < 454; i++) {
  addresses.push(json[i].address);
  violationCounts.push(json[i].violationCount);
}



var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: addresses,
        datasets: [{
            label: '# of Violations',
            data: violationCounts,
            borderWidth: 1,
            backgroundColor: '#b24b65'
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            barThickness: 20,
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 4
                }
            }]
        }
    }
});
