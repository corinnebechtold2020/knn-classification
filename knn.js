// knn.js
// Simple KNN regression for 2D points
function knnPredict(lat, lon, k = 5) {
    // Use Euclidean distance on (lat, lon)
    const distances = citiesData.map(city => ({
        ...city,
        dist: Math.sqrt(Math.pow(city.lat - lat, 2) + Math.pow(city.lon - lon, 2))
    }));
    distances.sort((a, b) => a.dist - b.dist);
    const neighbors = distances.slice(0, k);
    const weightedSum = neighbors.reduce((sum, n) => sum + n.risk / (n.dist + 1e-6), 0);
    const weightTotal = neighbors.reduce((sum, n) => sum + 1 / (n.dist + 1e-6), 0);
    return weightedSum / weightTotal;
}
