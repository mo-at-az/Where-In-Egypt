import React from 'react';
import { MapPin, DollarSign, Ticket } from 'lucide-react';

function DestinationCard({ destination }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-custom card-hover">
        <div className="position-relative" style={{ height: '220px' }}>
          <img
            src={destination.image}
            className="card-img-top w-100 h-100 object-fit-cover"
            alt={destination.name}
          />

          {/* Overlay with Name and Governorate */}
          <div className="card-overlay position-absolute bottom-0 start-0 w-100 p-3 text-white">
            <h5 className="card-title mb-1 fw-bold">{destination.name}</h5>
            <p className="card-text small text-teal d-flex align-items-center gap-1">
              <MapPin size={14} /> {destination.governorate}
            </p>
          </div>
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            {/* Budget and Fee Row */}
            <div className="d-flex justify-content-between align-items-center mb-3 p-2 rounded bg-light-beige">
              <div className="d-flex gap-1" title={`Budget Level: ${destination.budgetLevel}`}>
                {/* Budget Icons */}
                {[...Array(3)].map((_, i) => (
                  <DollarSign
                    key={i}
                    size={14}
                    className={i < destination.budgetLevel ? "text-gold fill-gold" : "text-muted-light"}
                  />
                ))}
              </div>

              {/* Ticket Fee */}
              <div className="d-flex align-items-center gap-1 text-brown fw-bold small">
                <Ticket size={16} className="text-teal" />
                <span>{destination.ticketFee}</span>
              </div>
            </div>

            {/* Detailed Location */}
            <div className="mb-3 d-flex align-items-start gap-2 text-muted small">
              <MapPin size={14} className="mt-1 flex-shrink-0" />
              <span>{destination.location}</span>
            </div>

            {/* Description */}
            <p className="card-text text-brown small mb-4">
              {destination.description}
            </p>
          </div>

          <button className="btn btn-gold w-100 text-white fw-bold text-uppercase small d-flex align-items-center justify-content-center gap-2 mt-auto">
            <span>View Details</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
