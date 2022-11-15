const data = {
    Nov: 12500,
    Dec: 15670,
    Jan: 24900,
    Feb: 13000,
    Mar: 22350,
    Apr: 19000,
    May: 6700,
    Jun: 12000
  }
  
  export const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    };
    
    const colorMap = {
      Nov: '#DFE9F2',
      Dec: '#DFE9F2',
      Jan: '#206AA2',
      Feb: '#DFE9F2',
      Mar: '#DFE9F2',
      Apr: '#DFE9F2',
      May: '#DFE9F2',
      Jun: '#DFE9F2'
    }

    
    export const dataStyling = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Total value',
          data: Object.values(data),
          backgroundColor: Object.values(colorMap),
          borderRadius: 5,
          barThickness: 20
        }
      ],
    };

// import data from "../data.json"

// export const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top'
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         ticks: {
//           display: false
//         },
//         grid: {
//           display: false,
//           drawBorder: false
//         }
//       }
//     }
//   };
  
//   // const colorMap = {
//   //   'January': '#206AA2',
//   //   'February': '#DFE9F2',
//   //   'March': '#DFE9F2',
//   //   'April': '#DFE9F2',
//   //   'May': '#DFE9F2',
//   //   'June': '#DFE9F2'
//   // }

//   const more = data.reduce((acc, value) => {
//     return {...acc, [value.customerName]: '#DFE9F2'};
//   })
//   const fin = {...more, 'January': '#206AA2'}
//   const colors = data.map(x => fin[x.month]);
  
//   export const dataStyling = {
//     labels: data.map(x => x.month),
//     datasets: [
//       {
//         label: 'Total value',
//         data: data.map(x => x["Total value"]),
//         backgroundColor: colors,
//         borderRadius: 5,
//         barThickness: 20
//       }
//     ],
//   };