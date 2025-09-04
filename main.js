// main.js

let map;
let kValue = 5;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.8283, lng: -98.5795 }, // Center of US
        zoom: 4,
        mapTypeId: 'roadmap',
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        gestureHandling: 'auto'
    });

    // Add K selector button
    let kSelector = document.createElement('div');
    kSelector.style.position = 'absolute';
    kSelector.style.top = '20px';
    kSelector.style.left = '20px';
    kSelector.style.background = '#fff';
    kSelector.style.border = '1px solid #888';
    kSelector.style.padding = '8px 12px';
    kSelector.style.borderRadius = '4px';
    kSelector.style.zIndex = 20;
    kSelector.innerHTML = 'K: <input id="k-input" type="number" min="1" max="20" value="5" style="width:40px;"> <button id="k-btn">Set K</button>';
    document.body.appendChild(kSelector);
    document.getElementById('k-btn').onclick = function() {
        const val = parseInt(document.getElementById('k-input').value);
        if (val >= 1 && val <= 20) kValue = val;
    };

    // InfoWindow for city tooltips
    const infoWindow = new google.maps.InfoWindow();

    // Draw city markers and keep references
    const cityMarkers = [];
    citiesData.forEach((city, idx) => {
        const marker = new google.maps.Marker({
            position: { lat: city.lat, lng: city.lon },
            map,
            title: `${city.city}, ${city.state}`,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 7,
                fillColor: '#e11d48',
                fillOpacity: 1,
                strokeColor: '#fff',
                strokeWeight: 2
            }
        });
        marker._defaultIcon = marker.getIcon();
        marker._cityIdx = idx;
        marker.addListener('mouseover', () => {
            infoWindow.setContent(`<b>${city.city}, ${city.state}</b><br>Population: ${city.population.toLocaleString()}<br>Skin Cancer Risk: ${(city.risk*100).toFixed(1)}%`);
            infoWindow.open(map, marker);
        });
        marker.addListener('mouseout', () => {
            infoWindow.close();
        });
        cityMarkers.push(marker);
    });

    // Pinpoint marker for user click
    let userMarker = null;

    // Predict risk on map click and highlight KNN
    map.addListener('click', function(e) {
        const lat = e.latLng.lat();
        const lon = e.latLng.lng();
        const risk = knnPredict(lat, lon, kValue);
        const prediction = document.getElementById('prediction');
        prediction.style.display = 'block';
        prediction.innerHTML = `Predicted Skin Cancer Risk (K=${kValue}): <b>${(risk*100).toFixed(1)}%</b>`;
        prediction.style.left = (window.innerWidth / 2 - 100) + 'px';
        prediction.style.top = '30px';
        setTimeout(() => { prediction.style.display = 'none'; }, 3500);

        // Add or move the user marker
        if (userMarker) {
            userMarker.setPosition({ lat, lng: lon });
        } else {
            userMarker = new google.maps.Marker({
                position: { lat, lng: lon },
                map,
                icon: {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    scale: 6,
                    fillColor: '#2563eb',
                    fillOpacity: 1,
                    strokeColor: '#fff',
                    strokeWeight: 2
                }
            });
        }

        // Highlight K nearest neighbors
        // 1. Calculate distances
        const distances = citiesData.map((city, idx) => ({
            idx,
            dist: Math.sqrt(Math.pow(city.lat - lat, 2) + Math.pow(city.lon - lon, 2))
        }));
        distances.sort((a, b) => a.dist - b.dist);
        const neighborIdxs = distances.slice(0, kValue).map(d => d.idx);
        // 2. Reset all markers to default
        cityMarkers.forEach(marker => marker.setIcon(marker._defaultIcon));
        // 3. Highlight KNN markers
        neighborIdxs.forEach(idx => {
            cityMarkers[idx].setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#fbbf24',
                fillOpacity: 1,
                strokeColor: '#eab308',
                strokeWeight: 3
            });
        });
    });
}
