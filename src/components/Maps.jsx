import GoogleMapReact from 'google-map-react';
import Location from './Location';
import LocationInfo from './LocationInfo';
import { useState } from 'react';
const Maps = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocation] = useState(null);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {eventData?.map((ev, i) => {
          if (ev.categories[0].id === 8) {
            return (
              <Location
                key={i}
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => {
                  setLocation({
                    id: ev.id,
                    title: ev.title,
                    date: ev.geometries[0].date,
                  });
                }}
              ></Location>
            );
          }
          return null;
        })}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo}></LocationInfo>}
    </div>
  );
};
Maps.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Maps;
