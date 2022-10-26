// where the chart logic goes

function renderChart() {
  const parseWord = [];
  const insertHere  = [];
  const insertHere  = [];
  
  for (let i=0; i < parseWord.length; i += 1) {
    parseWord.push(insertHere[i].insertHere);
    insertHere.push(insertHere[i].insertHere);
    insertHere.push(insertHere[i].insertHere);
  }
  let data = {
    labels: pigsAndBulls,
    datasets: [{
      label: '# of insertHere',
      data: pigsAndBulls,
      backgroundColor: [
        'red',
      ],
      borderColor: [
        'blue',
      ],
      borderWidth: 10,
    }, {
      label: '# of insertHere',
      data: insertHere,
      backgroundColor: [
        'lime',
      ],
      borderColor: [
        'orange',
      ],
      borderWidth: 12,
    }],
  };
  const config = {
    type: 'bar',
    data: insertHere,
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          stacked: true,
        },
      },
    },
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config,
  );
}
