document.addEventListener("DOMContentLoaded", function () {
    // Initialiser la carte pour le parcours 9km
    let map9km = L.map('map-9km').setView([45.75, 5.0], 13); // Remplace avec les coordonnées souhaitées
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map9km);

    // Charger et afficher le fichier GPX pour le parcours 9km
    new L.GPX("GPX/CN3E-9KM", {async: true}).on('loaded', function(e) {
        map9km.fitBounds(e.target.getBounds());
    }).addTo(map9km);

    // Initialiser la carte pour le parcours 18km
    let map18km = L.map('map-18km').setView([45.75, 5.0], 13); // Remplace avec les coordonnées souhaitées
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map18km);

    // Charger et afficher le fichier GPX pour le parcours 18km
    new L.GPX("GPX/CN3E-18KM", {async: true}).on('loaded', function(e) {
        map18km.fitBounds(e.target.getBounds());
    }).addTo(map18km);
});
