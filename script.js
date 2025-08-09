const LS_KEY = 'xx_client_orbit_v1';
let customers = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
// rest of your JS code

// Example function:
function persist() {
  localStorage.setItem(LS_KEY, JSON.stringify(customers));
  render();
}

// rest of your JavaScript...

