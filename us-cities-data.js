// us-cities-data.js
// Generated from top3_cities_skin_cancer_dataset.csv
// Each entry: { city, state, lat, lon, population, risk }
const citiesData = [
    // Alabama
    { city: "Birmingham", state: "AL", lat: 33.5186, lon: -86.8104, population: 197575, risk: 0.213 },
    { city: "Huntsville", state: "AL", lat: 34.7304, lon: -86.5861, population: 215006, risk: 0.213 },
    { city: "Mobile", state: "AL", lat: 30.6954, lon: -88.0399, population: 184952, risk: 0.213 },
    // Alaska
    { city: "Anchorage", state: "AK", lat: 61.2181, lon: -149.9003, population: 288121, risk: 0.148 },
    { city: "Fairbanks", state: "AK", lat: 64.8378, lon: -147.7164, population: 32315, risk: 0.148 },
    { city: "Juneau", state: "AK", lat: 58.3019, lon: -134.4197, population: 32155, risk: 0.148 },
    // Arizona
    { city: "Phoenix", state: "AZ", lat: 33.4484, lon: -112.0740, population: 1680992, risk: 0.314 },
    { city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747, population: 542629, risk: 0.314 },
    { city: "Mesa", state: "AZ", lat: 33.4152, lon: -111.8315, population: 512498, risk: 0.314 },
    // Arkansas
    { city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896, population: 202591, risk: 0.224 },
    { city: "Fayetteville", state: "AR", lat: 36.0822, lon: -94.1719, population: 101616, risk: 0.224 },
    { city: "Fort Smith", state: "AR", lat: 35.3859, lon: -94.3985, population: 89142, risk: 0.224 },
    // California
    { city: "Los Angeles", state: "CA", lat: 34.0522, lon: -118.2437, population: 3898747, risk: 0.227 },
    { city: "San Diego", state: "CA", lat: 32.7157, lon: -117.1611, population: 1386932, risk: 0.227 },
    { city: "San Jose", state: "CA", lat: 37.3382, lon: -121.8863, population: 1013240, risk: 0.227 },
    // Colorado
    { city: "Denver", state: "CO", lat: 39.7392, lon: -104.9903, population: 711463, risk: 0.214 },
    { city: "Colorado Springs", state: "CO", lat: 38.8339, lon: -104.8214, population: 486248, risk: 0.214 },
    { city: "Aurora", state: "CO", lat: 39.7294, lon: -104.8319, population: 398482, risk: 0.214 },
    // Connecticut
    { city: "Bridgeport", state: "CT", lat: 41.1792, lon: -73.1894, population: 148333, risk: 0.185 },
    { city: "Stamford", state: "CT", lat: 41.0534, lon: -73.5387, population: 136309, risk: 0.185 },
    { city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279, population: 134023, risk: 0.185 },
    // Delaware
    { city: "Wilmington", state: "DE", lat: 39.7391, lon: -75.5398, population: 70170, risk: 0.267 },
    { city: "Dover", state: "DE", lat: 39.1582, lon: -75.5244, population: 39092, risk: 0.267 },
    { city: "Newark", state: "DE", lat: 39.6837, lon: -75.7497, population: 31454, risk: 0.267 },
    // Florida
    { city: "Jacksonville", state: "FL", lat: 30.3322, lon: -81.6557, population: 949611, risk: 0.26 },
    { city: "Miami", state: "FL", lat: 25.7617, lon: -80.1918, population: 449514, risk: 0.26 },
    { city: "Tampa", state: "FL", lat: 27.9506, lon: -82.4572, population: 398173, risk: 0.26 },
    // Georgia
    { city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880, population: 496461, risk: 0.25 },
    { city: "Columbus", state: "GA", lat: 32.4609, lon: -84.9877, population: 206922, risk: 0.25 },
    { city: "Augusta", state: "GA", lat: 33.4735, lon: -82.0105, population: 201554, risk: 0.25 },
    // Hawaii
    { city: "Honolulu", state: "HI", lat: 21.3069, lon: -157.8583, population: 345510, risk: 0.238 },
    { city: "East Honolulu", state: "HI", lat: 21.2894, lon: -157.7156, population: 49710, risk: 0.238 },
    { city: "Hilo", state: "HI", lat: 19.7297, lon: -155.0900, population: 44851, risk: 0.238 },
    // Idaho
    { city: "Boise", state: "ID", lat: 43.6150, lon: -116.2023, population: 237446, risk: 0.309 },
    { city: "Meridian", state: "ID", lat: 43.6121, lon: -116.3915, population: 129736, risk: 0.309 },
    { city: "Nampa", state: "ID", lat: 43.5407, lon: -116.5635, population: 106186, risk: 0.309 },
    // Illinois
    { city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298, population: 2693976, risk: 0.23 },
    { city: "Aurora", state: "IL", lat: 41.7606, lon: -88.3201, population: 180542, risk: 0.23 },
    { city: "Naperville", state: "IL", lat: 41.7508, lon: -88.1535, population: 149540, risk: 0.23 },
    // Indiana
    { city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581, population: 882039, risk: null },
    { city: "Fort Wayne", state: "IN", lat: 41.0793, lon: -85.1394, population: 267927, risk: null },
    { city: "Evansville", state: "IN", lat: 37.9716, lon: -87.5711, population: 116486, risk: null },
    // Iowa
    { city: "Des Moines", state: "IA", lat: 41.5868, lon: -93.6250, population: 214133, risk: 0.314 },
    { city: "Cedar Rapids", state: "IA", lat: 41.9779, lon: -91.6656, population: 137710, risk: 0.314 },
    { city: "Davenport", state: "IA", lat: 41.5236, lon: -90.5776, population: 101724, risk: 0.314 },
    // Kansas
    { city: "Wichita", state: "KS", lat: 37.6872, lon: -97.3301, population: 395699, risk: 0.276 },
    { city: "Overland Park", state: "KS", lat: 38.9822, lon: -94.6708, population: 197726, risk: 0.276 },
    { city: "Kansas City", state: "KS", lat: 39.1142, lon: -94.6275, population: 156607, risk: 0.276 },
    // Kentucky
    { city: "Louisville", state: "KY", lat: 38.2527, lon: -85.7585, population: 617638, risk: 0.282 },
    { city: "Lexington", state: "KY", lat: 38.0406, lon: -84.5037, population: 322570, risk: 0.282 },
    { city: "Bowling Green", state: "KY", lat: 36.9685, lon: -86.4808, population: 76034, risk: 0.282 },
    // Louisiana
    { city: "New Orleans", state: "LA", lat: 29.9511, lon: -90.0715, population: 369749, risk: 0.182 },
    { city: "Baton Rouge", state: "LA", lat: 30.4515, lon: -91.1871, population: 222191, risk: 0.182 },
    { city: "Shreveport", state: "LA", lat: 32.5252, lon: -93.7502, population: 184021, risk: 0.182 },
    // Maine
    { city: "Portland", state: "ME", lat: 43.6591, lon: -70.2568, population: 68408, risk: 0.269 },
    { city: "Lewiston", state: "ME", lat: 44.1004, lon: -70.2148, population: 36692, risk: 0.269 },
    { city: "Bangor", state: "ME", lat: 44.8012, lon: -68.7778, population: 31353, risk: 0.269 },
    // Maryland
    { city: "Baltimore", state: "MD", lat: 39.2904, lon: -76.6122, population: 569931, risk: 0.245 },
    { city: "Frederick", state: "MD", lat: 39.4143, lon: -77.4105, population: 79788, risk: 0.245 },
    { city: "Gaithersburg", state: "MD", lat: 39.1434, lon: -77.2014, population: 69526, risk: 0.245 },
    // Massachusetts
    { city: "Boston", state: "MA", lat: 42.3601, lon: -71.0589, population: 675647, risk: 0.177 },
    { city: "Worcester", state: "MA", lat: 42.2626, lon: -71.8023, population: 205319, risk: 0.177 },
    { city: "Springfield", state: "MA", lat: 42.1015, lon: -72.5898, population: 154789, risk: 0.177 },
    // Michigan
    { city: "Detroit", state: "MI", lat: 42.3314, lon: -83.0458, population: 620376, risk: 0.204 },
    { city: "Grand Rapids", state: "MI", lat: 42.9634, lon: -85.6681, population: 198893, risk: 0.204 },
    { city: "Warren", state: "MI", lat: 42.5145, lon: -83.0147, population: 138130, risk: 0.204 },
    // Minnesota
    { city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650, population: 425336, risk: 0.373 },
    { city: "Saint Paul", state: "MN", lat: 44.9537, lon: -93.0900, population: 307193, risk: 0.373 },
    { city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802, population: 121395, risk: 0.373 },
    // Mississippi
    { city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848, population: 149761, risk: 0.193 },
    { city: "Gulfport", state: "MS", lat: 30.3674, lon: -89.0928, population: 71576, risk: 0.193 },
    { city: "Southaven", state: "MS", lat: 34.9880, lon: -90.0126, population: 55886, risk: 0.193 },
    // Missouri
    { city: "Kansas City", state: "MO", lat: 39.0997, lon: -94.5786, population: 508394, risk: 0.193 },
    { city: "Saint Louis", state: "MO", lat: 38.6270, lon: -90.1994, population: 293310, risk: 0.193 },
    { city: "Springfield", state: "MO", lat: 37.2089, lon: -93.2923, population: 169176, risk: 0.193 },
    // Montana
    { city: "Billings", state: "MT", lat: 45.7833, lon: -108.5007, population: 117445, risk: 0.279 },
    { city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940, population: 75638, risk: 0.279 },
    { city: "Great Falls", state: "MT", lat: 47.4942, lon: -111.2833, population: 59479, risk: 0.279 },
    // Nebraska
    { city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345, population: 486051, risk: 0.287 },
    { city: "Lincoln", state: "NE", lat: 40.8136, lon: -96.7026, population: 292657, risk: 0.287 },
    { city: "Bellevue", state: "NE", lat: 41.1544, lon: -95.9146, population: 64676, risk: 0.287 },
    // Nevada
    { city: "Las Vegas", state: "NV", lat: 36.1699, lon: -115.1398, population: 646790, risk: 0.227 },
    { city: "Henderson", state: "NV", lat: 36.0395, lon: -114.9817, population: 336534, risk: 0.227 },
    { city: "North Las Vegas", state: "NV", lat: 36.1989, lon: -115.1175, population: 280543, risk: 0.227 },
    // New Hampshire
    { city: "Manchester", state: "NH", lat: 42.9956, lon: -71.4548, population: 115462, risk: 0.299 },
    { city: "Nashua", state: "NH", lat: 42.7654, lon: -71.4676, population: 91222, risk: 0.299 },
    { city: "Concord", state: "NH", lat: 43.2081, lon: -71.5376, population: 43976, risk: 0.299 },
    // New Jersey
    { city: "Newark", state: "NJ", lat: 40.7357, lon: -74.1724, population: 307220, risk: 0.207 },
    { city: "Jersey City", state: "NJ", lat: 40.7178, lon: -74.0431, population: 292449, risk: 0.207 },
    { city: "Paterson", state: "NJ", lat: 40.9168, lon: -74.1718, population: 157794, risk: 0.207 },
    // New Mexico
    { city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504, population: 562599, risk: 0.171 },
    { city: "Las Cruces", state: "NM", lat: 32.3199, lon: -106.7637, population: 111385, risk: 0.171 },
    { city: "Rio Rancho", state: "NM", lat: 35.2328, lon: -106.6634, population: 104046, risk: 0.171 },
    // New York
    { city: "New York", state: "NY", lat: 40.7128, lon: -74.0060, population: 8804190, risk: 0.174 },
    { city: "Buffalo", state: "NY", lat: 42.8864, lon: -78.8784, population: 276486, risk: 0.174 },
    { city: "Yonkers", state: "NY", lat: 40.9312, lon: -73.8988, population: 211569, risk: 0.174 },
    // North Carolina
    { city: "Charlotte", state: "NC", lat: 35.2271, lon: -80.8431, population: 897720, risk: 0.269 },
    { city: "Raleigh", state: "NC", lat: 35.7796, lon: -78.6382, population: 476587, risk: 0.269 },
    { city: "Greensboro", state: "NC", lat: 36.0726, lon: -79.7920, population: 301115, risk: 0.269 },
    // North Dakota
    { city: "Fargo", state: "ND", lat: 46.8772, lon: -96.7898, population: 132787, risk: 0.263 },
    { city: "Bismarck", state: "ND", lat: 46.8083, lon: -100.7837, population: 74945, risk: 0.263 },
    { city: "Grand Forks", state: "ND", lat: 47.9253, lon: -97.0329, population: 59097, risk: 0.263 },
    // Ohio
    { city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988, population: 907971, risk: 0.258 },
    { city: "Cleveland", state: "OH", lat: 41.4993, lon: -81.6944, population: 361607, risk: 0.258 },
    { city: "Cincinnati", state: "OH", lat: 39.1031, lon: -84.5120, population: 308935, risk: 0.258 },
    // Oklahoma
    { city: "Oklahoma City", state: "OK", lat: 35.4634, lon: -97.5151, population: 687725, risk: 0.21 },
    { city: "Tulsa", state: "OK", lat: 36.1539, lon: -95.9928, population: 411401, risk: 0.21 },
    { city: "Norman", state: "OK", lat: 35.2226, lon: -97.4395, population: 128026, risk: 0.21 },
    // Oregon
    { city: "Portland", state: "OR", lat: 45.5051, lon: -122.6750, population: 635067, risk: 0.235 },
    { city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868, population: 179887, risk: 0.235 },
    { city: "Salem", state: "OR", lat: 44.9429, lon: -123.0351, population: 177723, risk: 0.235 },
    // Pennsylvania
    { city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652, population: 1567442, risk: 0.202 },
    { city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959, population: 302971, risk: 0.202 },
    { city: "Allentown", state: "PA", lat: 40.6084, lon: -75.4902, population: 125845, risk: 0.202 },
    // Rhode Island
    { city: "Providence", state: "RI", lat: 41.8240, lon: -71.4128, population: 189563, risk: 0.198 },
    { city: "Warwick", state: "RI", lat: 41.7001, lon: -71.4162, population: 82723, risk: 0.198 },
    { city: "Cranston", state: "RI", lat: 41.7798, lon: -71.4373, population: 82434, risk: 0.198 },
    // South Carolina
    { city: "Charleston", state: "SC", lat: 32.7765, lon: -79.9311, population: 153672, risk: 0.227 },
    { city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348, population: 137541, risk: 0.227 },
    { city: "North Charleston", state: "SC", lat: 32.8546, lon: -79.9748, population: 117472, risk: 0.227 },
    // South Dakota
    { city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311, population: 202078, risk: 0.288 },
    { city: "Rapid City", state: "SD", lat: 44.0805, lon: -103.2310, population: 77403, risk: 0.288 },
    { city: "Aberdeen", state: "SD", lat: 45.4647, lon: -98.4865, population: 28424, risk: 0.288 },
    // Tennessee
    { city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816, population: 715913, risk: 0.204 },
    { city: "Memphis", state: "TN", lat: 35.1495, lon: -90.0490, population: 628127, risk: 0.204 },
    { city: "Knoxville", state: "TN", lat: 35.9606, lon: -83.9207, population: 192648, risk: 0.204 },
    // Texas
    { city: "Houston", state: "TX", lat: 29.7604, lon: -95.3698, population: 2296224, risk: 0.149 },
    { city: "San Antonio", state: "TX", lat: 29.4241, lon: -98.4936, population: 1469845, risk: 0.149 },
    { city: "Dallas", state: "TX", lat: 32.7767, lon: -96.7970, population: 1304379, risk: 0.149 },
    // Utah
    { city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910, population: 199153, risk: 0.414 },
    { city: "West Valley City", state: "UT", lat: 40.6916, lon: -112.0010, population: 140230, risk: 0.414 },
    { city: "West Jordan", state: "UT", lat: 40.6097, lon: -111.9391, population: 116961, risk: 0.414 },
    // Vermont
    { city: "Burlington", state: "VT", lat: 44.4759, lon: -73.2121, population: 44495, risk: 0.351 },
    { city: "South Burlington", state: "VT", lat: 44.4660, lon: -73.1709, population: 20580, risk: 0.351 },
    { city: "Rutland", state: "VT", lat: 43.6106, lon: -72.9726, population: 15571, risk: 0.351 },
    // Virginia
    { city: "Virginia Beach", state: "VA", lat: 36.8529, lon: -75.9780, population: 457672, risk: 0.211 },
    { city: "Chesapeake", state: "VA", lat: 36.7682, lon: -76.2875, population: 252041, risk: 0.211 },
    { city: "Norfolk", state: "VA", lat: 36.8508, lon: -76.2859, population: 235089, risk: 0.211 },
    // Washington
    { city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321, population: 749256, risk: 0.256 },
    { city: "Spokane", state: "WA", lat: 47.6588, lon: -117.4260, population: 229513, risk: 0.256 },
    { city: "Tacoma", state: "WA", lat: 47.2529, lon: -122.4443, population: 219205, risk: 0.256 },
    // West Virginia
    { city: "Charleston", state: "WV", lat: 38.3498, lon: -81.6326, population: 48115, risk: 0.234 },
    { city: "Huntington", state: "WV", lat: 38.4192, lon: -82.4452, population: 45404, risk: 0.234 },
    { city: "Morgantown", state: "WV", lat: 39.6295, lon: -79.9559, population: 30479, risk: 0.234 },
    // Wisconsin
    { city: "Milwaukee", state: "WI", lat: 43.0389, lon: -87.9065, population: 563305, risk: 0.243 },
    { city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012, population: 273157, risk: 0.243 },
    { city: "Green Bay", state: "WI", lat: 44.5133, lon: -88.0133, population: 104364, risk: 0.243 },
    // Wyoming
    { city: "Cheyenne", state: "WY", lat: 41.1400, lon: -104.8202, population: 65232, risk: 0.252 },
    { city: "Casper", state: "WY", lat: 42.8501, lon: -106.3252, population: 58497, risk: 0.252 },
    { city: "Gillette", state: "WY", lat: 44.2911, lon: -105.5022, population: 34087, risk: 0.252 }
];
