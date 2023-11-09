const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

const Amazon_load=()=>{
  let x = document.getElementById("Analysis")
  x.innerHTML= `<div class="row">
    <div class="graph">
      <iframe src="./Graph/graph_Amazon.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="graph2">
      <iframe src="./Graph2/graph2_Amazon.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="chart1">
      <iframe src="./Chart/chart_Amazon.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row3">
    <h4>Table data values </h4>
    <iframe id="myframe1" width="700" height="900" frameborder="0" scrolling="no"
      src="https://onedrive.live.com/embed?resid=3703753A0A621E22%2131204&authkey=%21AIsaNYofxusTcfg&em=2&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC23&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false"></iframe>
  </div>`
}
const Flipkart_load=()=>{
  x = document.getElementById("Analysis")
  x.innerHTML =
  `<div class="row">
    <div class="graph">
      <iframe src="./Graph/graph_Flipkart.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="graph2">
      <iframe src="./Graph2/graph2_Flipkart.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="chart1">
      <iframe src="./Chart/chart_Flipkart.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row3">
    <h4>Table data values </h4>
    <iframe width="700" height="900" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=3703753A0A621E22%2131202&authkey=%21AAG8AqcbwTBw-T0&em=2&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC35&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false"></iframe>
  </div>`
}
const Myntra_load=()=>{
  x = document.getElementById("Analysis")
  x.innerHTML =
  `<div class="row">
    <div class="graph">
      <iframe src="./Graph/graph_Myntra.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="graph2">
      <iframe src="./Graph2/graph2_Myntra.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="chart1">
      <iframe src="./Chart/chart_Myntra.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row3">
    <h4>Table data values </h4>
    <iframe width="700" height="900" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=3703753A0A621E22%2131207&authkey=%21AIzM2tgPo1pRmfU&em=2&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC27&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false"></iframe>
  </div>`
}
const Meesho_load = () => {
  x = document.getElementById("Analysis")
  x.innerHTML =
  `<div class="row">
    <div class="graph">
      <iframe src="./Graph/graph_Meesho.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="graph2">
      <iframe src="./Graph2/graph2_Meesho.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="chart1">
      <iframe src="./Chart/chart_Meesho.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row3">
    <h4>Table data values </h4>
    <iframe width="700" height="900" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=3703753A0A621E22%2131203&authkey=%21AM7XuCdWjDQZul0&em=2&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC11&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false"></iframe>
  </div>`
}
const Ajio_load = () => {
  x = document.getElementById("Analysis")
  x.innerHTML =
  `<div class="row">
    <div class="graph">
      <iframe src="./Graph/graph_Ajio.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="graph2">
      <iframe src="./Graph2/graph2_Ajio.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="chart1">
      <iframe src="./Chart/chart_Ajio.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row3">
    <h4>Table data values </h4>
    <iframe width="700" height="900" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=3703753A0A621E22%2131205&authkey=%21AOXh9cb1Pr93iPg&em=2&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC31&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false"></iframe>
  </div>`
}
const Snapdeal_load = () => {
  x = document.getElementById("Analysis")
  x.innerHTML =
  `<div class="row">
    <div class="graph">
      <iframe src="./Graph/graph_Snapdeal.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="graph2">
      <iframe src="./Graph2/graph2_Snapdeal.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row">
    <div class="chart1">
      <iframe src="./Chart/chart_Snapdeal.html" frameborder="0"></iframe>
    </div>
  </div>
  <div class="row3">
    <h4>Table data values </h4>
    <iframe width="700" height="900" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=3703753A0A621E22%2131206&authkey=%21AI8wiYP1ZLIenwk&em=2&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC13&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&resen=false&ed1JS=false"></iframe>
  </div>`
}

function function_check(event){
  event.preventDefault()
  let val = document.body.querySelector('input').value;
  if (val.toLowerCase() == "amazon") {
    Amazon_load()
  }
  else if (val.toLowerCase() == "flipkart") {
    Flipkart_load()
  }
  else if (val.toLowerCase() == "snapdeal") {
    Snapdeal_load()
  }
  else if (val.toLowerCase() == "meesho") {
    Meesho_load()
  }
  else if (val.toLowerCase() == "myntra") {
    Myntra_load()
  }
  else if (val.toLowerCase() == "ajio") {
    Ajio_load()
  }
  else{
    alert("Incorrect Company Name!!!!")
  }
}
let btn1=document.getElementById("btn1")
btn1.addEventListener('click',function_check)