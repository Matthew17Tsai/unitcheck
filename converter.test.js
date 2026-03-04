// =============================================================================
//  UNIT CONVERTER — Testing Lab
//  Intro to Code
// =============================================================================
//
//  HOW THIS WORKS
//  ──────────────
//  In Terminal run "npm test" at any time to run all tests.
//
//  GREEN  ✓  = test passed — the function returned what you expected
//  RED    ✗  = test failed — read the error to see what went wrong
//
//  Your job today is to fix the two broken tests (they fail on purpose)
//   
//
//
// =============================================================================

const {
  celsiusToFahrenheit,
  kmToMiles,
  kgToPounds,
  litersToGallons,
} = require("./converter-shared");

// ─────────────────────────────────────────────────────────────────────────────
//  WORKING TESTS  (already passing — read these first, they show you the syntax)
// ─────────────────────────────────────────────────────────────────────────────

test("freezing point: 0°C should equal 32°F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  //Runs the formula for conversion with this specific data
});

test("zero km should return zero miles", () => {
  expect(kmToMiles(0)).toBe(0);
});

// ─────────────────────────────────────────────────────────────────────────────
//  PART A — SOLVE THESE  (both currently FAILING — find the bug and fix it)
//
//  
//  Run the tests, read the error message, then fix the wrong number.
//  When all turn green, the tests are passing.
// ─────────────────────────────────────────────────────────────────────────────

test("boiling point: 100°C should equal 212°F", () => {
  expect(celsiusToFahrenheit(100)).toBe(212); 
});


test("1 Liter should equal 0.26 gallons rounded", () => {
  expect(litersToGallons(1)).toBe(0.26);
});
