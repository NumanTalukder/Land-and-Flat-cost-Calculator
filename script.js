let landLocation = document.getElementById('land-location')
let landSize = document.getElementById('land-size')
let pricePerKatha = document.getElementById('price-per-katha')
let priceLand = document.getElementById('price-whole-land')
let floorCount = document.getElementById('floor-count')
let shareCount = document.getElementById('share-count')
const calulateBtn = document.getElementById('calculate')
const clearBtn = document.getElementById('clear')
const infoTable = document.querySelector('.info')
const costTable = document.querySelector('.cost')
const tableRows = document.querySelectorAll('.table-data')
let serial = tableRows.length

console.log('Total Common: 1500sqft is divided into each share')
console.log('Project complition is estimeted to 3 years')

calulateBtn.addEventListener('click', calculate)

pricePerKatha.addEventListener('keydown', (e) => {
  setTimeout(() => {
    priceLand.value = (landSize.value * e.target.value).toFixed(2)
    // priceLand.value.toFixed(2);
  }, 10)
})
priceLand.addEventListener('keydown', (e) => {
  setTimeout(() => {
    pricePerKatha.value = (e.target.value / landSize.value).toFixed(2)
    // pricePerKatha.value.toFixed(2);
  }, 10)
})

function calculate() {
  serial++

  const infoData = document.createElement('tr')
  infoData.classList.add('table-data')
  infoData.classList.add('first-table')

  infoData.innerHTML = `
        <td>${serial}</td>
        <td>${landLocation.value}</td>
        <td>${landSize.value}</td>
        <td>${numberWithCommas((pricePerKatha.value / 1).toFixed(2))}</td>
        <td>${numberWithCommas((priceLand.value / 1).toFixed(2))}</td>
        <td>${floorCount.value}</td>
        <td>${shareCount.value}</td>
        <td>${landSize.value * 3200}</td>
        <td>${((landSize.value * 3200) / shareCount.value).toFixed(2)}</td>
        <!-- common area is 1500 sqft in both ground floor and rooftop -->
        <td>${
          ((landSize.value * 3200) / shareCount.value).toFixed(2) -
          1500 / shareCount.value
        }</td>
    `

  const costData = document.createElement('tr')
  costData.classList.add('table-data')
  costData.classList.add('second-table')

  costData.innerHTML = `
        <td>${serial}</td>
        <td>2800</td>
        <td>${numberWithCommas(
          (priceLand.value / shareCount.value).toFixed(2)
        )}</td>
        <td>${numberWithCommas(
          ((landSize.value * 3200) / shareCount.value).toFixed(2) * 2800
        )}</td>
        <td>${numberWithCommas(
          (
            priceLand.value / shareCount.value +
            ((landSize.value * 3200) / shareCount.value) * 2800
          ).toFixed(2)
        )}</td>
        <td>${numberWithCommas(
          (
            (priceLand.value / shareCount.value +
              ((landSize.value * 3200) / shareCount.value) * 2800) /
            ((landSize.value * 3200) / shareCount.value)
          ).toFixed(2)
        )}</td>
        <td>${numberWithCommas(
          (priceLand.value / shareCount.value).toFixed(2)
        )}</td>
        <td>${numberWithCommas(
          (
            (((landSize.value * 3200) / shareCount.value).toFixed(2) * 2800) /
            36
          ).toFixed(2)
        )}</td>

    `

  infoTable.appendChild(infoData)
  costTable.appendChild(costData)

  // remove line starts here

  infoData.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    infoData.remove()
  })

  costData.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    costData.remove()
  })

  // remove line ends here

  // active line starts

  infoData.addEventListener('click', () => {
    infoData.classList.toggle('active')
  })
  costData.addEventListener('click', () => {
    costData.classList.toggle('active')
  })

  // function removeActive() {
  //     infoData.classList.remove('active')
  //     costData.classList.remove('active')
  // }

  // active line starts
}

//function to sepate the numbers in comma starts

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

//function to sepate the numbers in comma ends

// storeData();

// function storeData() {
//     const firstTable = document.querySelectorAll('.first-table');
//     const secondTable = document.querySelectorAll('.second-table');

//     const table1 = [];
//     const table2 = [];

//     firstTable.forEach(table => table1.push(serial,landLocation.value,landSize.value,pricePerKatha.value,priceLand.value,floorCount.value,(landSize.value * 3200),(((landSize.value * 3200) / shareCount.value).toFixed(2)),(((landSize.value * 3200) / shareCount.value).toFixed(2) - (1500 / shareCount.value))));

//     // console.log();
//     localStorage.setItem('table1', JSON.stringify(table1));

//     secondTable.forEach(table => table2.push(
//         `
//         <td>${serial}</td>
//         <td>2800</td>
//         <td>${(priceLand.value / shareCount.value).toFixed(2)}</td>
//         <td>${(((landSize.value * 3200) / shareCount.value).toFixed(2)) * 2800}</td>
//         <td>${((priceLand.value / shareCount.value) + (((landSize.value * 3200) / shareCount.value)) * 2800).toFixed(2)}</td>
//         <td>${(((priceLand.value / shareCount.value) + ((landSize.value * 3200) / shareCount.value) * 2800) / (((landSize.value * 3200) / shareCount.value))).toFixed(2)}</td>
//         `
//     ));
//     localStorage.setItem('table2', JSON.stringify(secondTable));
// }
