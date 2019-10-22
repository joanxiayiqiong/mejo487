//commonOccup
var dataAscendingNum=[];
var dataDescendingNum=[];
var commonOccupationMaleSalary=[];
var commonOccupationFemaleSalary=[];
var occupation=[]; //occupations 558
var totalNum=[]; //NumberofWorker_FullYear
var medianSalaryMale=[]; //MedianSalary_Male
var medianSalaryFemale=[]; //MedianSalary_Female

//generalField
var dataAscendingPer=[];
var dataDescendingPer=[];
var descendingPerDiff=[];
var generalField=[];
var salaryPer=[]; //Percentage_WomenofMale

//maleDominant
var dataDscendingMale=[];
var malePer=[];
var maleOccupation=[];
var maleSalary=[];
var femaleSalary=[];

//femaleDominant
var dataDescendingFemale=[];
var femalePer=[];
var femaleOccupation=[];
var femaleSalaryF=[];
var maleSalaryF=[];

//topOccupation
var dataAscendingPay=[];
var dataDescendingPay=[];
var topOccupation=[];
var femaleNum=[]; //NumberofWorker_FullYear_Female
var maleNum=[]; //NumberofWorker_FullYear_Male



$( document ).ready(function() {
    // createCharts();
    loadData();

});

function loadData(){
  $.ajax({
    type:"GET",
    url:"genderpaygap.json",
    dataType:"JSON",
    success:parseData
  });
}

function parseData(data){
  dataAscendingNum = data;
// sort the 2d array by total num, descending
  dataAscendingNum.sort(function(a,b) {
      return a["NumberofWorker_FullYear"]-b["NumberofWorker_FullYear"];
  });
  dataDescendingNum = dataAscendingNum.reverse();

  for(var i=0, len=dataDescendingNum.length; i<len; i++){
    occupation.push(dataDescendingNum[i]["Occupational"]);
    totalNum.push(dataDescendingNum[i]["NumberofWorker_FullYear"]);
    medianSalaryMale.push(dataDescendingNum[i]["MedianSalary_Male"]);
    medianSalaryFemale.push(dataDescendingNum[i]["MedianSalary_Female"]);
  }

  //common Occupation Salary array
  for (var i = 1; i < 10; i++) {
    commonOccupationFemaleSalary.push(medianSalaryFemale[i]);
    console.log(commonOccupationFemaleSalary);
  }

// sort the 2d array by wage percentage difference, descending
dataAscendingPer = data;
dataAscendingPer.sort(function(a,b) {
    return a["Percentage_WomenofMale"]-b["Percentage_WomenofMale"];
});
dataDescendingPer = dataAscendingPer.reverse();

for(var i=0, len=dataDescendingNum.length; i<len; i++){
  generalField.push(dataDescendingNum[i]["Occupational"]);
  salaryPer.push(dataDescendingNum[i]["Percentage_WomenofMale"]);
}

// sort the 2d array by MaleNum and FemaleNum, descending
dataDscendingMale = data;
dataDscendingMale.sort(function(a,b) {
    return a["PercentageofFemale_Occupation"]-b["PercentageofFemale_Occupation"];
});

for(var i=0, len=dataDscendingMale.length; i<len; i++){
  maleOccupation.push(dataDscendingMale[i]["Occupational"]);
  malePer.push(1-dataDscendingMale[i]["PercentageofFemale_Occupation"]);
  maleSalary.push(dataDscendingMale[i]["MedianSalary_Male"]);
  femaleSalary.push(dataDscendingMale[i]["MedianSalary_Female"]);
}

dataDescendingFemale=dataDscendingMale.reverse();
for(var i=0, len=data.length; i<len; i++){
  femaleOccupation.push(dataDescendingFemale[i]["Occupational"]);
  femalePer.push(dataDescendingFemale[i]["PercentageofFemale_Occupation"]);
  maleSalaryF.push(dataDescendingFemale[i]["MedianSalary_Male"]);
  femaleSalaryF.push(dataDescendingFemale[i]["MedianSalary_Female"]);
}


// sort the 2d array by median salary, descending
dataAscendingPay = data;
dataAscendingPay.sort(function(a,b) {
    return a["MedianSalary"]-b["MedianSalary"];
});
dataDescendingPay=dataAscendingPay.reverse();
console.log(dataDescendingPay);
for(var i=0, len=data.length; i<len; i++){
  topOccupation.push(dataDescendingPay[i]["Occupational"]);
  femaleNum.push(dataDescendingPay[i]["NumberofWorker_FullYear_Female"]);
  maleNum.push(dataDescendingPay[i]["NumberofWorker_FullYear_Male"]);
}

  createCharts();
}

function createCharts(){
  Highcharts.chart('commonOccup', {
    chart: {
      type: 'column',
      inverted: true
    },
    title: {
      text: 'Comparing Male and Female Earnings, by Most Common Occupations'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
          'Top 15 common occupations with greatest number of employees' : 'with greatest number of employees'
      },
    xAxis: {
      categories: [
        occupation[1],
        occupation[2],
        occupation[3],
        occupation[4],
        occupation[5],
        occupation[6],
        occupation[7],
        occupation[8],
        occupation[9],
        occupation[10],
        occupation[11],
        occupation[12],
        occupation[13],
        occupation[14],
        occupation[15],
      ]
    },
    yAxis: [{
      min: 0,
      title: {
        text: 'Median Salary ($)'
      }
    }, {
      opposite: false
    }],
    legend: {
      shadow: false
    },
    tooltip: {
      shared: true
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Women',
      color: 'rgba(248,161,63,1)',
      data: [medianSalaryFemale[1],
      medianSalaryFemale[2],
      medianSalaryFemale[3],
      medianSalaryFemale[4],
      medianSalaryFemale[5],
      medianSalaryFemale[6],
      medianSalaryFemale[7],
      medianSalaryFemale[8],
      medianSalaryFemale[9],
      medianSalaryFemale[10],
      medianSalaryFemale[11],
      medianSalaryFemale[12],
      medianSalaryFemale[13],
      medianSalaryFemale[14],
      medianSalaryFemale[15]
      ],
      tooltip: {
        valuePrefix: '$'
      },
      pointPadding: 0.3,
      pointPlacement: 0,
      yAxis: 1
    }, {
      name: 'Men',
      color: 'rgba(186,60,61,.9)',
      data: [medianSalaryMale[1],
      medianSalaryMale[2],
      medianSalaryMale[3],
      medianSalaryMale[4],
      medianSalaryMale[5],
      medianSalaryMale[6],
      medianSalaryMale[7],
      medianSalaryMale[8],
      medianSalaryMale[9],
      medianSalaryMale[10],
      medianSalaryMale[11],
      medianSalaryMale[12],
      medianSalaryMale[13],
      medianSalaryMale[14],
      medianSalaryMale[15]
      ],
      tooltip: {
        valuePrefix: '$'
      },
      pointPadding: 0.4,
      pointPlacement: 0,
      yAxis: 1
    }]
  });

  Highcharts.chart('generalField', {
    chart: {
        type: 'packedbubble',
        height: '70%'
    },
    title: {
        text: "Percentage Difference of Women's Earning Comparing to Male's, by General Field"
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}%'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 50,
            zMax: 150,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 105
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: '>90%',
        data: [{
            name: generalField[0],
            value: salaryPer[0]
        }, {
            name: generalField[1],
            value: salaryPer[1]
        },
        {
            name: generalField[2],
            value: salaryPer[2]
        },
        {
            name: generalField[3],
            value: salaryPer[3]
        },
        {
            name: generalField[4],
            value: salaryPer[4]
        },
        {
            name: generalField[5],
            value: salaryPer[5]
        },
        {
            name: generalField[6],
            value: salaryPer[6]
        },
        {
            name: generalField[7],
            value: salaryPer[7]
        },
        {
            name:generalField[8],
            value: salaryPer[8]
        },
        {
            name: generalField[9],
            value: salaryPer[9]
        },
        {
            name: generalField[10],
            value: salaryPer[10]
        }]
    }, {
        name: '80% - 90%',
        data: [{
            name: generalField[100],
            value: salaryPer[100]
        },
        {
            name: generalField[110],
            value: salaryPer[110]
        },
        {
            name: generalField[120],
            value: salaryPer[120]
        },
        {
            name: generalField[130],
            value: salaryPer[130]
        },
        {
            name: generalField[150],
            value:salaryPer[150]
        },
        {
            name: generalField[160],
            value: salaryPer[160]
        },
        {
            name: generalField[170],
            value: salaryPer[170]
        },
        {
            name: generalField[180],
            value: salaryPer[180]
        },
        {
            name: generalField[190],
            value: salaryPer[190]
        },
        {
            name: generalField[200],
            value: salaryPer[200]
        }]
    }, {
        name: '70%-80%',
        data: [{
          name: generalField[230],
          value: salaryPer[230]
        },
        {
          name: generalField[240],
          value: salaryPer[240]
        },
        {
          name: generalField[250],
          value: salaryPer[250]
        },
        {
          name: generalField[260],
          value: salaryPer[260]
        },
        {
          name: generalField[270],
          value: salaryPer[270]
        },
        {
          name: generalField[280],
          value: salaryPer[280]
        },
        {
          name: generalField[290],
          value: salaryPer[290]
        },
        {
          name: generalField[300],
          value: salaryPer[300]
        },
        {
          name: generalField[310],
          value: salaryPer[310]
        },
        {
          name: generalField[320],
          value: salaryPer[320]
        }
      ]
    }, {
        name: '60%-70%',
        data: [{
          name: generalField[330],
          value: salaryPer[330]
        },
        {
          name: generalField[333],
          value: salaryPer[333]
        },
        {
          name: generalField[335],
          value: salaryPer[335]
        },
        {
          name: generalField[340],
          value: salaryPer[340]
        }]
    }, {
        name: '<60%',
        data: [{
          name: generalField[343],
          value: salaryPer[343]
        },
        {
          name: generalField[345],
          value: salaryPer[345]
        },
        {
          name: generalField[346],
          value: salaryPer[346]
        }]
    }]
});

  Highcharts.chart('maleDominant', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    title: {
        text: 'Salary Gap in Popular Male Dominant Job Field'
    },

    subtitle: {
        text: 'Male Worker Percentage > 75%'
    },

    xAxis: {
        categories: [
          maleOccupation[18],
          maleOccupation[33],
          maleOccupation[35],
          maleOccupation[44],
          maleOccupation[45],
          maleOccupation[54],
          maleOccupation[61],
          maleOccupation[81],
        ]
    },

    yAxis: {
        title: {
            text: 'Median Salary ($)'
        }
    },

    tooltip: {
        valueSuffix: '$'
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: '{y}$'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Salary',
        data: [
            [maleSalary[18], femaleSalary[18]],
            [maleSalary[33], femaleSalary[33]],
            [maleSalary[35], femaleSalary[35]],
            [maleSalary[44], femaleSalary[44]],
            [maleSalary[45], femaleSalary[45]],
            [maleSalary[54], femaleSalary[54]],
            [maleSalary[61], femaleSalary[61]],
            [maleSalary[81], femaleSalary[81]],
        ]
    }]
});

  Highcharts.chart('femaleDominant', {

  chart: {
      type: 'columnrange',
      inverted: true
  },

  title: {
      text: 'Salary Gap in Popular Female Dominant Job Field'
  },

  subtitle: {
      text: 'Female Worker Percentage > 75%'
  },

  xAxis: {
      categories: [
        femaleOccupation[1],
        femaleOccupation[2],
        femaleOccupation[3],
        femaleOccupation[4],
        femaleOccupation[6],
        femaleOccupation[8],
        femaleOccupation[9],
        femaleOccupation[14],
      ]
  },

  yAxis: {
      title: {
          text: 'Median Salary ($)'
      }
  },

  tooltip: {
      valueSuffix: '$'
  },

  plotOptions: {
      columnrange: {
          dataLabels: {
              enabled: true,
              format: '{y}$'
          }
      }
  },

  legend: {
      enabled: false
  },

  series: [{
      name: 'Salary',
      color: 'rgba(186,60,61,.9)',
      data: [
          [maleSalaryF[1], femaleSalaryF[1]],
          [maleSalaryF[2], femaleSalaryF[2]],
          [maleSalaryF[3], femaleSalaryF[3]],
          [maleSalaryF[4], femaleSalaryF[4]],
          [maleSalaryF[6], femaleSalaryF[6]],
          [maleSalaryF[8], femaleSalaryF[8]],
          [maleSalaryF[9], femaleSalaryF[9]],
          [maleSalaryF[14], femaleSalaryF[14]],
      ]
  }]
});

  Highcharts.chart('topOccupation', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Number of Women and Men in Top Occupation'
  },
  subtitle: {
    text: 'Outstanding Occupation with highest salary'
  },
  xAxis: [{
    categories: [
      topOccupation[0],
      topOccupation[2],
      topOccupation[3],
      topOccupation[4],
      topOccupation[5],
      topOccupation[7],
      topOccupation[9],
      topOccupation[11],
      topOccupation[14],
      topOccupation[18]
    ],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Number of Worker',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }],
  tooltip: {
    shared: true
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    x: 120,
    verticalAlign: 'top',
    y: 100,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)'
  },
  series: [{
    name: 'Male',
    type: 'column',
    data: [
      maleNum[0],
      maleNum[2],
      maleNum[3],
      maleNum[4],
      maleNum[5],
      maleNum[7],
      maleNum[9],
      maleNum[11],
      maleNum[14],
      maleNum[18]
    ],


  }, {
    name: 'Female',
    type: 'spline',
    data: [
      femaleNum[0],
      femaleNum[2],
      femaleNum[3],
      femaleNum[4],
      femaleNum[5],
      femaleNum[7],
      femaleNum[9],
      femaleNum[11],
      femaleNum[14],
      femaleNum[18]
    ],

  }]

});

  $('#myTable').DataTable( {
ajax: {
    url: 'genderpaygap.json',
    dataSrc: ''
},
columns: [
    { data: 'Occupational' },
    { data: 'NumberofWorker_FullYear' },
    { data: 'NumberofWorker_FullYear_Male' },
    { data: 'NumberofWorker_FullYear_Female' },
    { data: 'PercentageofFemale_Occupation' },
    { data: 'MedianSalary_Male' },
    { data: 'MedianSalary_Female' }
]
} );
}
