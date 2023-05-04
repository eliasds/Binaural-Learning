// Parse the hash parameters from the URL
const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
  if (item) {
    const parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

// Store the access token in localStorage
localStorage.setItem('access_token', hash.access_token);

// Redirect back to the main page
window.location.replace('/');
