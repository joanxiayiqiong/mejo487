require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "esri/widgets/Legend"
    ], function smoke (Map, FeatureLayer, MapView, Legend) {
      // Create the map
      var map2 = new Map({
        basemap: "satellite"
      });

      // Create the MapView
      var viewsmoke = new MapView({
        container: "viewDivsmoke",
        map: map2,
        center: [-95.7129, 37.0902],
        zoom: 5
      });

      viewsmoke.ui.add(new Legend({ view: viewsmoke }), "bottom-left");

      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       **************************************************************/

      var templatesmoke = {
        // autocasts as new PopupTemplate()
        title: "Smoke Report",
        content: [
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "Shape_Area",
                label: "Area"
              },
              // {
              //   fieldName: "LATITUDE",
              //   label: "Latitude"
              // },
              // {
              //   fieldName: "LONGITUDE",
              //   label: "Longitude"
              // },
              // {
              //   fieldName: "PER_CONT",
              //   label: "(%) Contained"
              // },
              // {
              //   fieldName: "AREA_",
              //   label: "(ACRES) Area Affected"
              // },
              // {
              //   fieldName: "CAUSE",
              //   label: "Cause"
              // },
              // {
              //   fieldName: "START_DATE",
              //   label: "Start Date"
              // },
              // {
              //   fieldName: "SOURCE",
              //   label: "Source"
              // }
            ]
          }
        ]
      };

      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      var featureLayersmoke = new FeatureLayer({
        url:
          // "https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/Wildfire_Activity/MapServer/2",
          'https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/NDGD_SmokeForecast/MapServer/0',
        popupTemplate: templatesmoke,
        // isEditable: true
      });
      map2.add(featureLayersmoke);

    });
