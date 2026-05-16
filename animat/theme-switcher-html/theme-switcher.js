// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
          // ----- GET ELEMENTS -----
      const bodyElement = document.body;
      const toggleButton = document.getElementById('themeSwitcherBtn');
      const labelSpan = document.getElementById('dynamicLabel');
      const statusDiv = document.getElementById('themeStatus');

      // ----- STATE MANAGEMENT (based on CSS classes) -----
      // We use two CSS classes: 'theme-white' and 'theme-black'
      // The script only adds/removes these classes. All visual styles come from CSS.
      
      // Helper: determine current active theme from body classes
      function isWhiteThemeActive() {
        return bodyElement.classList.contains('theme-white');
      }

      // Core function: switch from white to black (or black to white)
      // It toggles classes and updates UI text labels to reflect the new state.
      function switchTheme() {
        // Check current theme before toggle
        const currentlyWhite = isWhiteThemeActive();
        
        if (currentlyWhite) {
          // Remove white class, add black class
          bodyElement.classList.remove('theme-white');
          bodyElement.classList.add('theme-black');
          // Update button label & status message for black theme
          if (labelSpan) labelSpan.textContent = 'Switch to White';
          if (statusDiv) statusDiv.innerHTML = '🌙 Dark mode active (black background)';
        } else {
          // Currently black -> switch to white
          bodyElement.classList.remove('theme-black');
          bodyElement.classList.add('theme-white');
          // Update button label & status message for white theme
          if (labelSpan) labelSpan.textContent = 'Switch to Black';
          if (statusDiv) statusDiv.innerHTML = '☀️ Light mode active (white background)';
        }
      }

      // Attach click listener to button
      if (toggleButton) {
        toggleButton.addEventListener('click', switchTheme);
      } else {
        console.warn('Button with id "themeSwitcherBtn" not found');
      }

      // Optional: ensure initial consistency (though body already has 'theme-white' class from HTML)
      // But we verify status text matches initial white class.
      function syncInitialUI() {
        const isWhite = isWhiteThemeActive();
        if (isWhite) {
          // already white, ensure label and status are correct
          if (labelSpan && labelSpan.textContent !== 'Switch to Black') {
            labelSpan.textContent = 'Switch to Black';
          }
          if (statusDiv && statusDiv.innerHTML !== '☀️ Light mode active (white background)') {
            statusDiv.innerHTML = '☀️ Light mode active (white background)';
          }
        } else {
          // edge: if somehow black class is present without white, set label accordingly
          if (bodyElement.classList.contains('theme-black')) {
            if (labelSpan) labelSpan.textContent = 'Switch to White';
            if (statusDiv) statusDiv.innerHTML = '🌙 Dark mode active (black background)';
          } else {
            // fallback: force white theme if no class or invalid state
            bodyElement.classList.add('theme-white');
            bodyElement.classList.remove('theme-black');
            if (labelSpan) labelSpan.textContent = 'Switch to Black';
            if (statusDiv) statusDiv.innerHTML = '☀️ Light mode active (white background)';
          }
        }
      }
      
      // run once to guarantee correct button text and status (defensive)
      syncInitialUI();

      // small additional: the toggle button text never drifts, 
      // and we only switch classes. All backgrounds, text colors, borders,
      // and card appearance change exclusively through CSS rules.
      console.log('✅ Theme toggler ready — CSS handles white & black, JS just switches classes');
});