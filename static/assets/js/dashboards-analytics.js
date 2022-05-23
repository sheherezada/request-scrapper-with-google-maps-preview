/**
 * Dashboard Analytics
 */

'use strict';
function data_pass(data_got){
  var data = data_got;
  var data = JSON.parse(data)
  console.log(data)
  console.log(data[0])
  console.log(data[0].fields.beds)

  // Rental Types Data
  var entire_rooms = data.filter(function (el) {
      return el.fields.house_type == 'entire_home';
  }).length;
  var private_rooms = data.filter(function (el) {
      return el.fields.house_type == 'private_room';
  }).length;
  /*var entire_rooms = da.filter(function (el) {
      return el.fields.room_type == 'Entire home/apt';
  }).length;*/

// Rental Sizes Data

var studios = data.filter(function (el) {
  return el.fields.room_type == 'Studio';
}).length;
var one_bedrooms = data.filter(function (el) {
    return el.fields.room_type == '1 bedroom';
}).length;
var two_bedrooms = data.filter(function (el) {
    return el.fields.room_type == '2 bedrooms';
}).length;
var three_bedrooms = data.filter(function (el) {
    return el.fields.room_type == '3 bedrooms';
}).length;
var four_bedrooms = data.filter(function (el) {
    return el.fields.room_type == '4 bedrooms';
}).length;
var five_rooms = data.filter(function (el) {
  return el.fields.room_type == '5 bedrooms';
}).length;
  
  (function () {
      let cardColor, headingColor, axisColor, shadeColor, borderColor;
  
      cardColor = config.colors.white;
      headingColor = config.colors.headingColor;
      axisColor = config.colors.axisColor;
      borderColor = config.colors.borderColor;
  
      // Rentals Types Chart - Bar Chart
      // --------------------------------------------------------------------
      const rentalsChartEl = document.querySelector('#rentalsChart'),
          rentalsChartOptions = {
          series: [
              {
              name: '2021',
              data: [entire_rooms, private_rooms, 15]
              }
          ],
          chart: {
              height: 150,
              stacked: true,
              type: 'bar',
              toolbar: { show: false }
          },
          plotOptions: {
              bar: {
              horizontal: true,
              columnWidth: '33%',
              borderRadius: 12,
              startingShape: 'rounded',
              endingShape: 'rounded'
              }
          },
          colors: [config.colors.primary, config.colors.info],
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth',
              width: 6,
              lineCap: 'round',
              colors: [cardColor]
          },
          legend: {
              show: true,
              horizontalAlign: 'left',
              position: 'top',
              markers: {
              height: 8,
              width: 8,
              radius: 12,
              offsetX: -3
              },
              labels: {
              colors: axisColor
              },
              itemMargin: {
              horizontal: 10
              }
          },
          grid: {
              borderColor: borderColor,
              padding: {
              top: 0,
              bottom: -8,
              left: 20,
              right: 20
              }
          },
          xaxis: {
              categories: ['Entire Home', 'Private Rooms', 'Shared Room'],
              labels: {
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              },
              axisTicks: {
              show: false
              },
              axisBorder: {
              show: false
              }
          },
          yaxis: {
              labels: {
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              }
          },
          responsive: [
              {
              breakpoint: 1700,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '32%'
                  }
                  }
              }
              },
              {
              breakpoint: 1580,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '35%'
                  }
                  }
              }
              },
              {
              breakpoint: 1440,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '42%'
                  }
                  }
              }
              },
              {
              breakpoint: 1300,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '48%'
                  }
                  }
              }
              },
              {
              breakpoint: 1200,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '40%'
                  }
                  }
              }
              },
              {
              breakpoint: 1040,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 11,
                      columnWidth: '48%'
                  }
                  }
              }
              },
              {
              breakpoint: 991,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '30%'
                  }
                  }
              }
              },
              {
              breakpoint: 840,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '35%'
                  }
                  }
              }
              },
              {
              breakpoint: 768,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '28%'
                  }
                  }
              }
              },
              {
              breakpoint: 640,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '32%'
                  }
                  }
              }
              },
              {
              breakpoint: 576,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '37%'
                  }
                  }
              }
              },
              {
              breakpoint: 480,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '45%'
                  }
                  }
              }
              },
              {
              breakpoint: 420,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '52%'
                  }
                  }
              }
              },
              {
              breakpoint: 380,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '60%'
                  }
                  }
              }
              }
          ],
          states: {
              hover: {
              filter: {
                  type: 'none'
              }
              },
              active: {
              filter: {
                  type: 'none'
              }
              }
          }
          };
      if (typeof rentalsChartEl !== undefined && rentalsChartEl !== null) {
          const rentalsChart = new ApexCharts(rentalsChartEl, rentalsChartOptions);
          rentalsChart.render();
      }
  
      // Rentals Size Chart - Bar Chart
      // --------------------------------------------------------------------
      const rentalSizeChartEl = document.querySelector('#rentalSizeChart'),
          rentalSizeChartOptions = {
          series: [
              {
              name: 'Rentals',
              data: [parseInt(studios), one_bedrooms, two_bedrooms, three_bedrooms, four_bedrooms, five_rooms]
              }
          ],
          chart: {
              height: 250,
              stacked: false,
              type: 'bar',
              toolbar: { show: false }
          },
          plotOptions: {
              bar: {
              horizontal: false,
              columnWidth: '33%',
              borderRadius: 12,
              startingShape: 'rounded',
              endingShape: 'rounded'
              }
          },
          colors: [config.colors.primary],
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth',
              width: 6,
              lineCap: 'round',
              colors: [cardColor]
          },
          legend: {
              show: false,
              horizontalAlign: 'left',
              position: 'top',
              markers: {
              height: 8,
              width: 8,
              radius: 12,
              offsetX: -3
              },
              labels: {
              colors: axisColor
              },
              itemMargin: {
              horizontal: 10
              }
          },
          grid: {
              borderColor: borderColor,
              padding: {
              top: 0,
              bottom: -8,
              left: 20,
              right: 20
              }
          },
          xaxis: {
              categories: ['Studio', '1', '2', '3', '4', '5+'],
              labels: {
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              },
              axisTicks: {
              show: false
              },
              axisBorder: {
              show: false
              }
          },
          yaxis: {
              labels: {
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              }
          },
          responsive: [
              {
              breakpoint: 1700,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '32%'
                  }
                  }
              }
              },
              {
              breakpoint: 1580,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '35%'
                  }
                  }
              }
              },
              {
              breakpoint: 1440,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '42%'
                  }
                  }
              }
              },
              {
              breakpoint: 1300,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '48%'
                  }
                  }
              }
              },
              {
              breakpoint: 1200,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '40%'
                  }
                  }
              }
              },
              {
              breakpoint: 1040,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 11,
                      columnWidth: '48%'
                  }
                  }
              }
              },
              {
              breakpoint: 991,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '30%'
                  }
                  }
              }
              },
              {
              breakpoint: 840,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '35%'
                  }
                  }
              }
              },
              {
              breakpoint: 768,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '28%'
                  }
                  }
              }
              },
              {
              breakpoint: 640,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '32%'
                  }
                  }
              }
              },
              {
              breakpoint: 576,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '37%'
                  }
                  }
              }
              },
              {
              breakpoint: 480,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '45%'
                  }
                  }
              }
              },
              {
              breakpoint: 420,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '52%'
                  }
                  }
              }
              },
              {
              breakpoint: 380,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '60%'
                  }
                  }
              }
              }
          ],
          states: {
              hover: {
              filter: {
                  type: 'none'
              }
              },
              active: {
              filter: {
                  type: 'none'
              }
              }
          }
          };
      if (typeof rentalSizeChartEl !== undefined && rentalSizeChartEl !== null) {
          const rentalSizeChart = new ApexCharts(rentalSizeChartEl, rentalSizeChartOptions);
          rentalSizeChart.render();
      }


      // Profit Report Line Chart
      // --------------------------------------------------------------------
      const profileReportChartEl = document.querySelector('#profileReportChart'),
          profileReportChartConfig = {
          chart: {
              height: 80,
              // width: 175,
              type: 'line',
              toolbar: {
              show: false
              },
              dropShadow: {
              enabled: true,
              top: 10,
              left: 5,
              blur: 3,
              color: config.colors.warning,
              opacity: 0.15
              },
              sparkline: {
              enabled: true
              }
          },
          grid: {
              show: false,
              padding: {
              right: 8
              }
          },
          colors: [config.colors.warning],
          dataLabels: {
              enabled: false
          },
          stroke: {
              width: 5,
              curve: 'smooth'
          },
          series: [
              {
              data: [110, 270, 145, 245, 205, 285]
              }
          ],
          xaxis: {
              show: false,
              lines: {
              show: false
              },
              labels: {
              show: false
              },
              axisBorder: {
              show: false
              }
          },
          yaxis: {
              show: false
          }
          };
      if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
          const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
          profileReportChart.render();
      }
  
      // Order Statistics Chart
      // --------------------------------------------------------------------
      const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
          orderChartConfig = {
          chart: {
              height: 165,
              width: 130,
              type: 'donut',
              toolbar: { show: false }
          },
          labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
          series: [85, 15, 50, 50],
          colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
          stroke: {
              width: 5,
              colors: cardColor
          },
          dataLabels: {
              enabled: false,
              formatter: function (val, opt) {
              return parseInt(val) + '%';
              }
          },
          legend: {
              show: false
          },
          grid: {
              padding: {
              top: 0,
              bottom: 0,
              right: 15
              }
          },
          plotOptions: {
              pie: {
              donut: {
                  size: '75%',
                  labels: {
                  show: true,
                  value: {
                      fontSize: '1.5rem',
                      fontFamily: 'Public Sans',
                      color: headingColor,
                      offsetY: -15,
                      formatter: function (val) {
                      return parseInt(val) + '%';
                      }
                  },
                  name: {
                      offsetY: 20,
                      fontFamily: 'Public Sans'
                  },
                  total: {
                      show: true,
                      fontSize: '0.8125rem',
                      color: axisColor,
                      label: 'Weekly',
                      formatter: function (w) {
                      return '38%';
                      }
                  }
                  }
              }
              }
          }
          };
      if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
          const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
          statisticsChart.render();
      }
  
      // Income Chart - Area chart
      // --------------------------------------------------------------------
      const incomeChartEl = document.querySelector('#incomeChart'),
          incomeChartConfig = {
          series: [
              {
              data: [24, 21, 30, 22, 42, 26, 35, 29]
              }
          ],
          chart: {
              height: 215,
              parentHeightOffset: 0,
              parentWidthOffset: 0,
              toolbar: {
              show: false
              },
              type: 'area'
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              width: 2,
              curve: 'smooth'
          },
          legend: {
              show: false
          },
          markers: {
              size: 6,
              colors: 'transparent',
              strokeColors: 'transparent',
              strokeWidth: 4,
              discrete: [
              {
                  fillColor: config.colors.white,
                  seriesIndex: 0,
                  dataPointIndex: 7,
                  strokeColor: config.colors.primary,
                  strokeWidth: 2,
                  size: 6,
                  radius: 8
              }
              ],
              hover: {
              size: 7
              }
          },
          colors: [config.colors.primary],
          fill: {
              type: 'gradient',
              gradient: {
              shade: shadeColor,
              shadeIntensity: 0.6,
              opacityFrom: 0.5,
              opacityTo: 0.25,
              stops: [0, 95, 100]
              }
          },
          grid: {
              borderColor: borderColor,
              strokeDashArray: 3,
              padding: {
              top: -20,
              bottom: -8,
              left: -10,
              right: 8
              }
          },
          xaxis: {
              categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              axisBorder: {
              show: false
              },
              axisTicks: {
              show: false
              },
              labels: {
              show: true,
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              }
          },
          yaxis: {
              labels: {
              show: false
              },
              min: 10,
              max: 50,
              tickAmount: 4
          }
          };
      if (typeof incomeChartEl !== undefined && incomeChartEl !== null) {
          const incomeChart = new ApexCharts(incomeChartEl, incomeChartConfig);
          incomeChart.render();
      }
  
  
      // rentalGrowth Chart - Area chart
      // --------------------------------------------------------------------
      const rentalGrowthChartEl = document.querySelector('#rentalGrowthChart'),
          rentalGrowthChartConfig = {
          series: [
              {
              name: 'Active Rentals',
              data: [24, 21, 30, 22, 42, 26, 35, 29, 42, 26, 35, 29]
              }
          ],
          chart: {
              height: 215,
              parentHeightOffset: 0,
              parentWidthOffset: 0,
              toolbar: {
              show: false
              },
              type: 'area'
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              width: 2,
              curve: 'smooth'
          },
          legend: {
              show: false
          },
          markers: {
              size: 6,
              colors: '#00bcd4',
              strokeColors: '#31d9ae',
              strokeWidth: 4,
              discrete: [
              {
                  fillColor: config.colors.white,
                  seriesIndex: 0,
                  dataPointIndex: 7,
                  strokeColor: config.colors.primary,
                  strokeWidth: 2,
                  size: 6,
                  radius: 8
              }
              ],
              hover: {
              size: 7
              }
          },
          colors: ['#00bcd4'],
          fill: {
              type: 'gradient',
              gradient: {
              shade: shadeColor,
              shadeIntensity: 0.6,
              opacityFrom: 0.5,
              opacityTo: 0.25,
              stops: [0, 95, 100]
              }
          },
          grid: {
              borderColor: borderColor,
              strokeDashArray: 3,
              padding: {
              top: -20,
              bottom: -8,
              left: 0,
              right: 8
              }
          },
          xaxis: {
              categories: ['\'20Q1', '\'20Q2', '\'20Q3', '\'20Q4', '\'21Q1', '\'21Q2', '\'21Q3', '\'21Q4', '\'22Q1', '\'22Q2', '\'22Q3', '\'22Q4'],
              axisBorder: {
              show: false
              },
              axisTicks: {
              show: false
              },
              labels: {
              show: true,
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              }
          },
          yaxis: {
              labels: {
              show: false
              },
              min: 10,
              max: 50,
              tickAmount: 4
          }
          };
      if (typeof rentalGrowthChartEl !== undefined && rentalGrowthChartEl !== null) {
          const rentalGrowthChart = new ApexCharts(rentalGrowthChartEl, rentalGrowthChartConfig);
          rentalGrowthChart.render();
      }
  
  
  
      // Amenities Chart - Bar Chart
      // --------------------------------------------------------------------
      const amenitiesChartEl = document.querySelector('#amenitiesChart'),
          amenitiesChartOptions = {
          series: [
              {
              name: 'Rentals',
              data: [1747,2836,1125,390,129,73]
              }
          ],
          chart: {
              height: 250,
              stacked: false,
              type: 'bar',
              toolbar: { show: false }
          },
          plotOptions: {
              bar: {
              horizontal: true,
              columnWidth: '33%',
              borderRadius: 12,
              startingShape: 'rounded',
              endingShape: 'rounded'
              }
          },
          colors: [config.colors.primary],
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth',
              width: 6,
              lineCap: 'round',
              colors: [cardColor]
          },
          legend: {
              show: false,
              horizontalAlign: 'left',
              position: 'top',
              markers: {
              height: 8,
              width: 8,
              radius: 12,
              offsetX: -3
              },
              labels: {
              colors: axisColor
              },
              itemMargin: {
              horizontal: 10
              }
          },
          grid: {
              borderColor: borderColor,
              padding: {
              top: 0,
              bottom: -8,
              left: 20,
              right: 20
              }
          },
          xaxis: {
              categories: ['Studio', '1', '2', '3', '4', '5+'],
              labels: {
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              },
              axisTicks: {
              show: false
              },
              axisBorder: {
              show: false
              }
          },
          yaxis: {
              labels: {
              style: {
                  fontSize: '13px',
                  colors: axisColor
              }
              }
          },
          responsive: [
              {
              breakpoint: 1700,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '32%'
                  }
                  }
              }
              },
              {
              breakpoint: 1580,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '35%'
                  }
                  }
              }
              },
              {
              breakpoint: 1440,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '42%'
                  }
                  }
              }
              },
              {
              breakpoint: 1300,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '48%'
                  }
                  }
              }
              },
              {
              breakpoint: 1200,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '40%'
                  }
                  }
              }
              },
              {
              breakpoint: 1040,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 11,
                      columnWidth: '48%'
                  }
                  }
              }
              },
              {
              breakpoint: 991,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '30%'
                  }
                  }
              }
              },
              {
              breakpoint: 840,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '35%'
                  }
                  }
              }
              },
              {
              breakpoint: 768,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '28%'
                  }
                  }
              }
              },
              {
              breakpoint: 640,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '32%'
                  }
                  }
              }
              },
              {
              breakpoint: 576,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '37%'
                  }
                  }
              }
              },
              {
              breakpoint: 480,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '45%'
                  }
                  }
              }
              },
              {
              breakpoint: 420,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '52%'
                  }
                  }
              }
              },
              {
              breakpoint: 380,
              options: {
                  plotOptions: {
                  bar: {
                      borderRadius: 10,
                      columnWidth: '60%'
                  }
                  }
              }
              }
          ],
          states: {
              hover: {
              filter: {
                  type: 'none'
              }
              },
              active: {
              filter: {
                  type: 'none'
              }
              }
          }
          };
      if (typeof amenitiesChartEl !== undefined && amenitiesChartEl !== null) {
          const amenitiesChart = new ApexCharts(amenitiesChartEl, amenitiesChartOptions);
          amenitiesChart.render();
      }
  
  
      // Expenses Mini Chart - Radial Chart
      // --------------------------------------------------------------------
      const weeklyExpensesEl = document.querySelector('#expenses'),
          weeklyExpensesConfig = {
          series: [{
              name: 'Series 1',
              data: [80, 50, 30, 40, 100, 20],
          }],
              chart: {
              height: 250,
              type: 'radar',
              toolbar: { show: false }
          },
          markers: {
              size: 5,
              hover: {
              size: 10
              }
          },
          plotOptions: {
              radar: {
              polygons: {
                  strokeColor: '#fff',
                  fill: {
                      colors: ['#fff']
                  }
              }
              }
          },
          xaxis: {
              categories: ['Accuracy', 'Check In', 'Cleanliness', 'Communication', 'Location', 'Value']
          },
          yaxis: {
              labels: {
              show: false,
              },
          },
          fill: {
              opacity: 0.5,
              colors: ['#fff']
          },
          stroke: {
              show: true,
              width: 2,
              colors: ['#ff9800', '#6f5bec','#0e6ca2'],
              dashArray: 0
          }
          };
      if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
          const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
          weeklyExpenses.render();
      }
  
  
      // Order Statistics Chart
      // --------------------------------------------------------------------
      const rentalActivityChart = document.querySelector('#rentalActivityChart'),
          rentalChartConfig = {
          chart: {
              height: 165,
              width: 130,
              type: 'donut',
              toolbar: { show: false }
          },
          labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
          series: [85, 15, 50, 50],
          colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
          dataLabels: {
              enabled: false,
              formatter: function (val, opt) {
              return parseInt(val) + '%';
              }
          },
          legend: {
              show: false
          },
          grid: {
              padding: {
              top: 0,
              bottom: 0,
              right: 15
              }
          },
          plotOptions: {
              pie: {
              donut: {
                  size: '75%',
                  labels: {
                  show: true,
                  value: {
                      fontSize: '1.5rem',
                      fontFamily: 'Public Sans',
                      color: '#fff',
                      offsetY: -15,
                      formatter: function (val) {
                      return parseInt(val) + '%';
                      }
                  },
                  name: {
                      offsetY: 20,
                      fontFamily: 'Public Sans'
                  },
                  total: {
                      show: true,
                      fontSize: '0.8125rem',
                      color: '#0e6ca2',
                      label: 'Available',
                      formatter: function (w) {
                      return '38%';
                      }
                  }
                  }
              }
              }
          }
          };
      if (typeof rentalActivityChart !== undefined && rentalActivityChart !== null) {
          const rentalActivityStatisticsChart = new ApexCharts(rentalActivityChart, rentalChartConfig);
          rentalActivityStatisticsChart.render();
      }
  
  
      // Order Statistics Chart
      // --------------------------------------------------------------------
      const rentalActivityChart2 = document.querySelector('#rentalActivityChart2'),
          rentalChartConfig2 = {
          chart: {
              height: 165,
              width: 130,
              type: 'donut',
              toolbar: { show: false }
          },
          labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
          series: [85, 15, 50, 50],
          colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
          dataLabels: {
              enabled: false,
              formatter: function (val, opt) {
              return parseInt(val) + '%';
              }
          },
          legend: {
              show: false
          },
          grid: {
              padding: {
              top: 0,
              bottom: 0,
              right: 15
              }
          },
          plotOptions: {
              pie: {
              donut: {
                  size: '75%',
                  labels: {
                  show: true,
                  value: {
                      fontSize: '1.5rem',
                      fontFamily: 'Public Sans',
                      color: '#fff',
                      offsetY: -15,
                      formatter: function (val) {
                      return parseInt(val) + '%';
                      }
                  },
                  name: {
                      offsetY: 20,
                      fontFamily: 'Public Sans'
                  },
                  total: {
                      show: true,
                      fontSize: '0.8125rem',
                      color: '#0e6ca2',
                      label: 'Booked',
                      formatter: function (w) {
                      return '38%';
                      }
                  }
                  }
              }
              }
          }
          };
      if (typeof rentalActivityChart2 !== undefined && rentalActivityChart2 !== null) {
          const rentalActivityStatisticsChart2 = new ApexCharts(rentalActivityChart2, rentalChartConfig2);
          rentalActivityStatisticsChart2.render();
      }
  
  
      // Rental Settings Chart
      // --------------------------------------------------------------------
      const rentalSettingsChartEl = document.querySelector('#rentalSettingsChart'),
      rentalSettingsChartConfig = {
          series: [{
          name: 'Flexible',
          data: [13]
          }, {
          name: 'Moderate',
          data: [6]
          }, {
          name: 'N/A',
          data: [13]
          }, {
          name: 'Strict',
          data: [68]
          }, {
          name: 'Super Strict',
          data: [2]
          }],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: "100%",
          toolbar: { show: false }
          },
          plotOptions: {
          bar: {
              horizontal: true,
          },
          },
          stroke: {
          width: 1,
          colors: ['#fff']
          },
          title: {
          text: 'Rental Settings'
          },
          xaxis: {
          categories: ['Cancellation Policy', 'Minimum Stay'],
          labels: {
              formatter: function (val) {
              return val + "%"
              }
          }
          },
          yaxis: {
          title: {
              text: undefined
          },
          },
          tooltip: {
          y: {
              formatter: function (val) {
              return val + "%"
              }
          }
          },
          fill: {
          opacity: 1
          },
          legend: {
          show: false,
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
          }
          };
      if (typeof rentalSettingsChartEl !== undefined && rentalSettingsChartEl !== null) {
          const rentalSettingsChart = new ApexCharts(rentalSettingsChartEl, rentalSettingsChartConfig);
          rentalSettingsChart.render();
      }
      
      })();
  
  
};




