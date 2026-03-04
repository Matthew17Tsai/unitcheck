# unitcheck> unit-converter-tests@1.0.0 test
> jest --watchAll=false --verbose

 FAIL  ./converter.test.js
  ✓ freezing point: 0°C should equal 32°F (2 ms)
  ✓ zero km should return zero miles (1 ms)
  ✕ boiling point: 100°C should equal 212°F (2 ms)
  ✕ 1 Liter should equal 0.26 gallons rounded (1 ms)

  ● boiling point: 100°C should equal 212°F

    expect(received).toBe(expected) // Object.is equality

    Expected: 999
    Received: 212

      46 |
      47 | test("boiling point: 100°C should equal 212°F", () => {
    > 48 |   expect(celsiusToFahrenheit(100)).toBe(999); 
         |                                    ^
      49 | });
      50 |
      51 |

      at Object.toBe (converter.test.js:48:36)

  ● 1 Liter should equal 0.26 gallons rounded

    expect(received).toBe(expected) // Object.is equality

    Expected: 0.26
    Received: 999.26

      51 |
      52 | test("1 Liter should equal 0.26 gallons rounded", () => {
    > 53 |   expect(litersToGallons(1)).toBe(0.26);
         |                              ^
      54 | });
      55 |

      at Object.toBe (converter.test.js:53:30)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        0.203 s, estimated 1 s
Ran all test suites.
