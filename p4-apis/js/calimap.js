require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "esri/widgets/Legend"
    ], function (Map, FeatureLayer, MapView, Legend) {
      // Create the map
      var map = new Map({
        basemap: "satellite"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-119.4179, 36.7783],
        zoom: 6
      });

      view.ui.add(new Legend({ view: view }), "bottom-left");

      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       * jenny
       **************************************************************/

      var template = {
        // autocasts as new PopupTemplate()
        title: "Fire Report",
        content: [
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "FIRE_NAME",
                label: "Location"
              },
              {
                fieldName: "LATITUDE",
                label: "Latitude"
              },
              {
                fieldName: "LONGITUDE",
                label: "Longitude"
              },
              {
                fieldName: "PER_CONT",
                label: "(%) Contained"
              },
              {
                fieldName: "AREA_",
                label: "(ACRES) Area Affected"
              },
              {
                fieldName: "CAUSE",
                label: "Cause"
              },
              {
                fieldName: "START_DATE",
                label: "Start Date"
              },
              {
                fieldName: "SOURCE",
                label: "Source"
              },
            ]
          }
        ]
      };

      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      var featureLayerinactive = new FeatureLayer({
        url:
          // "https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/Wildfire_Activity/MapServer/2",
          'https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/Wildfire_Activity/MapServer/1'
        // isEditable: true
      });
      var featureLayer = new FeatureLayer({
        url:
          // "https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/Wildfire_Activity/MapServer/2",
          'https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/Wildfire_Activity/MapServer',
        popupTemplate: template,
        // isEditable: true
      });
      map.add(featureLayerinactive);
      map.add(featureLayer);


    });
