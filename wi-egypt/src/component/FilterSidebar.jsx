import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, Sun, BookOpen, Umbrella, MapPin } from 'lucide-react';
import FilterChip from './FilterChip'; 
import { DESTINATIONS_DATA } from './data';

const FilterSidebar = ({ 
  activeCategory, setActiveCategory,
  activeBudget, setActiveBudget, 
  activeGovernorate, setActiveGovernorate, 
  searchQuery, setSearchQuery 
}) => {

  const uniqueGovernorates = [...new Set(DESTINATIONS_DATA.map(item => item.governorate))].sort();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = uniqueGovernorates.filter(gov => 
    gov.toLowerCase().includes(activeGovernorate.toLowerCase())
  );

  const getBudgetLabel = (val) => {
    switch (parseInt(val)) {
        case 0: return "Any Budget";
        case 1: return "Low ($)";
        case 2: return "Medium ($$)";
        case 3: return "High ($$$)";
        default: return "Any Budget";
    }
  }

  return (
    <div className="card filter-container shadow-sm p-4 sticky-sidebar">
      
      {/* Global Search Input */}
      <div className="mb-4">
        <h6 className="text-uppercase text-muted fw-bold small mb-2" style={{ letterSpacing: '2px' }}>Search Attractions</h6>
        <div className="position-relative">
          <input 
            type="text" 
            className="form-control rounded-pill py-2 ps-5 search-input"
            placeholder="Search places..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={18} className="position-absolute top-50 translate-middle-y text-gold" style={{ left: '15px' }} />
        </div>
      </div>

      <div style={{ borderTop: '1px solid #eee', margin: '1rem 0' }}></div>

      {/* Filter Header */}
      <div className="d-flex align-items-center gap-2 text-brown mb-3">
        <Filter size={24} className="text-teal" />
        <span className="h5 mb-0" style={{ fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>Filter Options</span>
      </div>

{/* 
      <div className="mb-4">
        <h6 className="text-uppercase text-muted fw-bold small mb-2" style={{ letterSpacing: '2px' }}>Interests</h6>
        <div className="d-flex flex-wrap gap-2">
          <FilterChip label="All" active={activeCategory === 'All'} onClick={() => setActiveCategory('All')} />
          <FilterChip label="Historical" icon={BookOpen} active={activeCategory === 'Historical'} onClick={() => setActiveCategory('Historical')} />
          <FilterChip label="Coastal" icon={Umbrella} active={activeCategory === 'Coastal'} onClick={() => setActiveCategory('Coastal')} />
          <FilterChip label="Nature" icon={Sun} active={activeCategory === 'Nature'} onClick={() => setActiveCategory('Nature')} />
        </div>
      </div>
*/}
      {/* Governorate Filter - Custom Styled Dropdown */}
      <div className="mb-4" ref={dropdownRef}>
        <h6 className="text-uppercase text-muted fw-bold small mb-2" style={{ letterSpacing: '2px' }}>Governorate</h6>
        <div className="position-relative">
          <input 
            type="text" 
            className="form-control rounded-pill py-2 ps-4 border-gold"
            placeholder="Type or select..." 
            value={activeGovernorate === 'All' ? '' : activeGovernorate}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => {
              setActiveGovernorate(e.target.value);
              setShowDropdown(true);
            }}
            style={{ 
              backgroundColor: 'rgba(250, 243, 224, 0.3)', 
              border: '1px solid #D4A056', 
              color: '#5D4037' 
            }}
          />
          
          {showDropdown && (
             <ul className="custom-dropdown-list">
               {filteredOptions.length > 0 ? (
                 filteredOptions.map((gov) => (
                   <li 
                     key={gov} 
                     className="custom-dropdown-item"
                     onClick={() => {
                       setActiveGovernorate(gov);
                       setShowDropdown(false);
                     }}
                   >
                     {gov}
                   </li>
                 ))
               ) : (
                 <li className="custom-dropdown-item text-muted" style={{cursor: 'default'}}>No matches found</li>
               )}
             </ul>
          )}

          <MapPin size={16} className="position-absolute top-50 translate-middle-y text-gold" style={{ right: '15px' }} />
        </div>
      </div>

      {/* Budget Filter - Slider */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="text-uppercase text-muted fw-bold small mb-0" style={{ letterSpacing: '2px' }}>Budget</h6>
          <span className="badge badge-custom text-brown" style={{fontSize: '0.75rem', minWidth: '80px', textAlign: 'center'}}>
            {getBudgetLabel(activeBudget)}
          </span>
        </div>
        
        <div className="px-2">
          <input 
            type="range" 
            className="form-range" 
            min="0" 
            max="3" 
            step="1"
            value={activeBudget}
            onChange={(e) => setActiveBudget(parseInt(e.target.value))}
            style={{ accentColor: '#4A9D9C' }} 
          />
          <div className="d-flex justify-content-between text-muted small fw-bold" style={{ fontSize: '0.7rem' }}>
            <span>Any</span>
            <span>$</span>
            <span>$$</span>
            <span>$$$</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FilterSidebar;