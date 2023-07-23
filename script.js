const toggle = document.querySelector(".image");
const sideBar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => sideBar.classList.toggle("close"));
var options = {
    series: [{
            name: "Employers",
            data: [40,60,80,100,150,180,220,250,300],
        },
        {
            name: "Employee",
            data: [40,60,80,100,150,180,220,250,300],
        },
        {
            name: "total Interest",
            data: [40,60,80,100,150,180,220,250,300],
        },
    ],
    chart: {
        type: "bar",
        height: 400,
        width: "100%",
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    responsive: [{
        breakpoint: 200,
    }, ],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    xaxis: {
        type: "Number",
        categories: [20, 25, 30, 35, 40, 60, 65],
    },
    yaxis: {
        type: "currency",
        categories: [20, 25, 30, 35, 40, 60, 65],
    },
    legend: {
        show: false,
    },
    fill: {
        opacity: 1,
    },
    dataLabels: {
        enabled: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();