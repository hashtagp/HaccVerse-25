import React, { useState, useEffect, useRef } from 'react';
import './TeamsByDomain.css';

const TeamsByDomain = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check if mobile on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('.teams-section');
    if (section) {
      observer.observe(section);
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (section) {
        observer.unobserve(section);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
    if (isMobile) {
      setIsDropdownOpen(false); // Close dropdown after selection on mobile
    }
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const domains = [
    {
      name: "AI & ML",
      teams: [
        "TechtonicAI",
        "PYK CODERS",
        "CODEX",
        "BruteForz",
        "Cryptic Nomand",
        "Syntax squad",
        "EDUSIGN",
        "VetVector",
        "Neural_Nexus",
        "O(Prevail)",
        "POSTMAN_CREW",
        "Neural Nexus"
      ],
      waitlistedTeams: ["An0n", "hackstreet", "Hack Warriors", "hackrify", "TECH4CE", "HerSafe Tech"]
    },
    {
      name: "Web3 & Blockchain",
      teams: [
        "Decoders",
        "AKATSUKI",
        "BlockFit Innovators",
        "Ctrl Freaks",
        "Block Crafters",
        "Merge Conflict",
        "Web3Paglu"
      ],
      waitlistedTeams: ["S3K", "CyberVanguard", "Prompters"]
    },
    {
      name: "Cybersecurity",
      teams: [
        "CRYPTIKA",
        "The Dumb Ones",
        "Stacks & Queues",
        "CODE AT WILL",
        "ETHIX",
        "The Exploit Squad"
      ],
      waitlistedTeams: ["Secure Squad", "RedHat Squad", "TRUST", "bi0s"]
    },
    {
      name: "Internet of Things",
      teams: [
        "skynet",
        "Dhanvantri",
        "Cloud Ninja",
        "THE CODEBLOODED",
        "Plan B"
      ],
      waitlistedTeams: [
        "ByteBeacons"
      ]
    },
    {
      name: "Open Innovation",
      teams: [
        "the curry codex",
        "ALPHAFEMMES",
        "c6 odessesy",
        "AI Aces",
        "Hacktivate",
        "Perry the Platypus",
        "cypher",
        "Insert Cool Name",
        "heretic",
        "Chaotic Bots"
      ],
      waitlistedTeams: ["Impact4", "Team Existence", "M2L", "CodeWin"]
    }
  ];

  return (
    <section className={`teams-section ${isVisible ? 'visible' : ''}`} id="teams">
      <div className="container">
        <h1 className="teams-heading">Round 1 results</h1>
        
        {/* Use separate components for mobile and desktop to avoid event conflicts */}
        {isMobile ? (
          <div 
            ref={dropdownRef}
            className={`domain-tabs ${isDropdownOpen ? 'open' : ''}`}
          >
            {/* The active tab that acts as dropdown trigger */}
            <button 
              className="tab-active dropdown-trigger"
              onClick={toggleDropdown}
            >
              {domains[activeTab].name}
            </button>
            
            {/* Other tabs that only show when dropdown is open */}
            {isDropdownOpen && domains.map((domain, index) => (
              activeTab !== index && (
                <button 
                  key={index}
                  onClick={() => handleTabClick(index)}
                >
                  {domain.name}
                </button>
              )
            ))}
          </div>
        ) : (
          <div className="domain-tabs">
            {domains.map((domain, index) => (
              <button 
                key={index}
                className={activeTab === index ? 'tab-active' : ''} 
                onClick={() => handleTabClick(index)}
              >
                {domain.name}
              </button>
            ))}
          </div>
        )}
        
        <div className="domain-content">
          <h2 className="domain-title">{domains[activeTab].name}</h2>
          
          {/* Selected Teams Section */}
          <div className="teams-section-header">
            <h3 className="teams-status-heading">Selected Teams</h3>
          </div>
          <div className="teams-grid">
            {domains[activeTab].teams.map((team, idx) => (
              <div className="team-card" key={idx}>
                <div className="team-card-inner">
                  <h3>{team}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Waitlisted Teams Section */}
          {domains[activeTab].waitlistedTeams && domains[activeTab].waitlistedTeams.length > 0 && (
            <>
              <div className="teams-section-header waitlist">
                <h3 className="teams-status-heading">Waitlisted Teams</h3>
              </div>
              <div className="teams-grid waitlist-grid">
                {domains[activeTab].waitlistedTeams.map((team, idx) => (
                  <div className="team-card waitlisted" key={idx}>
                    <div className="team-card-inner">
                      <h3>{team}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamsByDomain;