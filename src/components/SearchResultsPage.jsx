import React, { useState } from 'react';
import './SearchResultsPage.css';
import chefifyLogo from '../assets/chefify-logo.svg';
import noResultsIcon from '../assets/no-results-icon.svg';
import userAvatar from '../assets/user-avatar.svg';

const SearchResultsPage = () => {
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [cookingTypes, setCookingTypes] = useState({
    'Pan-fried': false,
    'Stir-fried': false,
    'Grilled': true,
    'Roasted': true,
    'Sauteed': false,
    'Baked': false,
    'Steamed': false,
    'Stewed': false
  });
  const [rating, setRating] = useState(3);

  const handleCookingTypeChange = (type) => {
    setCookingTypes({
      ...cookingTypes,
      [type]: !cookingTypes[type]
    });
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="search-page">
      {/* Header */}
      <header className="header">
        <div className="logo-search">
          <div className="logo">
            <img src={chefifyLogo} alt="Chefify Logo" />
            <h1>Chefify</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search recipes" defaultValue="cakescascsa" />
            <button type="submit">
              <i className="search-icon">🔍</i>
            </button>
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#">What to cook</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Occasions</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="user-area">
          <button className="recipe-box">
            <i className="recipe-icon">📋</i>
            Your Recipe Box
          </button>
          <img src={userAvatar} alt="User profile" className="user-avatar" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="filters-panel">
          <h2>FILTERS</h2>
          
          {/* Type Filter */}
          <div className="filter-section">
            <div className="filter-header">
              <h3>Type</h3>
              <button className="toggle-btn">▼</button>
            </div>
            <div className="filter-options">
              {Object.keys(cookingTypes).map(type => (
                <div className="filter-option" key={type}>
                  <input 
                    type="checkbox" 
                    id={type} 
                    checked={cookingTypes[type]} 
                    onChange={() => handleCookingTypeChange(type)}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Time Filter */}
          <div className="filter-section">
            <div className="filter-header">
              <h3>Time</h3>
              <button className="toggle-btn">▼</button>
            </div>
            <div className="filter-options">
              <div className="time-slider">
                <div className="time-labels">
                  <span>30 minutes</span>
                  <span>50 minutes</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  value={timeRange[1]} 
                  onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])} 
                  className="slider"
                />
              </div>
            </div>
          </div>
          
          {/* Rating Filter */}
          <div className="filter-section">
            <div className="filter-header">
              <h3>Rating</h3>
              <button className="toggle-btn">▼</button>
            </div>
            <div className="filter-options">
              {[5, 4, 3, 2, 1].map(stars => (
                <div className="rating-option" key={stars}>
                  <input 
                    type="checkbox" 
                    id={`rating-${stars}`} 
                    checked={rating === stars} 
                    onChange={() => handleRatingChange(stars)} 
                  />
                  <label htmlFor={`rating-${stars}`}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < stars ? "star filled" : "star"}>★</span>
                    ))}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <button className="apply-btn">Apply</button>
        </div>
        
        <div className="search-results">
          <div className="no-results">
            <h2>Sorry, no results were found for "cakescascsa"</h2>
            <img src={noResultsIcon} alt="No results found" className="no-results-icon" />
            <p>We have all your Independence Day sweets covered.</p>
            
            <div className="suggestion-tags">
              <a href="#" className="tag sweet-cake">Sweet Cake</a>
              <a href="#" className="tag black-cake">Black Cake</a>
              <a href="#" className="tag pozole-verde">Pozole Verde</a>
              <a href="#" className="tag healthy-food">Healthy food</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Learn More</h3>
          <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Recipes</h3>
          <ul>
            <li><a href="#">What to Cook This Week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src={chefifyLogo} alt="Chefify Logo" />
            <h2>Chefify</h2>
          </div>
          <div className="footer-legal">
            <p>2023 Chefify Company</p>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchResultsPage; 