import React, { useState, useEffect } from 'react';
import { Search, Filter, Sun, BookOpen, Umbrella } from 'lucide-react';

import DestinationCard from './DestinationCard';
import FilterSidebar from './FilterSidebar';
import { DESTINATIONS_DATA } from './data';
import './Destinations.css'; 

export default function Destinations() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBudget, setActiveBudget] = useState(0); 
  const [activeGovernorate, setActiveGovernorate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(DESTINATIONS_DATA);

  useEffect(() => {
    let result = DESTINATIONS_DATA;

    if (activeCategory !== 'All') {
      result = result.filter(dest => dest.type === activeCategory);
    }

    if (activeBudget > 0) {
      result = result.filter(dest => Number(dest.budgetLevel) === Number(activeBudget));
    }

    if (activeGovernorate && activeGovernorate !== 'All') {
      result = result.filter(dest => 
        dest.governorate.toLowerCase().includes(activeGovernorate.toLowerCase())
      );
    }

    if (searchQuery) {
      result = result.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        dest.governorate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDestinations(result);
  }, [activeCategory, activeBudget, activeGovernorate, searchQuery]);

  return (
    <div className="d-flex flex-column min-vh-100">
     

      <header className="hero-section text-center mb-5">
        <div className="container"> 
          <h1 className="display-4 fw-bold hero-title mb-3">EXPLORE ATTRACTIONS</h1>
          <p className="lead hero-subtitle mb-0">"From ancient wonders to hidden gems"</p>
        </div>
      </header>

      <main className="container flex-grow-1" style={{ marginTop: '-3rem', position: 'relative', zIndex: 20 }}>
        <div className="row g-4">
          
          {/* Main */}
          <div className="col-12 col-md-8 col-lg-9 order-md-1 order-2"> 
            <div className="d-flex align-items-center gap-3 mb-4">
              <div style={{ height: '4px', width: '40px', backgroundColor: 'var(--color-gold)' }}></div>
              <h2 className="h2 mb-0 fw-bold text-brown" style={{ fontFamily: 'var(--font-serif)' }}>Destinations</h2>
              <div className="flex-grow-1" style={{ height: '1px', backgroundColor: 'rgba(212, 160, 86, 0.3)' }}></div>
            </div>

            <div className="row g-4">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map(destination => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <div className="display-1 mb-3">🏜️</div>
                  <h3 className="text-brown fw-bold" style={{ fontFamily: 'var(--font-serif)' }}>No destinations found</h3>
                  <p className="text-muted">Try adjusting your budget or filters.</p>
                  <button 
                    onClick={() => {
                      setActiveBudget(0); 
                      setActiveCategory('All'); 
                      setActiveGovernorate('');
                      setSearchQuery('');
                    }}
                    className="btn btn-link text-teal fw-bold text-decoration-underline"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="col-12 col-md-4 col-lg-3 order-md-2 order-1">
            <FilterSidebar 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeBudget={activeBudget} 
              setActiveBudget={setActiveBudget} 
              activeGovernorate={activeGovernorate} 
              setActiveGovernorate={setActiveGovernorate}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>
      </main>

      
    </div>
  );
}