const mapHTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"></script>
    <script src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"></script>
    <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
    <style>
      html, body, #map {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      const platform = new H.service.Platform({
        apikey: '${'h'}'
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(
        document.getElementById('map'),
        defaultLayers.vector.normal.map,
        {
          center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
          zoom: 10,
          pixelRatio: window.devicePixelRatio || 1
        }
      );

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      // Add a marker
      const marker = new H.map.Marker({ lat: 37.7749, lng: -122.4194 });
      map.addObject(marker);
    </script>
  </body>
</html>
`;

export default mapHTML;
