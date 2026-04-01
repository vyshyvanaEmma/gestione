const map = L.map('map').setView([41.8902, 12.4922], 13);

L.tileLayer('https://openstreetmap.org{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);