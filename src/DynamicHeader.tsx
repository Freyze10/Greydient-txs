import React, { useEffect } from 'react';

const DynamicHeader: React.FC = () => {
  useEffect(() => {
    const renderHeader = () => {
      const masthead = document.getElementById('masthead');
      const frame85 = document.getElementById('frame85');
      const testimonials = document.getElementById('testimonials');

      if (!masthead || !frame85 || !testimonials) return;

      if (window.innerWidth <= 1024) {
        // Mobile version
        masthead.innerHTML = `
          <div class="frame1">
            <img class="logo-img" src="wp-content/themes/travlog/img/vector.png" alt="logo">
            <h1 class="travlog">Travlog</h1>
          </div>
          <div class="dropdown-menu">
            <img class="hamburger-button" src="wp-content/themes/travlog/img/burger.png">
            <div class="frame2" style="display:none;">
              <button onclick="mainNavColor(0)"><a href="#home">Home</a></button>
              <button onclick="mainNavColor(1)"><a href="#discover">Discover</a></button>
              <button onclick="mainNavColor(2)"><a href="#special">Special Deals</a></button>
              <button onclick="mainNavColor(3)"><a href="#contact">Contact</a></button>
            </div>
          </div>
          <div class="frame3">
            <button class="login">Log In</button>
            <button class="signup">Sign Up</button>
          </div>
        `;
        // ... similar for `frame85` and `testimonials` ...

        const hamburgerButton = document.querySelector('.hamburger-button') as HTMLElement | null;
        const frame2 = document.querySelector('.frame2') as HTMLElement | null;

        hamburgerButton?.addEventListener('click', () => {
        if (frame2) {
            frame2.style.display = frame2.style.display === 'none' ? 'flex' : 'none';
        }
        });
      } else {
        // Desktop version
        masthead.innerHTML = `
          <div class="frame1">
            <img class="logo-img" src="wp-content/themes/travlog/img/vector.png" alt="logo">
            <h1 class="travlog">Travlog</h1>
          </div>
          <div class="frame2">
            <button onclick="mainNavColor(0)"><a href="#home">Home</a></button>
            <button onclick="mainNavColor(1)"><a href="#discover">Discover</a></button>
            <button onclick="mainNavColor(2)"><a href="#special">Special Deals</a></button>
            <button onclick="mainNavColor(3)"><a href="#contact">Contact</a></button>
          </div>
          <div class="frame3">
            <button class="login">Log In</button>
            <button class="signup">Sign Up</button>
          </div>
        `;
      }
    };

    renderHeader(); // Initial render
    window.addEventListener('resize', renderHeader); // Re-render on resize

    return () => {
      window.removeEventListener('resize', renderHeader); // Cleanup
    };
  }, []);

  return (
    <>
    </>
  );
};

export default DynamicHeader;
