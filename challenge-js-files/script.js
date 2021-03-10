const table = document.querySelector("#table1");
let getYears = table.rows[1].cells.length;
let getCountries = table.rows.length;
let years = [];
let countries = [];

for (var i = 2; i < getYears; i++) {
  years.push(parseInt(table.rows[1].cells[i].innerHTML, 10));
}

for (var i = 2; i < getCountries; i++) {
  countries.push(table.rows[i].cells[1].innerHTML);
}

function setData(state) {
  data = [];
  x = countries.indexOf(state);
  for (i = 2; i < table.rows[x + 2].cells.length; i++) {
    z = table.rows[x + 2].cells.item(i).innerHTML.replace(",", ".");
    if (isNaN(z)) z = "no data available";
    data.push(parseFloat(z));
  }
  return data;
}

const placeSelection = document.createElement("div");
placeSelection.id = "container";
placeSelection.innerHTML =
  '<canvas id="myChart" width="400" height="400"></canvas>';

table.parentNode.insertBefore(placeSelection, table);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: years,
    datasets: [
      {
        label: countries[0],
        data: setData(countries[0]),
        fill: false,
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: countries[1],
        data: setData(countries[1]),
        fill: false,
        borderColor: "green",
        borderWidth: 1,
      },
      {
        label: countries[2],
        data: setData(countries[2]),
        fill: false,
        borderColor: "yellow",
        borderWidth: 1,
      },
      {
        label: countries[3],
        data: setData(countries[3]),
        fill: false,
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: countries[4],
        data: setData(countries[4]),
        fill: false,
        borderColor: "aqua",
        borderWidth: 1,
      },
      {
        label: countries[5],
        data: setData(countries[5]),
        fill: false,
        borderColor: "aquamarine",
        borderWidth: 1,
      },
      {
        label: countries[6],
        data: setData(countries[6]),
        fill: false,
        borderColor: "antiqueWhite",
        borderWidth: 1,
      },
      {
        label: countries[7],
        data: setData(countries[7]),
        fill: false,
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: countries[8],
        data: setData(countries[8]),
        fill: false,
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: countries[9],
        data: setData(countries[9]),
        fill: false,
        borderColor: "blueviolet",
        borderWidth: 1,
      },
      {
        label: countries[10],
        data: setData(countries[10]),
        fill: false,
        borderColor: "brown",
        borderWidth: 1,
      },
      {
        label: countries[11],
        data: setData(countries[11]),
        fill: false,
        borderColor: "chartreuse",
        borderWidth: 1,
      },
      {
        label: countries[12],
        data: setData(countries[12]),
        fill: false,
        borderColor: "coral",
        borderWidth: 1,
      },
      {
        label: countries[13],
        data: setData(countries[13]),
        fill: false,
        borderColor: "crimson",
        borderWidth: 1,
      },
      {
        label: countries[14],
        data: setData(countries[14]),
        fill: false,
        borderColor: "darkblue",
        borderWidth: 1,
      },
      {
        label: countries[15],
        data: setData(countries[15]),
        fill: false,
        borderColor: "darkgoldenrod",
        borderWidth: 1,
      },
      {
        label: countries[16],
        data: setData(countries[16]),
        fill: false,
        borderColor: "darkmagenta",
        borderWidth: 1,
      },
      {
        label: countries[17],
        data: setData(countries[17]),
        fill: false,
        borderColor: "darkorange",
        borderWidth: 1,
      },
      {
        label: countries[18],
        data: setData(countries[18]),
        fill: false,
        borderColor: "deeppink",
        borderWidth: 1,
      },
      {
        label: countries[19],
        data: setData(countries[19]),
        fill: false,
        borderColor: "greenyellow",
        borderWidth: 1,
      },
      {
        label: countries[20],
        data: setData(countries[20]),
        fill: false,
        borderColor: "#FC00FF",
        borderWidth: 1,
      },
      {
        label: countries[21],
        data: setData(countries[21]),
        fill: false,
        borderColor: "#004CFF",
        borderWidth: 1,
      },
      {
        label: countries[22],
        data: setData(countries[22]),
        fill: false,
        borderColor: "#007778",
        borderWidth: 1,
      },
      {
        label: countries[23],
        data: setData(countries[23]),
        fill: false,
        borderColor: "#00FF7E",
        borderWidth: 1,
      },
      {
        label: countries[24],
        data: setData(countries[24]),
        fill: false,
        borderColor: "#43FF00",
        borderWidth: 1,
      },
      {
        label: countries[25],
        data: setData(countries[25]),
        fill: false,
        borderColor: "#DDFF00",
        borderWidth: 1,
      },
      {
        label: countries[26],
        data: setData(countries[26]),
        fill: false,
        borderColor: "#FFB100",
        borderWidth: 1,
      },
      {
        label: countries[27],
        data: setData(countries[27]),
        fill: false,
        borderColor: "#808080",
        borderWidth: 1,
      },
      {
        label: countries[28],
        data: setData(countries[28]),
        fill: false,
        borderColor: "#7F4F4F",
        borderWidth: 1,
      },
      {
        label: countries[29],
        data: setData(countries[29]),
        fill: false,
        borderColor: "#A2FFCA",
        borderWidth: 1,
      },
      {
        label: countries[30],
        data: setData(countries[30]),
        fill: false,
        borderColor: "#008981",
        borderWidth: 1,
      },
      {
        label: countries[31],
        data: setData(countries[31]),
        fill: false,
        borderColor: "#9F404F",
        borderWidth: 1,
      },
      {
        label: countries[32],
        data: setData(countries[32]),
        fill: false,
        borderColor: "#FF0000",
        borderWidth: 1,
      },
      {
        label: countries[33],
        data: setData(countries[33]),
        fill: false,
        borderColor: "#578252",
        borderWidth: 1,
      },
      {
        label: countries[34],
        data: setData(countries[34]),
        fill: false,
        borderColor: "#FEF577",
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: " Offences recorded by the police, 2002-12",
      fontSize: 25,
      padding: 30,
    },
  },
});

const table2 = document.querySelector("#table2");
let getCountries2 = table2.rows.length;
let countries2 = [];

for (var i = 1; i < getCountries2; i++) {
  countries2.push(table2.rows[i].cells[1].innerHTML);
}

countries2.splice(7, 1, "England and Wales(Uk)");

function setData2(state) {
  data2 = [];
  x = countries2.indexOf(state);
  for (i = 2; i < table2.rows[x + 1].cells.length; i++) {
    z = table2.rows[x + 1].cells.item(i).innerHTML.replace(",", ".");
    if (isNaN(z)) z = "no data available";
    data2.push(parseFloat(z));
  }
  return data2;
}

const placeSelection2 = document.createElement("div");
placeSelection2.id = "container2";
placeSelection2.innerHTML =
  '<canvas id="myChart2" width="400" height="400"></canvas>';

table2.parentNode.insertBefore(placeSelection2, table2);

var ctx = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2007-09", "2010-12"],
    datasets: [
      {
        label: countries2[0],
        data: setData2(countries2[0]),
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: countries2[1],
        data: setData2(countries2[1]),
        backgroundColor: "green",
        opacity: "0.6",
        borderColor: "green",
        borderWidth: 1,
      },
      {
        label: countries2[2],
        data: setData2(countries2[2]),
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1,
      },
      {
        label: countries2[3],
        data: setData2(countries2[3]),
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: countries2[4],
        data: setData2(countries2[4]),
        backgroundColor: "aqua",
        borderColor: "aqua",
        borderWidth: 1,
      },
      {
        label: countries2[5],
        data: setData2(countries2[5]),
        backgroundColor: "aquamarine",
        borderColor: "aquamarine",
        borderWidth: 1,
      },
      {
        label: countries2[6],
        data: setData2(countries2[6]),
        borderWidth: 1,
      },
      {
        label: countries2[7],
        data: setData2(countries2[7]),
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: countries2[8],
        data: setData2(countries2[8]),
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: countries2[9],
        data: setData2(countries2[9]),
        backgroundColor: "blueviolet",
        borderColor: "blueviolet",
        borderWidth: 1,
      },
      {
        label: countries2[10],
        data: setData2(countries2[10]),
        backgroundColor: "brown",
        borderColor: "brown",
        borderWidth: 1,
      },
      {
        label: countries2[11],
        data: setData2(countries2[11]),
        backgroundColor: "chartreuse",
        borderColor: "chartreuse",
        borderWidth: 1,
      },
      {
        label: countries2[12],
        data: setData2(countries2[12]),
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1,
      },
      {
        label: countries2[13],
        data: setData2(countries2[13]),
        backgroundColor: "crimson",
        borderColor: "crimson",
        borderWidth: 1,
      },
      {
        label: countries2[14],
        data: setData2(countries2[14]),
        backgroundColor: "darkblue",
        borderColor: "darkblue",
        borderWidth: 1,
      },
      {
        label: countries2[15],
        data: setData2(countries2[15]),
        backgroundColor: "darkgoldenrod",
        borderColor: "darkgoldenrod",
        borderWidth: 1,
      },
      {
        label: countries2[16],
        data: setData2(countries2[16]),
        backgroundColor: "darkmagenta",
        borderColor: "darkmagenta",
        borderWidth: 1,
      },
      {
        label: countries2[17],
        data: setData2(countries2[17]),
        backgroundColor: "darkorange",
        borderColor: "darkorange",
        borderWidth: 1,
      },
      {
        label: countries2[18],
        data: setData2(countries2[18]),
        backgroundColor: "deeppink",
        borderColor: "deeppink",
        borderWidth: 1,
      },
      {
        label: countries2[19],
        data: setData2(countries2[19]),
        backgroundColor: "greenyellow",
        borderColor: "greenyellow",
        borderWidth: 1,
      },
      {
        label: countries2[20],
        data: setData2(countries2[20]),
        backgroundColor: "#FC00FF",
        borderColor: "#FC00FF",
        borderWidth: 1,
      },
      {
        label: countries2[21],
        data: setData2(countries2[21]),
        backgroundColor: "#004CFF",
        borderColor: "#004CFF",
        borderWidth: 1,
      },
      {
        label: countries2[22],
        data: setData2(countries2[22]),
        backgroundColor: "#007778",
        borderColor: "#007778",
        borderWidth: 1,
      },
      {
        label: countries2[23],
        data: setData2(countries2[23]),
        backgroundColor: "#00FF7E",
        borderColor: "#00FF7E",
        borderWidth: 1,
      },
      {
        label: countries2[24],
        data: setData2(countries2[24]),
        backgroundColor: "#43FF00",
        borderColor: "#43FF00",
        borderWidth: 1,
      },
      {
        label: countries2[25],
        data: setData2(countries2[25]),
        backgroundColor: "#DDFF00",
        borderColor: "#DDFF00",
        borderWidth: 1,
      },
      {
        label: countries2[26],
        data: setData2(countries2[26]),
        backgroundColor: "#FFB100",
        borderColor: "#FFB100",
        borderWidth: 1,
      },
      {
        label: countries2[27],
        data: setData2(countries2[27]),
        backgroundColor: "#808080",
        borderColor: "#808080",
        borderWidth: 1,
      },
      {
        label: countries2[28],
        data: setData2(countries2[28]),
        backgroundColor: "#7F4F4F",
        borderColor: "#7F4F4F",
        borderWidth: 1,
      },
      {
        label: countries2[29],
        data: setData2(countries2[29]),
        backgroundColor: "#A2FFCA",
        borderColor: "#A2FFCA",
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text:
        " Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants)",
      fontSize: 25,
      padding: 30,
    },
  },
});

const bodyContent = document.querySelector("#bodyContent");
const placeSelection3 = document.createElement("div");
placeSelection3.id = "container3";
placeSelection3.innerHTML =
  '<canvas id="myChart3" width="400" height="200"></canvas>';

bodyContent.parentNode.insertBefore(placeSelection3, bodyContent);

chartSet();

const xAxis = [];
const yAxis = [];

async function resetChart() {
  const datas = await fetch(
    "https://canvasjs.com/services/data/datapoints.php"
  );
  const datasJson = await datas.json();
  datasJson.forEach((elt) => {
    xAxis.push(elt[0]);
    yAxis.push(elt[1]);
  });
}

async function chartSet() {
  await resetChart().catch(() => {
    console.warn("Didn't work");
  });
  const ctx = document.getElementById("myChart3").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xAxis,
      datasets: [
        {
          label: "Random datas",
          data: yAxis,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
