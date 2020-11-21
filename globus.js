export {
    getDistance,
    radiansFromDegree,
};
import {radiusEarthM} from "./settings/defaultSettings.js"


const radiansFromDegree = degree => {
    return degree * Math.PI / 180;
};

/**
 * 
 * @param {number} latitudeA latitude a degrees
 * @param {number} longitudeA longitude a degrees
 * @param {number} latitudeB latitude b degrees
 * @param {number} longitudeB longitude b degrees
 * @returns {number} distance m
 */
const getDistance = function (latitudeA, longitudeA, latitudeB, longitudeB) {
    // Haversine
    const [latitudeARad, longitudeARad, latitudeBRad, longitudeBRad] = [latitudeA, longitudeA, latitudeB, longitudeB].map(radiansFromDegree);
    const a = 
        Math.sin((latitudeARad - latitudeBRad) / 2) ** 2 +
        Math.sin((longitudeARad - longitudeBRad) / 2) ** 2 * Math.cos(latitudeARad) * Math.cos(latitudeBRad);
    const c = 2 * Math.atan2(a ** 0.5, (1 - a) ** 0.5);
    const distance = radiusEarthM * c // m
    return distance; 
};