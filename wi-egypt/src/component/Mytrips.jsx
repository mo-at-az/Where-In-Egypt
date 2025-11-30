import React, { useState, useEffect } from 'react';
import TripCard from './Tripcard';
import { DESTINATIONS_DATA } from './data';

export default function MyTrips() {
 
    const localTrips=DESTINATIONS_DATA


  const [places, setPlaces] = useState(localTrips);


  useEffect(() => {
    
    setPlaces(localTrips.places);
  
  }, []);

  return (
    <div className="container my-5">

      

      {localTrips.length > 0 ? (
        localTrips.map(place => <TripCard key={place.id} place={place} />)
      ) : (
        <div className="text-center py-5">
          <h4>No trips found</h4>
        </div>
      )}

      <p
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: "#b30000",
          fontWeight: "bold"
        }}
      >
        Note: All prices listed above are for tourists and may vary slightly depending on the season or ticket type. Each attraction may offer multiple ticket tiers based on the activities or areas included. Prices generally stay consistent, with only minor seasonal variations.
      </p>
    </div>
  );
}
