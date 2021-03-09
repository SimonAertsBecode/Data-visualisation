// var ourRequest = new XMLHttpRequest();
// var ourData;
// ourRequest.open(
//   "GET",
//   "https://canvasjs.com/services/data/datapoints.php",
//   true
// );

// const x = [];
// const y = [];

// ourRequest.onload = function () {
//   ourData = JSON.parse(ourRequest.responseText);
//   console.log(ourData);
//   for (i = 0; i <= ourData.length; i++) {
//     x.push(ourData[i][0]);
//     y.push(ourData[i][1]);
//   }
// };
// ourRequest.send();

// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: x,
//     datasets: [
//       {
//         label: "Values",
//         data: y,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// });
