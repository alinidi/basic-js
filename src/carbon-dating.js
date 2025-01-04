const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const toNum = parseFloat(sampleActivity);
  if (isNaN(toNum) || toNum <= 0 || toNum >= MODERN_ACTIVITY) return false;
  let age =
    (Math.log(MODERN_ACTIVITY / toNum) * HALF_LIFE_PERIOD) / Math.log(2);
  return Math.ceil(age);
}

module.exports = {
  dateSample,
};
