// Initialize map
function initMap() {
  const location = { lat: 51.5074, lng: -0.1278 }; // Example: London
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map });
}

// Load Google Maps script dynamically
window.addEventListener("load", () => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
});
