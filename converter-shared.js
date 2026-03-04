// converter-shared.js
// ─────────────────────────────────────────────────────────────────────────────
// This is the ONLY PLACE THE MATH LIVES.
// Both the web app (index.html) and the tests (converter.test.js) use this file.
// If you change a formula here, the tests will reflect it.
// ─────────────────────────────────────────────────────────────────────────────

function celsiusToFahrenheit(c) {
  // Formula: (c × 9/5) + 32
  return Math.round((c * 9/5 + 32) * 100) / 100;
}

function kmToMiles(km) {
  // Formula: km × 0.621371
  return Math.round(km * 0.621371 * 100) / 100;
}

function kgToPounds(kg) {
  // Formula: kg × 2.20462
  return Math.round(kg * 2.20462 * 100) / 100;
}

function litersToGallons(liters) {
  // Formula: liters × 0.264172
  return Math.round(liters * 0.264172 * 100) / 100;
}

// Makes the functions available in Node (for Jest tests).
// The browser ignores this line.
if (typeof module !== 'undefined') {
  module.exports = { celsiusToFahrenheit, kmToMiles, kgToPounds, litersToGallons };
}
