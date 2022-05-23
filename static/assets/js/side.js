
            (function () {
                let cardColor, headingColor, axisColor, shadeColor, borderColor;
    
                cardColor = config.colors.white;
                headingColor = config.colors.headingColor;
                axisColor = config.colors.axisColor;
                borderColor = config.colors.borderColor;
    
                // Total Revenue Report Chart - Bar Chart
                /* --------------------------------------------------------------------
                const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
                    totalRevenueChartOptions = {
                    series: [
                        {
                        name: '2021',
                        data: [18, 7, 15, 29, 18, 12, 9]
                        },
                        {
                        name: '2020',
                        data: [-13, -18, -9, -14, -5, -17, -15]
                        }
                    ],
                    chart: {
                        height: 300,
                        stacked: true,
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
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
                if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
                    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
                    totalRevenueChart.render();
                }
                */
    
    
                // Rentals Report Chart - Bar Chart
                // --------------------------------------------------------------------
                const rentalsChartEl = document.querySelector('#rentalsChart'),
                    rentalsChartOptions = {
                    series: [
                        {
                        name: '2021',
                        data: [da[0], 7, 15]
                        }
                    ],
                    chart: {
                        height: 200,
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
                        categories: ['Jan', 'Feb', 'Mar'],
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
    
                // Rentals Report Chart - Bar Chart
                // --------------------------------------------------------------------
                const rentalSizeChartEl = document.querySelector('#rentalSizeChart'),
                    rentalSizeChartOptions = {
                    series: [
                        {
                        name: 'Rentals',
                        data: [{
                            x: 'Studio',
                            y: 1747
                        },{
                            x: 'Studio',
                            y: 2836
                        },{
                            x: 'Studio',
                            y: 1125
                        },{
                            x: 'Studio',
                            y: 390
                        },{
                            x: 'Studio',
                            y: 129
                        },{
                            x: 'Studio',
                            y: 73
                        }]
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
    
                // Growth Chart - Radial Bar Chart
                /* --------------------------------------------------------------------
                const growthChartEl = document.querySelector('#growthChart'),
                    growthChartOptions = {
                    series: [78],
                    labels: ['Growth'],
                    chart: {
                        height: 240,
                        type: 'radialBar'
                    },
                    plotOptions: {
                        radialBar: {
                        size: 150,
                        offsetY: 10,
                        startAngle: -150,
                        endAngle: 150,
                        hollow: {
                            size: '55%'
                        },
                        track: {
                            background: cardColor,
                            strokeWidth: '100%'
                        },
                        dataLabels: {
                            name: {
                            offsetY: 15,
                            color: headingColor,
                            fontSize: '15px',
                            fontWeight: '600',
                            fontFamily: 'Public Sans'
                            },
                            value: {
                            offsetY: -25,
                            color: headingColor,
                            fontSize: '22px',
                            fontWeight: '500',
                            fontFamily: 'Public Sans'
                            }
                        }
                        }
                    },
                    colors: [config.colors.primary],
                    fill: {
                        type: 'gradient',
                        gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.5,
                        gradientToColors: [config.colors.primary],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.6,
                        stops: [30, 70, 100]
                        }
                    },
                    stroke: {
                        dashArray: 5
                    },
                    grid: {
                        padding: {
                        top: -35,
                        bottom: -10
                        }
                    },
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
                if (typeof growthChartEl !== undefined && growthChartEl !== null) {
                    const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
                    growthChart.render();
                }*/
    
    
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
                        categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
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
                const rentalActivityChart = document.querySelector('#orderStatisticsChart'),
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
                if (typeof rentalActivityChart !== undefined && rentalActivityChart !== null) {
                    const rentalActivityStatisticsChart = new ApexCharts(rentalActivityChart, rentalChartConfig);
                    rentalActivityStatisticsChart.render();
                }
    
    
                // Rental Settings Chart
                // --------------------------------------------------------------------
                const rentalSettingsChartEl = document.querySelector('#rentalSettingsChart'),
                rentalSettingsChartConfig = {
                    series: [{
                    name: 'Marine Sprite',
                    data: [44, 55, 41, 37, 22, 43, 21]
                    }, {
                    name: 'Striking Calf',
                    data: [53, 32, 33, 52, 13, 43, 32]
                    }, {
                    name: 'Tank Picture',
                    data: [12, 17, 11, 9, 15, 11, 20]
                    }, {
                    name: 'Bucket Slope',
                    data: [9, 7, 5, 8, 6, 9, 4]
                    }, {
                    name: 'Reborn Kid',
                    data: [25, 12, 19, 32, 25, 24, 10]
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
                    text: 'Fiction Books Sales'
                    },
                    xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                    labels: {
                        formatter: function (val) {
                        return val + "K"
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
                        return val + "K"
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
    
    