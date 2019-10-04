
$( document ).ready(function() {
  createCharts();
});

function createCharts(){
  var cause = c3.generate({
    bindto: '#cause',

    data: {
      x : 'x',
      columns: [
        ['x', 1990, 1995, 2000, 2005, 2010, 2015, 2017],
        ['Injuries', 4.26, 4.54, 4.57, 4.50, 4.72, 4.49, 4.48],
        ['Communicable and other Diseases', 15.39, 15.13, 14.84, 13.91, 12.53, 10.88, 10.59],
        ['Non-communicable Diseases', 26.83, 29.41, 31.14, 33.02, 35.59, 39.45, 41.07]
      ],
      types: {
        'Injuries': 'area-spline',
        'Communicable and other Diseases': 'area-spline',
        'Non-communicable Diseases': 'area-spline'
        // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
    },
    groups: [['Injuries', 'Communicable and other Diseases', 'Non-communicable Diseases']],
    },
});

var age1990 = c3.generate({
    bindto: '#age1990',
    data: {
        // iris data from R
        columns: [
            ['70+ year old', 15.55],
            ['50-69 year old', 10.84],
            ['15-49 year old', 7.00],
            ['5-14 year old', 1.32],
            ['Under-5s', 11.77]
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "1990 Deaths by Age"
    }
});

var age2017 = c3.generate({
    bindto: '#age2017',
    data: {
        // iris data from R
        columns: [
            ['70+ year old', 27.21],
            ['50-69 year old', 15.00],
            ['15-49 year old', 7.61],
            ['5-14 year old', 0.73],
            ['Under-5s', 5.39]
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "2017 Deaths by Age"
    }
});

var risk = c3.generate({
    bindto: '#risk',
    data: {
        columns: [
            ['Number of Death', 10.44, 7.1, 6.53, 4.72, 2.94, 2.84]
        ],
        type: 'bar',

        colors: {
          value: function(d) {
            return '#'+(0xff0000+d.value*5*256*3).toString(16);
          }
        },
      },
    axis: {
        x: {
            type: 'category',
            categories: ["High blood pressure","Smoking","High Blood Sugar","Obesity","Outdoor Air Pollution", "Alcohol use"]
        }
    }
});


var rate = c3.generate({
    bindto: "#rate",
    data: {
        columns: [
            ['Pneumonia & influenza', 202.20, 588.50, 70.30, 37.30, 24.10, 34.00],
            ['Heart Disease', 137.40, 171.60, 292.50, 369.00, 336.00, 268.20],
            ['Tuberculosis', 194.40, 149.80, 45.90, 6.10, 0.00, 0.00],
            ['Stroke', 106.90, 94.00, 90.90, 108.00, 75.10, 58.60],
            ['Cancers', 64.00, 80.80, 120.30, 149.20, 183.90, 200.30],
            ['Accidents', 72.30, 73.20, 73.60, 52.30, 46.70, 36.20],
            ['Diarrheal Disease',142.70, 53.70, 0.00, 400, 0.00, 0.00],
            ['Diabetes',0.00 ,0.00, 26.60, 16.70, 15.40, 24.00],
            ['Road Accident',0.00 ,0.00, 26.20, 21.30, 23.50, 16.10],
            ['Suiside',0.00 ,0.00, 26.20, 10.60, 11.90, 11.30]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: [1900,1920,1940,1960,1980,1998]
        }
    }
});

}
